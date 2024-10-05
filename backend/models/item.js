const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    item: {
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    availablequantity:{
        type:Number,
        required:true,
    }
});

const Item = mongoose.model("Item", itemsSchema);

module.exports = Item;