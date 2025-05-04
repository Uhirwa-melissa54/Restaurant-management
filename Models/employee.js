const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const EmployeeSchema=mongoose.Schema({
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
    gender:{
        type:String,
        required:true,
        enum:{
            values:["F","M"],
            message:"{VALUE} invalid gender"
        }
    },
    id:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
EmployeeSchema.pre('save',async function(next){
    if(!this.isModified('password')){return next()};
    this.password= await bcrypt.hash(this.password,10);
});
const Employee=mongoose.model("Employee",EmployeeSchema);
module.exports=Employee;