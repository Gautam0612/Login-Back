const express = require('express');
const router = express.Router();

const mong = require("mongoose");

const User = require("./Schemas");

// express.use(cors());


router.post("signin", (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date
    });

    user.save();
    res.send("User saved");
});

exports.router = router;
