const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const User=require("../models/Users")
exports.loginUser=(req,res)=>{
   res.send("hello login")
}
exports.signupUser = async(req, res) => {
  const {email,password}=req.body;
  let user=await User.findOne({email})
  if(user){
     return res.status(409).send("user already exists")
  }
  const salt=await bcrypt.genSalt(10)
  const hashPass=await bcrypt.hash(password,salt)
  user=new User(req.body)
  user.password=hashPass
  await user.save()
  const payload = { user: { id: user.id } };
  const token = await jwt.sign(payload, process.env.JWT_SECRET);
  console.log(token)
  res.send(token)
};