const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const User=require("../models/Users")
exports.loginUser=async(req,res)=>{
  const {email,password}=req.body;
  const user=await User.findOne({email})
  if(!user){
    return res.status(404).send("User not Found")
  }
  const isMatch=await bcrypt.compare(password,user.password)
  if(!isMatch){
    return res.status(401).send("Creditials not correct")
  }
  const payload = { user: { id: user.id } };
  const token = await jwt.sign(payload,process.env.JWT_SECRET);
  res.send(token);
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
  //console.log(token)
  res.send(token)
};
exports.getMe=async(req,res)=>{
  const user=await User.find({"_id":req.user._id})
  if(!user){
    return res.status(404).send("Somthing went Wrong")
  }
  res.send(user)
}