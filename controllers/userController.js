const Dog = require("./../models/Dog");
exports.getProfile = (req, res) => {
  res.render("user/profile");
};

exports.postCreateDog = async (req, res) => {
  //obtener datos del formulario
  const name = req.body.name;
  const age = req.body.age;
  const size = req.body.size;
  const funFact = req.body.funFact;
  const image = req.body.image;
  const description = req.body.description;
  const informes = req.body.informes;
  const owner = req.session.currentUser._id;

  const newDogCreated = await Dog.create({
    name,
    age,
    size,
    funFact,
    image,
    description,
    informes,
    owner,
  });

  res.redirect("/dogs/allDogs");
};
