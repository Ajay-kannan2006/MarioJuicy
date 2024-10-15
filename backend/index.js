let express = require("express");
let app = express();
let cors = require("cors");

app.use(cors());
let port = 8080;


app.listen(port, () => {
    console.log("connected successfully");
});

app.get("/api", (req, res) => {
    let details = [{ item_name: "noodles", item_quantity: 20, item_price: 50 }, { item_name: "choco", item_quantity: 20, item_price: 50 }, { item_name: "hello", item_quantity: 20, item_price: 50 }];
    res.json(details);
})