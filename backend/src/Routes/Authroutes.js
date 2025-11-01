const express = require("express");
const { registerUser } = require("../Controllers/usercontroller");
const router = express.Router();

router.post("/signup", registerUser).post("/login", loginUser);

module.exports = { router };
