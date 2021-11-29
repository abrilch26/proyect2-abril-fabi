const User = require("./../models/User");
const bcryptjs = require("bcryptjs");

exports.home = async (req, res) => {
  res.render("home");
};

//SIGNUP - REGISTER
exports.getSignup = async (req, res) => {
  res.render("signup");
};

exports.postSignup = async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  if (!email || !username || !password) {
    res.render("signup", {
      errorMessage: "Uno o más campos se encuentran vacíos",
    });
    return;
  }
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res.render("signup", {
      errorMessage:
        "Tu contraseña debde de contener 6 caracteres, mínimo un númeroy una mayúscula",
    });
    return;
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const passwordEncriptado = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      email,
      username,
      passwordEncriptado,
      imageUrl:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png",
    });
    //GENERAR LA SESIÓN
    //PERSISTENCIA DE IDENTIDAD
    req.session.currentUser = {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      imageUrl: newUser.imageUrl,
    };

    res.redirect("/");
  } catch (error) {
    res.status(500).render("signup", {
      errorMessage:
        "Hubo un error con la validez de tu correo, intenta de nuevo",
    });
  }
};

exports.getLogin = async (req, res) => {
  res.render("login");
};
exports.postLogin = async (req, res) => {
  const { email, password, username } = req.body;

  //Encontrar usuario
  try {
    //Encontrat usuario
    const findUser = await User.findOne({ email });
    if (!findUser) {
      res.render("login", {
        msg: "User not Found",
      });
      return;
    }

    //Check password
    //Use bcryptjs.compareSync(contraseña del form vs findUser.password)-->Devuelve booleano
    const checkPassword = await bcryptjs.compareSync(
      password,
      findUser.passwordEncriptado
    );
    if (!checkPassword) {
      res.render("login", {
        msg: "Invalid password",
      });
      return;
    }
    //GENERAR LA SESIÓN
    //PERSISTENCIA DE IDENTIDAD
    req.session.currentUser = {
      _id: findUser._id,
      username: findUser.username,
      email: findUser.email,
      imageUrl: findUser.imageUrl,
    };
    res.redirect(`/`);
  } catch (error) {
    console.log(error);
  }
};
