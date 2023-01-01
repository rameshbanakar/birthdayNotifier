const Birthday = require("../models/BirthDay");
exports.addBd = async (req, res) => {
  const { firstName, lastName, email, phone, DOB, relation } = req.body;
  const birthDay = new Birthday({
    firstName,
    lastName,
    email,
    phone,
    DOB,
    relation,
    user: req.user._id,
  });
  await birthDay.save();
  res.status(201).send("Birth details added successfully");
};
exports.getFriends = async (req, res) => {
  const data = await Birthday.find({ user: req.user._id, relation: "Friend" });
  res.send(data);
};
exports.getFamily = async (req, res) => {
  const data = await Birthday.find({
    user: req.user._id,
    relation: "Family Member",
  });
  res.send(data);
};
exports.getRelatives = async (req, res) => {
  const data = await Birthday.find({
    user: req.user._id,
    relation: "Relative",
  });
  res.send(data);
};
exports.getOthers = async (req, res) => {
  const data = await Birthday.find({
    user: req.user._id,
    relation: "Other",
  });
  res.send(data);
};

exports.birthdays = async (req, res) => {
  const data = await Birthday.find({ user: req.user._id });

  res.send(data);
};
exports.deleteBD = async (req, res) => {
  //console.log(req.params.id,"delete called in controller");
  const data = await Birthday.findByIdAndDelete(req.params.id);
  //console.log(data)
  res.send("deleted succesfully");
};
