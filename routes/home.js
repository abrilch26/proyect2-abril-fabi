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

const {
  usuarioLoggeado,
  usuarioNoLoggeado,
}= require("./../middlewares/route-guard")

//REGISTER
router.get("/signup", usuarioNoLoggeado, getSignup);
router.post("/signup",usuarioNoLoggeado, postSignup);

//LOGIN
//renderizar el form
router.get("/login",usuarioNoLoggeado, getLogin);
//mandar datos
router.post("/login", usuarioNoLoggeado, postLogin);

//HOME
router.get("/", home);

//EXPORTACION
module.exports = router;
