const mongoose = require("mongoose")

//SCHEMA
const userSchema = mongoose.Schema ({
    email: {
        type: String,
        required: [true, "Tu email es requerido"],
        match: [/^\S+@\S+\.\S+$/, "Por favor, ingresa un email válido."],
        unique: true, 
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: [true, "Tu usuario es requerido"]
    },
    passwordEncriptado: {
        type: String,
        required: [true, "Tu contraseña es requerida"]
    },
    imageUrl: {
        type: String
    } 
})
//{timestamps: true}) //fecha en la que se creó


//MODELO
const User = mongoose.model("User", userSchema)

//EXPORTACIÓN
module.exports = User