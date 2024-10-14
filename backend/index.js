const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())


const users = {
    id: 21, name: "Ajay",
}

app.listen(8080, () => {
    console.log("connected");
})


app.get('/api', (req, res) => {
    const num = req.params.num;
    res.json(users);
})