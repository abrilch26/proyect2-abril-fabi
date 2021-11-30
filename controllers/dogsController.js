const Dog = require("./../models/Dog");

//DETAILS DOG
exports.getSingleDog = async (req, res) => {
  const singleDogID = req.params.dogID;
  const getDog = await Dog.findById(singleDogID);
  res.render("dogs/singleDog", {
    getDog,
  });
};
