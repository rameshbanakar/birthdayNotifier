const express = require("express");
const dotenv = require("dotenv");
//const path=require("path")
const authRoute = require("./router/authRoute");
const birthdayRoute = require("./router/birthdayRoute");
const cookieParser = require("cookie-parser");
const connectDb  = require("./db");

dotenv.config({ path: "./config/config.env" });
connectDb()
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoute)
app.use("/api/birthday", birthdayRoute);
app.listen(5000, () => console.log("server started@localhost 5000"));
