//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const { getProfile } = require("./../controllers/userController");

//RUTAS
//Obtener vista
//Query params para renderizar la url user/Dulce
router.get("/:user", getProfile);

//EXPORTACION
module.exports = router;
