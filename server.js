const express = require("express");
const app = express();
app.use(express.json());
app.post("/", (req, res) => {
  //console.log(req.body)
  res.send(req.body);
});
app
  .post("/api/auth/signup", (req, res) => {
    // console.log(req.body)
    res.send("ikdjbkurwguiwvjksdvuhruwgrgvuisg");
  })
  .listen(5000, () => console.log("server started@localhost 5000"));
