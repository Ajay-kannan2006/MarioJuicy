const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
    },
    email: {
        type: String,
    }
})


const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;