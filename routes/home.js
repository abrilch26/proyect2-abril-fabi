//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const homeController = require("./../controllers/homeController");

//HOME
router.get("/", homeController.home)

//REGISTER
router.get("/signup", homeController.getSignup)
router.post("/signup", homeController.postSignup)




//LOGIN
//renderizar el form
router.get("/login", homeController.getLogin);
//mandar datos
router.post("/login", homeController.postLogin);

//EXPORTACION
module.exports = router;
