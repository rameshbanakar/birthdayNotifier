const Birthday=require("../models/BirthDay")
exports.addBd = async(req, res) => {
  const {firstName,lastName,email,phone,DOB,relaion}=req.body;
  const birthDay=new Birthday({
    firstName,
    lastName,
    email,
    phone,
    DOB,
    relaion,
    user:req.user._id

  })
  await birthDay.save()
  res.status(201).send("Birth details added successfully")

};
