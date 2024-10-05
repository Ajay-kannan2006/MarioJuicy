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
        ref: 'wallets',
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders',
    }],
    favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'favourites',
    }]
    , feedbacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'favourites',
    }],
    history: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'histories',
    }],
    offers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'offers',
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;