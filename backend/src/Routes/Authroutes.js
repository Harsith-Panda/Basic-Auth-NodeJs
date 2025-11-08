const express = require("express");
const {
  registerUser,
  loginUser,
  handleRefreshToken,
  logoutHandler,
} = require("../Controllers/usercontroller");
const router = express.Router();

router
  .post("/signup", registerUser)
  .post("/login", loginUser)
  .post("/refresh", handleRefreshToken)
  .post("/logout", logoutHandler)
  .post("/logout", logoutHandler);

module.exports = { AuthRouter: router };
