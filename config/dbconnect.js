const mongoose=require('mongoose');
const express=require('express');
const config=require('config')
function connectDb(){
const url=config.get('mongoUrl');

const mongooseOptions={
    serverSelectionTimeoutMS:5000,
    socketTimeoutMS:45000
}
    mongoose.connect(url,mongooseOptions);
    const dbConnection=mongoose.connection;
    dbConnection.once('open',(_)=>{
console.log(`Database connected succesfully ${url}`)
    });
    dbConnection.on("error", (err)=>{
        console.log(err)
    });
    dbConnection.on("disconnect",()=>{
        console.log("Database was disconnected")
    });

    process.once("SIGINT",async ()=>{
        await mongoose.connection.close();
        console.log("Database was disconnected due to termination")
        
    })
}

module.exports=connectDb;