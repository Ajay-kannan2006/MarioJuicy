// <<<<<<< HEAD
// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors())


// const users = {
//     id: 21, name: "Ajay",
// }

// app.listen(8080, () => {
//     console.log("connected");
// })


// app.get('/api', (req, res) => {
//     const num = req.params.num;
//     res.json(users);
// })
// =======
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.js");
const Wallet = require("./models/wallet.js");
const Transaction = require("./models/transaction.js");
const Order = require("./models/order.js");
const Offer = require("./models/offers.js");
const Feedback = require("./models/feedback.js");
const Favourite = require("./models/favourites.js");
const Cart = require("./models/cart.js");
const Item = require("./models/item.js");
const cors = require("cors")
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
const bcrypt = require("bcrypt")

app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json())
dotenv.config();



mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connected successfully")
}).catch((err) => {
    console.log(err)
})
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
// >>>>>>> 1f740dd11f6c87f8b543235e945c3df2373ee7b5



app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    var hashedPassword = await bcrypt.hash(password, 10);
    try {
        const existingUser = await User.findOne({
            $or: [{ email }, { name }]
        });
        if (existingUser) {
            return res.status(400).json({ error: existingUser.email === email ? "Email already exists" : "Username already exists" });
        }
        const newCustomer = new User({
            name: name,
            email: email,
            password: hashedPassword
        });
        await newCustomer.save();
        res.status(201).send("yooo!");
        console.log("value recived")
    } catch (e) {
        res.status(500).send("internal error signup unsuccessful")
        console.log("unSuccessful")

    }
})

const verifyToken=(req,res,next)=>{
    try {
        var token = req.headers.authorization;
        
        if (!token) {
            return res.status(401).json({ message: "Request denied: No token provided" });
        }
        if (token.startsWith("Bearer ")) {
            token = token.split(" ")[1];
        }
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;

        next();

    } catch (err) {
        return res.status(400).json({ message: "Invalid token" });
    }
}
app.get('/json',verifyToken,(req,res)=>{
    res.json({message:"this is middleware check",user:req.user});
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found", isvalid: false });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password", isvalid: false });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, {
            expiresIn: "1h",
        });

        res.status(200).json({
            message: "Login successful",
            token,
            isvalid: true
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.listen(process.env.port, () => {
    console.log(`Listening on port ${process.env.port}`);
});