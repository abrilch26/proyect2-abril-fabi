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
  res.render("dogs/singleDog", {
    getDog,
  });
};

