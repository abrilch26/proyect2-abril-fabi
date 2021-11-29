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



//REGISTER
router.get("/signup", getSignup);
router.post("/signup", postSignup);

//LOGIN
//renderizar el form
router.get("/login", getLogin);
//mandar datos
router.post("/login", postLogin);

//HOME
router.get("/", home);

//EXPORTACION
module.exports = router;
