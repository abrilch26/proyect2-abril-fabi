const Dog = require("./../models/Dog");
const User = require("./../models/User");

exports.getProfile = async (req, res) => {
  const adoptedDogs = await Dog.find({});
  const myDogs = [];

  for (let i = 0; i < adoptedDogs.length; i++) {
    if (adoptedDogs[i].owner === req.session.currentUser._id) {
      myDogs.push(adoptedDogs[i]);
    }
  }
  res.render("user/profile", {
    myDogs,
    isOwner: "Es dueño",
  });
};
