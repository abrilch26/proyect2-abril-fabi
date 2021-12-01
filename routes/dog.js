//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const {
  usuarioLoggeado,
  usuarioNoLoggeado,
} = require("./../middlewares/route-guard");

const { getSingleDog, getDogs } = require("./../controllers/dogsController");

//CRUD
//Renderizar List de Dogs
router.get("/allDogs", usuarioLoggeado, getDogs);

//Get details dog
router.get("/:dogID", usuarioLoggeado, getSingleDog);

//EXPORTACIONES
module.exports = router;