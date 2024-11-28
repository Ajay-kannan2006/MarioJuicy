let express = require("express");
let app = express();
let cors = require("cors");
let mongoose = require("mongoose");
app.use(cors());
app.use(express.json())
let port = 8080;
let Item = require('./models/item');
let Offer = require('./models/offers');
let Feedback = require('./models/feedback');
let User = require('./models/user');
async function main() {
    await mongoose.connect('mongodb+srv://ajaykannan1001200635:ajay@cluster0.vgqca.mongodb.net/Mario?retryWrites=true&w=majority&appName=Cluster0');
}

main()
    .then(() => { console.log("connected to the database") });

app.listen(port, () => {
    console.log("connected successfully");
});

app.get("/home", async (req, res) => {
    try {
        let items = await Item.find();
        let offers = await Item.aggregate([{
            $lookup: {
                from: "offers",
                localField: "_id",
                foreignField: "item_id",
                as: "offers_list"
            }
        }, {
            $unwind: "$offers_list"
        }, {
            $project: {
                item: 1,
                price: 1,
                imageUrl: 1,
                discount_percentage: "$offers_list.discount_percentage",
            }
        }]);
        console.log(offers);
        res.json({ items, offers });
    } catch (error) {
        console.error("Failed to fetch data:", error);
        res.status(500).json({ message: "Server error" });
    }
});

app.post("/feedback", async (req, res) => {
    let { feedback_text, rating } = req.body;
    let feedback = new Feedback({
        user_id: new mongoose.Types.ObjectId('673b3b9f840a7daf56f13b02'),
        feedback: feedback_text,
        rating: rating,
    });
    await feedback.save()
        .then(() => { console.log("Added the feedback"); })
        .catch((e) => { console.error(e); });
    let user = await User.findById("673b3b9f840a7daf56f13b02");

    if (user) {
        user.feedbacks.push(feedback._id); // Add the feedback ID to the user's feedback array
        await user.save(); // Save the updated user document
        console.log("Added the feedback in user too");
    } else {
        console.error("User not found");
        return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: 'successful' });
})


// app.get('/home', (req, res) => {
//     let details = [{ item: "banana juice", availablequantity: 20, price: 20 }, { item: "orange juice", availablequantity: 20, price: 20 }, { item: "apple juice", availablequantity: 20, price: 20 }];
//     res.json(details);
// })
