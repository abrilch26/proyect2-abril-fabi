//IMPORTACIONES
const mongoose = require("mongoose");

//SCHEMA
const dogSchema = mongoose.Schema({
  name: String,
  age: String,
  size: String,
  funFact: String,
  image: String,
  description: String,
  informes: String,
  owner: String,
});

//MODELO
const Dog = mongoose.model("Dog", dogSchema);

//EXPORTACION
module.exports = Dog;
