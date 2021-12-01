const Dog = require("./../models/Dog");
exports.getProfile = (req, res) => {
  res.render("user/profile");
};
