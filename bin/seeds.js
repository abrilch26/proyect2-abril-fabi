//IMPORTACIONES
const mongoose = require("mongoose");
const Dog = require("./../models/Dog");

require("dotenv").config();

//CONEXION A BD
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//DATOS A POBLAR
const strayDogs = [
  {
    name: "Molly",
    age: "2 años, 3 meses",
    size: "Mediana",
    funFact: "Se muerde las patas cuando está feliz",
    image: "https://i.ibb.co/Y2bTdB4/molly.png",
    description:
      "Mix de labrador, vacunada y esterilizada. Es muuuuuy amorosa y tranquila. Convive con perros, gatos y niños",
    informes: "celular: (55)23152798",
  },
  {
    name: "Laika",
    age: "7 meses",
    size: "Pequeña",
    funFact: "Le gusta comer manzanas",
    image: "https://i.ibb.co/k5QVgQm/image.png",
    description:
      "Cruza de Samoyedo. Es amorosa y juguetona a la espera de adopción",
    informes: "teléfono: 41655581",
  },
  {
    name: "Mollete",
    age: "3 años",
    size: "Mediana",
    funFact: "Persigue su cola a las 5pm en punto, todos los días",
    image: "https://i.ibb.co/yq6xDfx/mollete.png",
    description:
      "Raza única, bajo contrato de esterilización. Es muy tierno y fiel, le encanta estar dentro de la casa y sabe ir al baño afuera",
    informes: "celular: 55 87430921",
  },
];

//DECLARAR FUNCIÓN
const createStrayDogs = async () => {
  const newStrayDogs = await Dog.create(strayDogs);
  console.log(newStrayDogs);
  mongoose.connection.close();
};

//INVOCACIÓN
createStrayDogs();
