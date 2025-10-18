const express=require('express');
const clientRouter=express.Router();
const clientController=require('../Backend/Controllers/clientController');
const auth=require("../Backend/Middleware/auth");

clientRouter.post('/register', clientController.register);
clientRouter.post('/login', clientController.login);
clientRouter.get('/items', auth,clientController.getItems);
clientRouter.get('/items/name/:name', auth,clientController.getItemsByName);
clientRouter.get('/items/category/:category', clientController.getItemsByCategory);
clientRouter.post('/items/makeOrder',clientController.makeOrder);



module.exports=clientRouter;