const express=require('express');
const app=express();
const jwt=require('jwt')
const cookieParser = require('cookie-parser');
const config=require('config');
const helmet=require('helmet');
const dbConnection=require('./config/dbconnect');
const clientsRouter=require('./routes/clientsRouter');
const employeeRouter=require('./routes/employeesRouter');
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://trusted-cdn.com"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
    },
  })
);
app.post('/refresh',(req,res)=>{
    const refreshToken=req.cookies.refreshToken;
    if(!refreshToken) res.status(401).send({message:"Authenticate yourself"});
    try{
         const decoded=jwt.verify(token,config.get('refreshsecrets'))
         req.user=decoded;
         const token =generateToken(payload,secrets,options);
        res.json({token})
    }
    catch(err){
        console.log(err);
    }

})
app.use(express.json());
app.use(cookieParser());
app.use("/clients", clientsRouter);
app.use("/employee", employeeRouter);

dbConnection();
app.listen(config.get('port'),()=>{
    console.log(`Server is listening ${config.get('port')}`)
}) 