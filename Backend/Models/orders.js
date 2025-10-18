const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  meals: { type: [String], required: true },   
  drinks: { type: [String], required: false },
  totalCost: { type: Number, required: true },  
  customerName: { type: String, required: true }, 
  orderDate: { type: Date, default: Date.now }   
});

const Order = mongoose.model('Order', OrdersSchema);
module.exports = Order;
