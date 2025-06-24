const Joi=require('joi');
const jwt=require('jsonwebtoken');
const config=require('config');
const Client=require('../Models/clients');
const bcrypt=require('bcrypt');
const Goods=require('../Models/items');
function generateTokens(payload,secret,options){
    const accessToken=jwt.sign(payload,secret, options);
    return accessToken;
}
function generateRefreshToken(payload,secret,options){
    const refreshToken=jwt.sign(payload,secret,options);
    return refreshToken;
}
exports.register= async function (req,res){
    try{
    const clientSchema=Joi.object({
        name:Joi.string().required(),
        email:Joi.string().required(),
        age:Joi.number().required(),
        location:Joi.string().required(),
        password:Joi.string().min(8).required()
    })
    const {error}=clientSchema.validate(req.body);
    if(error){ return res.status(400).send({message:error.details[0].message})};

    const client=new Client(req.body);
    await client.save();
    const token=generateTokens({id:client._id}, config.get('jwtsecret'),{expiresIn:"1h"});
    const refreshToken=generateRefreshToken({id:client._id,name:client.name},config.get('refreshsecrets'),{expiresIn:"5d"})
    res.cookie('token',token,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge:3600000
    });

    res.cookie('refreshToken',refreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge:3600000
    });


res.status(201).send({message:"Registered succussefully"}) 
}
catch(err){
    res.status(500).send({err})
}
}

exports.login= async function(req,res){
    try{
    const {name, password}=req.body;
    const client= await Client.findOne({name:name});
    if(!client ){
        res.status(404).send({message:"Username not registered"});
    };
    if(!(await bcrypt.compare(password,client.password))){
        res.status(401).send({message:"Invalide credentials"})
    }
    const token=generateTokens({id:client._id}, config.get('jwtsecret'),{expiresIn:"1h"});
    const refreshToken=generateRefreshToken({id:client._id,name:client.name},config.get('refreshsecrets'),{expiresIn:"5d"})
     res.cookie('token',token,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge:3600000
    });
    res.cookie('token',refreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge:3600000
    });

res.status(201).send({message:"Loggen in succussefully"}) 

    }
    catch(error){
        res.status(500).send({message:error.message})
    }
}

exports.getItems=async function(req,res){
    const goods = await Goods.find({});
    res.status(200).send(goods)
}
exports.getItemsByName=async function(req,res){
    const name=req.params.name
    const goods = await Goods.findOne({name:new RegExp(`^${name}$`, 'i')});
    if(!goods){
        res.status(404).send("We do not have that item")
    }
    res.status(200).send(goods)
}