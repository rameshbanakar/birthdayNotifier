const express=require("express")
const { addBd } = require("../controllers/birthdayController");
const router=express.Router()
router.route("/addNewBd").post(addBd)
module.exports = router;