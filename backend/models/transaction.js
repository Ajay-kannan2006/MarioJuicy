const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User',
    },
    amount: {
        type: Number,
        required:true,
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Order',
    },
    status:{
        type:String,
        required:true,
    },
    transaction_type:{
        type:String,
        required:true,
    }
})


const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;