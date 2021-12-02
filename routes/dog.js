//1. IMPORTACIONES
const express = require("express");
const router = express.Router();
const {
  usuarioLoggeado,
  usuarioNoLoggeado,
} = require("./../middlewares/route-guard");

const {
  getSingleDog,
  getViewCreateDog,
  postCreateDog,
  getDogs,
  getViewEdit,
  postEditDog,
  postDeleteDog,
  getViewAdopt,
  postAdopt
} = require("./../controllers/dogsController");

//CRUD
//Renderizar List de Dogs
router.get("/allDogs", usuarioLoggeado, getDogs);

//CREAR PERRITO
router.get("/createDog", usuarioLoggeado, getViewCreateDog);
router.post("/createDog", usuarioLoggeado, postCreateDog);

//Get details dog
router.get("/:dogID", usuarioLoggeado, getSingleDog);

//EDITAR PERRITO
router.get("/:dogID/editDog/", usuarioLoggeado, getViewEdit);
router.post("/:dogID/editDog/", usuarioLoggeado, postEditDog);

//BORRAR PERRITOS
router.post("/:dogID/deleteDog/", usuarioLoggeado, postDeleteDog);

//ADOPTAR PERRITOS
//Get view adopt
router.get("/:dogID/adopt/", usuarioLoggeado, getViewAdopt);

router.post("/:dogID/adopt/", usuarioLoggeado, postAdopt);

//EXPORTACIONES
module.exports = router;
