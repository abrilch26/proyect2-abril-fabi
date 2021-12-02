const Dog = require("./../models/Dog");
const Adopt = require("./../models/Adopt");

//CRUD
//GET DOGS
exports.getDogs = async (req, res) => {
  try {
    const strayDogs = await Dog.find({});
    //renderice la data
    res.render("dogs/allDogs", {
      strayDogs,
    });
  } catch (error) {}
};

//DETAILS DOG
exports.getSingleDog = async (req, res) => {
  const singleDogID = req.params.dogID;
  const getDog = await Dog.findById(singleDogID);
  if (getDog.owner === req.session.currentUser._id) {
    res.render("dogs/singleDog", {
      getDog,
      isOwner: "Es dueño",
    });
    return;
  }
  res.render("dogs/singleDog", {
    getDog,
  });
};

//CREAR PERRITO
//A. Vista crear
exports.getViewCreateDog = (req, res) => {
  res.render("dogs/createDog");
};

//B. Obtener Datos de perrito a crear
exports.postCreateDog = async (req, res) => {
  //obtener datos del formulario
  const name = req.body.name;
  const age = req.body.age;
  const size = req.body.size;
  const sexo = req.body.sexo;
  const funFact = req.body.funFact;
  const image = req.body.image;
  const description = req.body.description;
  const informes = req.body.informes;
  const owner = req.session.currentUser._id;

  const newDogCreated = await Dog.create({
    name,
    age,
    size,
    sexo,
    funFact,
    image,
    description,
    informes,
    owner,
  });
  if (
    !name ||
    !age ||
    !size ||
    !sexo ||
    !funFact ||
    !image ||
    !image ||
    !description ||
    !informes
  ) {
    res.render("dogs/createDog", {
      msg: "Uno o más campos se encuentran vacíos",
    });
    return;
  }
  res.redirect("/dogs/allDogs");
};
//  EDITAR PERRITO
//A.Vista editar
exports.getViewEdit = async (req, res) => {
  //pasarle el id a la vista
  const dogID = req.params.dogID;
  const foundDog = await Dog.findById(dogID);
  console.log(foundDog);
  res.render("dogs/editDog", {
    foundDog,
  });
};

//B. Obtener datos del formulario
exports.postEditDog = async (req, res) => {
  //1. Necesitamos el Id del perrito
  const dogID = req.params.dogID;

  //2. Obtener los Nuevos cambios del formulario
  const name = req.body.name;
  const age = req.body.age;
  const size = req.body.size;
  const sexo = req.body.sexo;
  const funFact = req.body.funFact;
  const image = req.body.image;
  const description = req.body.description;
  const informes = req.body.informes;
  const owner = req.session.currentUser._id;

  //3. Realizar la actualizacion de datos en la DB
  const updateDog = await Dog.findByIdAndUpdate(
    dogID, //id del documento
    { name, age, size, sexo, funFact, image, description, informes, owner },
    { new: true } //devolver a la variable el documento
  );
  res.redirect(`/dogs/allDogs`);
};

//BORRAR PERRITOS
exports.postDeleteDog = async (req, res) => {
  const dogID = req.params.dogID;
  const deletedDog = await Dog.findByIdAndDelete(dogID);
  res.redirect("/dogs/allDogs");
};

//ADOPTAR PERRITO
exports.getViewAdopt = async (req, res) => {
  const dogID = req.params.dogID;
  const foundDog = await Dog.findById(dogID);
  res.render("adoption/formAdoption", {
    foundDog,
  });
};

//POST FORMULARIO ADOPCIÓN
exports.postAdopt = async (req, res) => {
  //obtener datos del formulario
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const country = req.body.country;
  const streetAdress = req.body.streetAdress;
  const postalCode = req.body.postalCode;
  const interes = req.body.interes;
  const pets = req.body.pets;
  const paseos = req.body.paseos;
  const space = req.body.space;

  const newAdoptForm = await Adopt.create({
    firstName,
    lastName,
    email,
    country, //delegacion
    streetAdress,
    postalCode,
    interes,
    pets,
    paseos,
    space,
  });
  if (
    !firstName ||
    !lastName ||
    !email ||
    !country ||
    !streetAdress ||
    !postalCode ||
    !interes ||
    !pets ||
    !paseos ||
    !space
  ) {
    res.render("adoption/formAdoption.hbs", {
      msg: "Uno o más campos se encuentran vacíos",
    });
    return;
  }
  console.log(newAdoptForm);

  res.redirect("/dogs/allDogs");
};
