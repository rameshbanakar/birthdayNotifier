const express = require("express");
const router = express.Router();

const { auth } = require("../middleware/auth");
const {
  addBd,
  getFriends,
  getFamily,
  getRelatives,
  getOthers,
} = require("../controllers/birthdayController");

//router.route("/addNewBd").post(addBd)
router.route("/addNewBd").post(auth, addBd);
router.route("/fetch/friends").get(auth, getFriends);
router.route("/fetch/family").get(auth, getFamily);
router.route("/fetch/relatives").get(auth, getRelatives);
router.route("/fetch/others").get(auth, getOthers);
module.exports = router;
