const express=require('express');
const clientRouter=express.Router();
const clientController=require('../Controllers/clientController');
const auth=require("../Middleware/auth");

clientRouter.post('/register', clientController.register);
clientRouter.post('/login', clientController.login);
clientRouter.get('/items', auth,clientController.getItems);
clientRouter.get('/items/:name', auth,clientController.getItemsByName);


module.exports=clientRouter;