const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./router/authRoute");
const birthdayRoute = require("./router/birthdayRoute");
const connectDb  = require("./db");
dotenv.config({ path: "./config/config.env" });
connectDb()
const app = express();
app.use(express.json());
app.use("/api/auth",authRoute)
app.use("/api/birthday", birthdayRoute);
app.listen(5000, () => console.log("server started@localhost 5000"));
