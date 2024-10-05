const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
    }],
})

const Favourite = mongoose.model('Favourite', favouriteSchema);

module.exports = Favourite;