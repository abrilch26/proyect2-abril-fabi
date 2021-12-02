const mongoose = require("mongoose")

//Schema
const adoptSchema = mongoose.Schema({
  firstName : String,
  lastName: String,
  email: String,
  country: String, //delegacion
  streetAdress: String,
  postalCode: String,
  interes: String,
  pets: String,
  paseos: String,
  space: String
})

//MODELO
const Adopt = mongoose.model("Adopt", adoptSchema)

//IMPORTACIONES
module.exports = Adopt