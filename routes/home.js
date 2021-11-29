//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const {
  home,
  getSignup,
  postSignup,
  getLogin,
  postLogin,
} = require("./../controllers/homeController");

//HOME
router.get("/", home);

//REGISTER
router.get("/signup", homeController.getSignup)
router.post("/signup", homeController.postSignup)



router.get("/signup", getSignup);
router.post("/signup", postSignup);

//LOGIN
//renderizar el form
router.get("/login", getLogin);
//mandar datos
router.post("/login", postLogin);

//EXPORTACION
module.exports = router;
