const mongoose=require("mongoose")
const birthDaySchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  DOB: {
    type: String,
  },
  phone: {
    type: String,
  },
  relation: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});
const birthDayModel=new mongoose.model("birthday",birthDaySchema)
module.exports = birthDayModel;