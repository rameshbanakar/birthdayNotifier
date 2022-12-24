const express = require("express");
const app = express();
app.use(express.json());
app
  .get("/", (req, res) => {
    res.send("hello");
  })
  .listen(5000, () => console.log("server started@localhost 5000"));
