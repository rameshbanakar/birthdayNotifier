const express = require("express");
const dotenv = require("dotenv");
//const path=require("path")
const authRoute = require("./router/authRoute");
const birthdayRoute = require("./router/birthdayRoute");
const cookieParser = require("cookie-parser");
const hpp = require("hpp");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const connectDb = require("./db");
const morgan = require("morgan");
dotenv.config({ path: "./config/config.env" });
connectDb();
const app = express();

app.use(cookieParser());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(mongoSanitize());
app.use(helmet());
//cross site scriptinng
app.use(xss());
app.use(hpp());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/birthday", birthdayRoute);
app.listen(5000, () => console.log("server started@localhost 5000"));
