const mongoose = require('mongoose');
const items = require('./itemss');

const ItemsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    cost: { type: String, required: true },
    ingredient: { type: String, required: true },
    component: { type: String, required: true },
    associate: { type: String, required: true }
});

const Goods = mongoose.model('Item', ItemsSchema);


// Insert items once if not already in DB
(async () => {
    try {
        
        const count = await Goods.countDocuments();
        if (count === 0) {
            await Goods.insertMany(items);
            console.log("Items inserted successfully");
        } else {
            console.log("Items already exist");
        }
    } catch (err) {
        console.error("Error inserting items:", err);
    }
});

module.exports = Goods; // ✅ Make sure only the model is exported
