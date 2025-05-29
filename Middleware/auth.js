const express=require('express');
const config=require('config');
const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    const token= req.cookies.token;
    console.log(token)
    if(!token){
     return res.status(401).send({message:"No token provided Autheticate yourself"});
    }
    try{
        const decoded=jwt.verify(token,config.get('jwtsecret'));
        req.user=decoded;
        next();
    }
    catch(error){
        console.log(error);
        return res.status(401).send({ message: "DInvalid or expired token." });
    }
}

