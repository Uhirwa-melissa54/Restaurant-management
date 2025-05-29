const Joi=require('joi');
const jwt=require('jsonwebtoken');
const config=require('config');
const bcrypt=require('bcrypt');
const Employee=require('../Models/employee');
const Roles=require('../Models/roles');
const Items=require('../Models/items');
const Clients=require('../Models/clients')
function generateTokens(payload,secret,options){
    const token=jwt.sign(payload,secret, options);
    
    return token;
}
function generateRefreshToken(payload,secret,options){
    const refreshToken=jwt.sign(payload,secret,options);
    return refreshToken;
}

const employeeSchema=Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    age:Joi.number().required(),
    gender:Joi.string().valid('F','M'),//add in database schema
    roleId:Joi.number().required(),//change in database
    password:Joi.string().min(8).required()
});

const itemsSchema=Joi.object({
    name:Joi.string().required(),
    type:Joi.string().required(),
    cost:Joi.string().required(),
    ingredient:Joi.string().required(),
    component:Joi.string().required(),
    associate:Joi.string().required(),
})
exports.register= async function (req,res){
    try{
  
    const {error}=employeeSchema.validate(req.body);
    if(error){ return res.status(400).send({message:error.details[0].message})};
const role=await Roles.findOne({id:req.body.roleId});
if(!role){return res.status(401).send({message:"Invalid role.you may be client"})}
    const employee=new Employee(req.body);

    await employee.save();
    const token=generateTokens({roleId:employee.roleId},config.get('jwtsecret'),{expiresIn:"1h"});
    const refreshToken=generateRefreshToken({roleId:employee.roleId,name:employee.name},config.get('refreshsecret'), {expiresIn:"5d"});
    res.json({token:token});
    res.cookie('refreshToken',refreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:'Strict',
        maxAge:3600000
    });
    //is it possible
    res.status(201).send({token:"Registered successfully"})

}
catch(err){
    res.status(500).send({err})
}
}
const loginSchema=Joi.object(
    {
        name:Joi.string().required(),
        password:Joi.string().required()
    }
)
exports.login= async function(req,res){
    try{
     const {error}=loginSchema.validate(req.body);
    if(error){ return res.status(400).send({message:error.details[0].message})};   
    const {name, password}=req.body;
    const employee= await Employee.findOne({name:name});
    if(!employee ){
        res.status(404).send({message:"Username not registered"});
    };
    if(!(await bcrypt.compare(password,employee.password))){
        res.status(401).send({message:"Invalide credentials"})
    }
 const token=generateTokens({roleId:employee.roleId},config.get('jwtsecret'),{expiresIn:"1h"})
 const refreshToken=generateRefreshToken({roleId:employee.roleId,name:employee.name},config.get('refreshse'), {expiresIn:"5d"});
res.json({token:token})
    res.cookie('refreshtoken',refreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:'Strict',
        maxAge:3600000
    });

res.status(200).send({token:"Logged in Successfully"}) 
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
}

exports.createNewUser= async function (req,res){
    try{
        const {error}=employeeSchema.validate(req.body);
        if(error){ return res.status(400).send({message:error.details[0].message})};
    const role=await Roles.findOne({id:req.body.roleId});
    if(!role){return res.status(401).send({message:"We do not have this position."})}
        const employee=new Employee(req.body);
    
        await employee.save();
        res.status(201).send({message:"New user created succefully"});
    }
    catch(err){
 console.log(err)
 res.status(500).send({message:"Unable to load the message"});
    }

}
exports.createNewItem=async function (req,res){
    const {error}=itemsSchema.validate(req.body);
    if(error){ return res.status(400).send({message:error.details[0].message})};
    const item=new Items(req.body);
    await item.save();
    res.status(201).send({message:"New item was created successfully"})


}

exports.getClients=async function (req,res){
    const clients= await Clients.find({});
    res.status(200).send(clients)

}
//security checks
exports.updateItems=async function (req,res){
    const item=await Items.findOneAndUpdate({name:req.params.name},req.body,{new:true});
    if(!item){
        res.status(404).send({message:"There is no item with that name"});
    }
    res.status(201).send(item);
}
exports.deleteItems=async function(req,res){
    const item=await Items.findOneAndDelete({name:req.params.name});
    if(!item){res.status(404).send({message:"No item found"})}
    res.status(200).send({message:"Item was removed from database successfully"});
}
exports.deleteClients=async function(req,res){
    try{
    const user=await Clients.findOneAndDelete({name:req.params.name});
    if(!user){res.status(404).send({message:"No client found"})}
    res.status(200).send({message:"Client has been deleted successfully"})
    }
    catch(err){
        console.log(err);
        res.status(201).send({message:"An error occured"})
    }
}