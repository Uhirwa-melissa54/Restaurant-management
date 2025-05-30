const express=require('express');
const app=express();
const cors=require('cors')
const cookieParser = require('cookie-parser');
const config=require('config');
const helmet=require('helmet');
const dbConnection=require('./config/dbconnect');
const clientsRouter=require('./routes/clientsRouter');
const employeeRouter=require('./routes/employeesRouter');
app.use(cors());
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

app.use(express.json());
app.use(cookieParser());
app.use("/clients", clientsRouter);
app.use("/employee", employeeRouter);

dbConnection();
app.listen(config.get('port'),()=>{
    console.log(`Server is listening ${config.get('port')}`)
}) 