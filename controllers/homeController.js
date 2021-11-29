exports.home = async (req, res) => {
  res.render("home");
};

exports.getLogin = async (req, res) => {
  res.render("login");
};
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  //Encontrar usuario
  try {
  } catch (error) {}
};
