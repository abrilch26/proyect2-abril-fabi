const Dog = require("./../models/Dog");

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
