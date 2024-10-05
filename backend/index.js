const express = require("express");
const app = express();
let port = 2;

const Chat = require("./models/chat.js");

app.listen(port, () => {
    console.log(`listens to the port ${port}`);
})

const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://ajaykannan1001200635:ajay@cluster0.vgqca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let chat1 = new Chat({
    from: "hello",
    to: "hi",
});



app.get('/', (req, res) => {

    res.render()
})

chat1.save().then(res => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

