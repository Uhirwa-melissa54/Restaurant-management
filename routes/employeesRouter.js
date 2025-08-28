const express=require('express');
const employeeRouter=express.Router();
const employeeController=require('../Backend/Controllers/employeeController');
const auth=require("../Backend/Middleware/auth");
const admin=require("../Backend/Middleware/admin");


employeeRouter.post('/register', employeeController.register);
employeeRouter.post('/login', employeeController.login);
employeeRouter.post('/createNewUser',auth,admin,employeeController.createNewUser);
employeeRouter.post('/createNewItem', auth,employeeController.createNewItem);
employeeRouter.get('/getClients', auth,employeeController.getClients);
employeeRouter.put('/editItems/:name', auth,employeeController.updateItems);
employeeRouter.delete('/deleteItems/:name',auth,admin, employeeController.deleteItems);
employeeRouter.delete('/deleteClient/:name', auth,admin,employeeController.deleteClients);



module.exports=employeeRouter;