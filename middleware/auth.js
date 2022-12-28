const jwt = require("jsonwebtoken");
const User=require("../models/Users")
exports.auth = async function (req, res, next) {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(" ")[1];
    // Set token from cookie
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }
  if (!token) {
    return res.status(401).send("you are not logged in");
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = await User.findById(decoded.user.id);
    //console.log(req.user)
    next();
  } catch (err) {
    return res.status(401).send("you are not logged in");
  }
};
