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

const app = express();
const port = 3000; // Update port as needed

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Connect to MongoDB
async function main() {
    await mongoose.connect('mongodb+srv://ajaykannan1001200635:ajay@cluster0.vgqca.mongodb.net/Mario?retryWrites=true&w=majority&appName=Cluster0');
    console.log("Connection successful");
}

// Initialize the database with one user and related data
async function initialize() {
    const user = new User({
        name: "Ajay",
        email: "ajay@gmail.com",
    });

    await user.save(); // Save the user first to get the user ID

    const wallet = new Wallet({
        user_id: user._id,
        balance: 100,
        lastUpdated: new Date(),
    });

    user.wallet_id = wallet._id; // Link wallet to user

    const orderItem = new Item({
        item: "Apple Juice",
        price: 50,
        category: "Juice",
        availablequantity: 200,
    });

    await orderItem.save(); // Save the item first

    const order = new Order({
        user_id: user._id,
        items: [{
            item_id: orderItem._id,
            quantity: 1,
            price: orderItem.price,
        }],
        total_price: orderItem.price,
        qr_id: "QR123456", // Example QR ID
        status: false,
    });

    user.orders.push(order._id); // Link order to user

    const favourite = new Favourite({
        user_id: user._id,
        items: [orderItem._id], // Add the item to favorites
    });

    user.favourites.push(favourite._id); // Link favourite to user

    const feedback = new Feedback({
        user_id: user._id,
        feedback: "Good service",
        rating: 4,
    });

    user.feedbacks.push(feedback._id); // Link feedback to user

    const offer = new Offer({
        discount_percentage: 5,
        valid_until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Valid for 7 days
    });

    user.offers.push(offer._id); // Link offer to user

    const cart = new Cart({
        user_id: user._id,
        items: [{
            item_id: orderItem._id,
            quantity: 1,
            price: orderItem.price,
        }],
        totalPrice: orderItem.price,
    });

    const transaction = new Transaction({
        user_id: user._id,
        amount: 50,
        order_id: order._id,
        status: true,
        transaction_type: 'card',
    });

    // Save all the related documents
    await Promise.all([
        wallet.save(),
        order.save(),
        favourite.save(),
        feedback.save(),
        offer.save(),
        cart.save(),
        transaction.save(),
    ]);

    // Finally save the user with all references updated
    await user.save();
}

// Call main to connect to the database and then initialize data
main()
    .then(() => initialize())
    .then(() => console.log("Data initialized successfully"))
    .catch(err => console.error("Error:", err));

// Define a simple route
app.get('/', (req, res) => {
    res.send("Welcome to the API!");
});
