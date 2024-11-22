let express = require("express");
let app = express();
let cors = require("cors");
let mongoose = require("mongoose");
app.use(cors());
let port = 8080;
let Item = require('./models/item');
let Offer = require('./models/offers');

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
        // Fetch items and offers
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


// app.get('/home', (req, res) => {
//     let details = [{ item: "banana juice", availablequantity: 20, price: 20 }, { item: "orange juice", availablequantity: 20, price: 20 }, { item: "apple juice", availablequantity: 20, price: 20 }];
//     res.json(details);
// })
