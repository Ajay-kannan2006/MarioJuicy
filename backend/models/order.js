const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User,'
    },
    items:{
        item_id:{
            type: mongoose.Schema.Types.ObjectId, 
            required:true,
            ref:'User',
        },
        quantity:{
            type:Number,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        }
    },
    total_price:{
        type:Number,
        required:true,
    },

    qr_id:{
        type:String,
        required:true,

    },
    Status:{
        type:String,
        required:true,
    }
    
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;