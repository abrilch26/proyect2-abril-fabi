exports.home = async (req, res) => {
    res.render("home")
}

//SIGNUP - REGISTER
exports.getSignup = async (req, res) => {
    res.render("signup")
}

exports.postSignup = async (req, res) => {
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    if(!email || !username || !password) {
        res.render("signup", {
            errorMessage: "Uno o más campos se encuentran vacíos"
        })
        return
    }
    const regrex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if(!RegExp.test(password)) {
        res.render("signup", {
            errorMessage: "Tu contraseña debde de contener 6 caracteres, mínimo un númeroy una mayúscula"
        })
        return
    }

    try {
        const salt = await bcryptjs.genSalt(10)
        const passwordEncriptado = await bcryptjs.hash(password, salt)

        const newUser = await username.create({
            email, 
            username,
            passwordEncriptado
        })

        res.redirect("/")
    } catch (error ) {
        res.status(500).render("signup", {
            errorMessage: "Hubo un error con la validez de tu correo, intenta de nuevo"
        })
    }

}