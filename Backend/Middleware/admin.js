const mongoose=require('mongoose');
const Roles=require('../Models/roles')
module.exports=async (req,res,next)=>{
    try{
    const role=await Roles.findOne({id:req.user.roleId});
    if(role.name!=='admin'){
        res.status(403).send({message:"Admin Access Required"});
    }
    next();
}
catch(err){
    console.log(err)
    res.status(500).send({message:"There has been an error"})
}


}
