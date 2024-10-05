const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    wallet_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wallet',
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Favourite',
    }]
    , feedbacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback',
    }],
    history: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'History',
    }],
    offers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offer',
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;