const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "enter the first name"],
  },
  lastName: {
    type: String,
    required: [true, "enter the first name"],
  },
  DOB:{
    type:Date,

  },
  email:{
    type:String
  },
  password:{
    type:String
  }
});
const userModel=mongoose.model("user",userSchema)
module.exports=userModel;