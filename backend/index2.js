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
const port = 8080; // Update port as needed

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Connect to MongoDB
async function main() {
    await mongoose.connect('mongodb+srv://ajaykannan1001200635:ajay@cluster0.vgqca.mongodb.net/Mario?retryWrites=true&w=majority&appName=Cluster0', {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of the default 30 seconds
        // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        // // poolSize: 10,
    });
    console.log("Connection successful");
}

async function initializeMoreData() {
    await Promise.all([
        User.deleteMany(),
        Wallet.deleteMany(),
        Transaction.deleteMany(),
        Order.deleteMany(),
        Offer.deleteMany(),
        Feedback.deleteMany(),
        Favourite.deleteMany(),
        Cart.deleteMany(),
        Item.deleteMany(),
    ])
    const users = [
        {
            name: "John",
            email: "john@gmail.com",
            walletBalance: 200,
            orderItem: {
                name: "Orange Juice",
                price: 60,
                category: "Juice",
                quantity: 1,
                availableQuantity: 150
            },
            feedback: "Excellent service",
            rating: 5,
            discountPercentage: 10
        },
        {
            name: "Jane",
            email: "jane@gmail.com",
            walletBalance: 300,
            orderItem: {
                name: "Mango Smoothie",
                price: 70,
                category: "Smoothie",
                quantity: 2,
                availableQuantity: 120
            },
            feedback: "Very good",
            rating: 4,
            discountPercentage: 7
        },
        {
            name: "Alice",
            email: "alice@gmail.com",
            walletBalance: 150,
            orderItem: {
                name: "Lemonade",
                price: 40,
                category: "Drink",
                quantity: 3,
                availableQuantity: 100
            },
            feedback: "Good experience",
            rating: 4,
            discountPercentage: 15
        },
        {
            name: "Bob",
            email: "bob@gmail.com",
            walletBalance: 250,
            orderItem: {
                name: "Chocolate Milkshake",
                price: 80,
                category: "Milkshake",
                quantity: 2,
                availableQuantity: 80
            },
            feedback: "Average service",
            rating: 3,
            discountPercentage: 5
        },
        {
            name: "Eve",
            email: "eve@gmail.com",
            walletBalance: 350,
            orderItem: {
                name: "Green Tea",
                price: 30,
                category: "Tea",
                quantity: 5,
                availableQuantity: 200
            },
            feedback: "Great quality",
            rating: 5,
            discountPercentage: 20
        }
    ];

    for (let userData of users) {
        const user = new User({
            name: userData.name,
            email: userData.email,
        });

        await user.save();

        const wallet = new Wallet({
            user_id: user._id,
            balance: userData.walletBalance,
            lastUpdated: new Date(),
        });

        user.wallet_id = wallet._id;

        const orderItem = new Item({
            item: userData.orderItem.name,
            price: userData.orderItem.price,
            category: userData.orderItem.category,
            availablequantity: userData.orderItem.availableQuantity,
        });

        await orderItem.save();

        const order = new Order({
            user_id: user._id,
            items: [{
                item_id: orderItem._id,
                quantity: userData.orderItem.quantity,
                price: orderItem.price,
            }],
            total_price: userData.orderItem.price * userData.orderItem.quantity,
            qr_id: "QR" + Math.random().toString(36).substring(2, 8), // Generate a random QR ID
            status: false,
        });

        user.orders.push(order._id);

        const favourite = new Favourite({
            user_id: user._id,
            items: [orderItem._id],
        });

        user.favourites.push(favourite._id);

        const feedback = new Feedback({
            user_id: user._id,
            feedback: userData.feedback,
            rating: userData.rating,
        });

        user.feedbacks.push(feedback._id);

        const offer = new Offer({
            discount_percentage: userData.discountPercentage,
            valid_until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            item_id: orderItem._id,
        });

        // user.offers.push(offer._id);

        const cart = new Cart({
            user_id: user._id,
            items: [{
                item_id: orderItem._id,
                quantity: userData.orderItem.quantity,
                price: orderItem.price,
            }],
            totalPrice: orderItem.price * userData.orderItem.quantity,
        });

        const transaction = new Transaction({
            user_id: user._id,
            amount: userData.orderItem.price * userData.orderItem.quantity,
            order_id: order._id,
            status: true,
            transaction_type: 'card',
        });

        await Promise.all([
            wallet.save(),
            order.save(),
            favourite.save(),
            feedback.save(),
            offer.save(),
            cart.save(),
            transaction.save(),
        ]);

        await user.save();
    }
}

// Call main to connect to the database and then initialize more data
main()
    .then(() => initializeMoreData())
    .then(() => console.log("More data initialized successfully"))
    .catch(err => console.error("Error:", err));

// Define a simple route
app.get('/hello', (req, res) => {
    res.send("Welcome to the API!");
});
