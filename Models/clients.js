const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const ClientSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

ClientSchema.pre('save', async function(next){
    try{
    if(!this.isModified('password')){ return next()};
    this.password= await bcrypt.hash(this.password, 10);
    next();
    }
    catch(error){
        next(error);
    }
    })
const Client=mongoose.model('client',ClientSchema);
module.exports=Client;