require("dotenv").config();
const express = require("express");
const { AuthRouter } = require("./Routes/Authroutes");
const { verifyToken } = require("./middlewares/verifyJwt");
const app = express();
const PORT = process.env.PORT || 4030;
const cookieParser = require("cookie-parser");

app.use(express.json());

app.get("/health-check", (req, res) => {
  res.status(200).send("Server is up and running");
});

app.use(cookieParser());
app.use("/auth", AuthRouter);

app.get("/protected", verifyToken, (req, res) => {
  res.status(200).send({ user: req.user, message: "Paiyan Verified!!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
