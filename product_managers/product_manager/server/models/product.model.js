const mongoose = require('mongoose');
const ProductSchema= new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title is required"],
        minlength: [1, "Title must be at least one character long"]
    }, 
    price:{
        type:Number,
        required:[true, "price is required"],
        min:[.99, "Price must be at least 99 cents"]
    }, 
    description:{
        type: String, 
        required:[true, "Description is required"], 
        minlength:[5, "Description must be at least 5 characters long"]
    }
}, 
{timestamps: true});

const Product = mongoose.model("Product" , ProductSchema);
module.exports = Product;