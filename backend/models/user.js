const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        unique:true,
        type: String,
        required: true,
    },
    email: {
        unique:true,
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true,
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

})

const User = mongoose.model('User', userSchema);

module.exports = User;