const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'users',
    },
    balance: {
        type: Number,
        required: true,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

const Wallet = mongoose.model("Wallet", walletSchema);

module.exports = Wallet;