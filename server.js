const express = require("express");
const app = express();
app.use(express.json());
app.post("/", (req, res) => {
  //console.log(req.body)
  res.send(req.body);
});
app
  .post("/api/auth", (req, res) => {
    // console.log(req.body)
    res.send("kdjbkurwguiwvjksdvuhruwgrgvuisg");
  })
  .listen(5000, () => console.log("server started@localhost 5000"));
