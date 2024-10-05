const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User',
    },
    feedback:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;