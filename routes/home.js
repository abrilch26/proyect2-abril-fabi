//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const {
  home,
  getSignup,
  postSignup,
  getLogin,
  postLogin,
  postLogout,
  getDogs,
} = require("./../controllers/homeController");

const { getSingleDog } = require("./../controllers/dogsController");

const {
  usuarioLoggeado,
  usuarioNoLoggeado,
} = require("./../middlewares/route-guard");

//HOME
//router.get("/", home);
//REGISTER
router.get("/signup", usuarioNoLoggeado, getSignup);
router.post("/signup", usuarioNoLoggeado, postSignup);

//LOGIN
//renderizar el form
router.get("/login", usuarioNoLoggeado, getLogin);
//mandar datos
router.post("/login", usuarioNoLoggeado, postLogin);

//LOGOUT
router.post("/logout", usuarioLoggeado, postLogout);

//CRUD
//Renderizar List de Dogs
router.get("/", getDogs);

//Get details dog
router.get("/:dogID", getSingleDog);

//EXPORTACION
module.exports = router;
