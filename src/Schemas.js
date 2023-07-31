const express = require("express");
const mong = require("mongoose")
// const cors = require("cors")

// express.use(cors());

const userSchema = mong.Schema({
    name: String,
    email: String,
    password: String,
    date: String
    
});


const User = mong.model("User", userSchema);
exports.User = User;