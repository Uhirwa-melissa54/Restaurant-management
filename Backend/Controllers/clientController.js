const Joi=require('joi');
const jwt=require('jsonwebtoken');
const config=require('config');
const Client=require('../Models/clients');
const bcrypt=require('bcrypt');
const Goods=require('../Models/items');
const Order=require("../Models/orders");
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
    const token=generateTokens({id:client._id,name:client.name,email:client.email}, config.get('jwtsecret'),{expiresIn:"15min"});
    const refreshToken=generateRefreshToken({id:client._id,name:client.name},config.get('refreshsecret'),{expiresIn:"5d"});
     res.cookie('refreshToken',refreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge:3600000
    });

    res.status(200).send({
        accessToken:token,
        message:"Registration successfull"
    })

   

}
catch(err){
    console.error("error occured",err)
    res.status(500).send({err})
}
}

exports.login= async function(req,res){
    try{
    const {email, password}=req.body;
    const client= await Client.findOne({email:email});
    if(!client ){
        res.status(404).send({message:"Username not registered"});
    };
    if(!(await bcrypt.compare(password,client.password))){
        res.status(401).send({message:"Invalid Password"})
    }
    const accesstoken=generateTokens({id:client._id,name:client.name,email:client.email}, config.get('jwtsecret'),{expiresIn:"15min"});
    const refreshToken=generateRefreshToken({id:client._id,name:client.name},config.get('refreshsecret'),{expiresIn:"5d"})
    res.cookie('token',refreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge:3600000
    });

     res.status(200).send({
        accessToken:accesstoken,
        message:"Logged in successfull"
    });



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
exports.getItemsByCategory=async function(req,res){
    const category=req.params.category
     const goods = await Goods.find({type:new RegExp(`^${category}$`, 'i')});
        if(!goods){
        res.status(404).send("There isn't scuh category")
    }
    res.status(200).send(goods)

}

exports.makeOrder=async function(req,res){
    try{
        const Joi = require('joi');

const orderSchema = Joi.object({
  meals: Joi.array().items(Joi.string()),
  drinks: Joi.array().items(Joi.string()),
  totalCost: Joi.number().required(),
  customerName: Joi.string().required(),
  orderDate: Joi.date()
})
.or('meals', 'drinks');
const {error}=orderSchema.validate(req.body);
if(error){ return res.status(400).send({message:error.details[0].message})};
const order=new Order(req.body);
await order.save();
res.status(201).send({message:"Order placed successfully"})
}
    catch(error){
        console.log(err)
     res.status(500).send({err})
    }
    
}