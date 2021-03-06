//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const {
  getProfile,
  postCreateDog,
} = require("./../controllers/userController");

const {
  usuarioLoggeado,
  usuarioNoLoggeado,
} = require("./../middlewares/route-guard");

//RUTAS
//Obtener vista
//Query params para renderizar la url user/Dulce
router.get("/:user", getProfile);

//EXPORTACION
module.exports = router;
