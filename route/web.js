const express = require("express");
const router = express.Router();

const {usercontroller} = require('../controller/usercontroller')
const frontendcontroller = require('../controller/frontendcontroller')

//frontend
router.get("/",frontendcontroller.home);
router.get("/signin",frontendcontroller.signin);
router.get("/signup",frontendcontroller.signup);
router.get("/about",frontendcontroller.about);
router.get("/contact",frontendcontroller.contact);
router.get("/admin",frontendcontroller.admin);


router.post("/user/signup",usercontroller.signup);



module.exports = router;