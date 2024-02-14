const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

mongoose.connect('Your MONGODB URL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Could not connect to MongoDB:", error);
});

const User = require("./model/user");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", async (req, res) => {
    try {
        console.log("Request Body:", req.body); // Log request body
        const userData = new User(req.body);
        await userData.save();
        console.log("User saved:", userData);
        res.send("User saved successfully");
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("Something went wrong");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
