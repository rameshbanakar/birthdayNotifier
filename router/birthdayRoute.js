const express=require("express")
const router = express.Router();

const {auth} =require("../middleware/auth")
const { addBd } = require("../controllers/birthdayController");

//router.route("/addNewBd").post(addBd)
router.route("/addNewBd").post(auth,addBd);
module.exports = router;