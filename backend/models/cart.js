const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: {
        item_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },
    totalPrice: {
        type: Number,
        required: true,
    }


})

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;