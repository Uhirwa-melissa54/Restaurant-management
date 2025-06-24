const mongoose=require('mongoose');
const roles=require('./rolesss')
    const RoleSchema = new mongoose.Schema({
        
        name: {
          type: String,
          required: true,
          enum:
          {
            values:['admin', 'cashier', 'waiter', 'secretary'],
            message:"{VALUE} invalid job"
        }
           
        },
        roleId:{
          type:Number,
          required:true
        },
        description:{
          type:String,
          required:true
        }
      });
      const Roles=mongoose.model('role',RoleSchema);
      async function checkRoles(){
        try{
        const count= await Roles.countDocuments();
      if(count==0){
await Roles.insertMany(roles);
      }else{
        console.log("roles are already inserted in database");
      }
    }
    catch(err){
      console.log(err);
    }
      }
      checkRoles();
      module.exports=Roles;