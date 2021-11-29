const User = require ("./../models/User")
const bcryptjs = require("bcryptjs")

exports.home = async (req, res) => {
    res.render("home")
}

//SIGNUP - REGISTER
exports.getSignup = async (req, res) => {
    res.render("signup")
}

exports.postSignup = async (req, res) => {

    const email    = req.body.email
    const username = req.body.username
    const password = req.body.password
    //const imageUrl = req.body.imageUrl

    
    if(!email || !username || !password) {
        res.render("signup", {
            errorMessage: "Uno o más campos se encuentran vacíos"
        })
        return
    }
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if(!regex.test(password)) {
        res.render("signup", {
            errorMessage: "Tu contraseña debde de contener 6 caracteres, mínimo un númeroy una mayúscula"
        })
        return
    }

    try {
        const salt = await bcryptjs.genSalt(10)
        const passwordEncriptado = await bcryptjs.hash(password, salt)

        const newUser = await User.create({
            email, 
            username,
            passwordEncriptado,
            imageUrl: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
        })
        console.log(newUser)

        res.redirect("/")
    } catch (error) {
        res.status(500).render("signup", {
            errorMessage: "Hubo un error con la validez de tu correo, intenta de nuevo"
        })
    }
}



exports.getLogin = async (req, res) => {
  res.render("login");
};
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  //Encontrar usuario
  try {
  } catch (error) {}
};
