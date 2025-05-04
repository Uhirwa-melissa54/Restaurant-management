const Joi=require('joi');
const jwt=require('jsonwebtoken');
const config=require('config');
const Client=require('../Models/clients');
const bcrypt=require('bcrypt');
const Goods=require('../Models/items');
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
const token=jwt.sign({id:client._id},config.get('jwtsecret'),{expiresIn:"1h"});
res.status(201).send({token:token}) 
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
    const token=jwt.sign({id:client._id},config.get('jwtsecret'),{expiresIn:"1h"});
res.status(200).send({token:token, you:client}) 
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