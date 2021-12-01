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

//BORRAR PERRITOS
exports.postDeleteDog = async(req, res) => {
  const dogID = req.params.dogID
  const deletedDog = await Dog.findByIdAndDelete(dogID)
  res.redirect("/dogs/allDogs")
}
