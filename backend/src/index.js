require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4030;

app.get("/health-check", (req, res) => {
  res.status(200).send("Server is up and running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
