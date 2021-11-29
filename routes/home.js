//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const homeController = require("./../controllers/homeController");

router.get("/", homeController.home);

//LOGIN
//renderizar el form
router.get("/login", homeController.getLogin);
//mandar datos
router.post("/login", homeController.postLogin);

module.exports = router;
