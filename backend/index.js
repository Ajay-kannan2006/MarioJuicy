let express = require("express");
let app = express();
let cors = require("cors");
let mongoose = require("mongoose");
app.use(cors());
let port = 8080;
let Item = require('./models/item');

// async function main() {
//     await mongoose.connect('mongodb+srv://ajaykannan1001200635:ajay@cluster0.vgqca.mongodb.net/Mario?retryWrites=true&w=majority&appName=Cluster0');
// }

// main()
//     .then(() => { console.log("connected to the database") });

app.listen(port, () => {
    console.log("connected successfully");
});

// app.get("/home", async (req, res) => {
//     let items = await Item.find();
//     res.json(items);
// })

app.get('/home', (req, res) => {
    let details = [{ item: "banana juice", availablequantity: 20, price: 20 }, { item: "orange juice", availablequantity: 20, price: 20 }, { item: "apple juice", availablequantity: 20, price: 20 }];
    res.json(details);
})
