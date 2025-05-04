const express=require('express');
const app=express();
const config=require('config');
const dbConnection=require('./config/dbconnect');
const clientsRouter=require('./routes/clientsRouter');
const employeeRouter=require('./routes/employeesRouter');

app.use(express.json());

app.use("/clients", clientsRouter);
app.use("/employee", employeeRouter);

dbConnection();
app.listen(config.get('port'),()=>{
    console.log(`Server is listening ${config.get('port')}`)
}) 