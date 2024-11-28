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
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dpkw7d7aa',
    api_key: '496195679164643',
    api_secret: 'R8UAlnQt7GnM0h3RGmSqIa_jWmU'
});


const imageUpload = async (imagePath) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result.url);
        return result.url;
    } catch (error) {
        console.error(error);
    }
}


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
    ]);

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
                availableQuantity: 150,
                imagePath: "./images/orange-juice.jpg",
            },
            feedback: "Excellent service",
            rating: 5,
            discountPercentage: 10,
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
                availableQuantity: 120,
                imagePath: "./images/mango-smoothie.jpg",
            },
            feedback: "Very good",
            rating: 4,
            discountPercentage: 7,
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
                availableQuantity: 100,
                imagePath: "./images/lemonade.jpg",
            },
            feedback: "Good experience",
            rating: 4,
            discountPercentage: 15,
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
                availableQuantity: 80,
                imagePath: "./images/chocolate-milkshake.jpg",
            },
            feedback: "Average service",
            rating: 3,
            discountPercentage: 5,
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
                availableQuantity: 200,
                imagePath: "./images/green-tea.jpg",
            },
            feedback: "Great quality",
            rating: 5,
            discountPercentage: 20,
        },
        // Adding 10 more items below
        {
            name: "Chris",
            email: "chris@gmail.com",
            walletBalance: 400,
            orderItem: {
                name: "Cappuccino",
                price: 100,
                category: "Coffee",
                quantity: 1,
                availableQuantity: 50,
                imagePath: "./images/cappuccino.jpg",
            },
            feedback: "Amazing flavor",
            rating: 5,
            discountPercentage: 10,
        },
        {
            name: "Sophia",
            email: "sophia@gmail.com",
            walletBalance: 450,
            orderItem: {
                name: "Strawberry Shake",
                price: 90,
                category: "Milkshake",
                quantity: 2,
                availableQuantity: 90,
                imagePath: "./images/strawberry-shake.jpg",
            },
            feedback: "Loved it!",
            rating: 5,
            discountPercentage: 15,
        },
        {
            name: "Oliver",
            email: "oliver@gmail.com",
            walletBalance: 300,
            orderItem: {
                name: "Espresso",
                price: 120,
                category: "Coffee",
                quantity: 1,
                availableQuantity: 60,
                imagePath: "./images/espresso.jpg",
            },
            feedback: "Rich and strong",
            rating: 4,
            discountPercentage: 8,
        },
        {
            name: "Mia",
            email: "mia@gmail.com",
            walletBalance: 200,
            orderItem: {
                name: "Pineapple Juice",
                price: 65,
                category: "Juice",
                quantity: 3,
                availableQuantity: 100,
                imagePath: "./images/pineapple-juice.jpg",
            },
            feedback: "Very refreshing",
            rating: 4,
            discountPercentage: 12,
        },
        {
            name: "Noah",
            email: "noah@gmail.com",
            walletBalance: 180,
            orderItem: {
                name: "Iced Latte",
                price: 110,
                category: "Coffee",
                quantity: 2,
                availableQuantity: 40,
                imagePath: "./images/iced-latte.jpg",
            },
            feedback: "Cool and delicious",
            rating: 5,
            discountPercentage: 10,
        },
        {
            name: "Liam",
            email: "liam@gmail.com",
            walletBalance: 500,
            orderItem: {
                name: "Black Coffee",
                price: 70,
                category: "Coffee",
                quantity: 4,
                availableQuantity: 70,
                imagePath: "./images/black-coffee.jpg",
            },
            feedback: "Perfect for mornings",
            rating: 5,
            discountPercentage: 20,
        },
        {
            name: "Emily",
            email: "emily@gmail.com",
            walletBalance: 150,
            orderItem: {
                name: "Carrot Juice",
                price: 50,
                category: "Juice",
                quantity: 2,
                availableQuantity: 80,
                imagePath: "./images/carrot-juice.jpg",
            },
            feedback: "Healthy and tasty",
            rating: 4,
            discountPercentage: 10,
        },
        {
            name: "Ava",
            email: "ava@gmail.com",
            walletBalance: 300,
            orderItem: {
                name: "Vanilla Shake",
                price: 85,
                category: "Milkshake",
                quantity: 2,
                availableQuantity: 100,
                imagePath: "./images/vanilla-shake.jpg",
            },
            feedback: "Smooth and creamy",
            rating: 5,
            discountPercentage: 15,
        },
        {
            name: "Ella",
            email: "ella@gmail.com",
            walletBalance: 250,
            orderItem: {
                name: "Herbal Tea",
                price: 40,
                category: "Tea",
                quantity: 3,
                availableQuantity: 150,
                imagePath: "./images/herbal-tea.jpg",
            },
            feedback: "Relaxing and healthy",
            rating: 4,
            discountPercentage: 12,
        },
        {
            name: "Jack",
            email: "jack@gmail.com",
            walletBalance: 200,
            orderItem: {
                name: "Hot Chocolate",
                price: 75,
                category: "Drink",
                quantity: 1,
                availableQuantity: 50,
                imagePath: "./images/hot-chocolate.jpg",
            },
            feedback: "Rich and warm",
            rating: 5,
            discountPercentage: 18,
        },
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

        const imageUrl = await imageUpload(userData.orderItem.imagePath);
        console.log(typeof imageUrl);


        const orderItem = new Item({
            item: userData.orderItem.name,
            price: userData.orderItem.price,
            category: userData.orderItem.category,
            availablequantity: userData.orderItem.availableQuantity,
            imageUrl: imageUrl,
        });

        await orderItem.save();

        const order = new Order({
            user_id: user._id,
            items: [
                {
                    item_id: orderItem._id,
                    quantity: userData.orderItem.quantity,
                    price: orderItem.price,
                },
            ],
            total_price: userData.orderItem.price * userData.orderItem.quantity,
            qr_id: "QR" + Math.random().toString(36).substring(2, 8),
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

        const cart = new Cart({
            user_id: user._id,
            items: [
                {
                    item_id: orderItem._id,
                    quantity: userData.orderItem.quantity,
                    price: orderItem.price,
                },
            ],
            totalPrice: orderItem.price * userData.orderItem.quantity,
        });

        const transaction = new Transaction({
            user_id: user._id,
            amount: userData.orderItem.price * userData.orderItem.quantity,
            order_id: order._id,
            status: true,
            transaction_type: "card",
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




















