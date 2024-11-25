const mongoose = require("mongoose");

const offersSchema = new mongoose.Schema({
    discount_percentage: {
        type: Number,
        required: true,
    },
    valid_until: {
        type: Date,
        required: true,
    },
    item_id: mongoose.Schema.Types.ObjectId,
});

const Offer = mongoose.model("Offer", offersSchema);

module.exports = Offer;