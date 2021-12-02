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
    sexo: "Hembra",
    funFact: "Se muerde las patas cuando está feliz",
    image: "https://i.ibb.co/XF1dQDc/molly1.png",
    description: "Mix de labrador, vacunada y esterilizada. Es muuuuuy amorosa y tranquila. Convive con perros, gatos y niños",
    informes: "celular: (55)23152798",
    owner: "61a6a8824776bc026bade3ab",
  },
  {
    name: "Laika",
    age: "7 meses",
    size: "Pequeña",
    sexo: "Hembra",
    funFact: "Le gusta comer manzanas",
    image: "https://i.ibb.co/k5QVgQm/image.png",
    description: "Cruza de Samoyedo. Es amorosa y juguetona a la espera de adopción",
    informes: "teléfono: 41655581",
    owner: "61a6a8824776bc026bade3ab",
  },
  {
    name: "Mollete",
    age: "3 años",
    size: "Mediana",
    sexo: "Macho",
    funFact: "Persigue su cola a las 5pm en punto, todos los días",
    image: "https://i.ibb.co/yq6xDfx/mollete.png",
    description: "Raza única, bajo contrato de esterilización. Es muy tierno y fiel, le encanta estar dentro de la casa y sabe ir al baño afuera",
    informes: "celular: 55 87430921",
    owner: "61a6a8824776bc026bade3ab",
  },
  {
    name: "Magnus",
    age: "2 años",
    size: "Grande",
    sexo: "Macho",
    funFact: "Mastica los troncos que se encuentra en el camino cuando sale a pasear",
    image: "https://i.ibb.co/vB9T27n/Captura-de-Pantalla-2021-12-01-a-la-s-10-54-07.png",
    description: "Setter irlandés con alto grado de energía, necesita amplios espacios y un dueño que haga ejercicio y sea activo.",
    informes: "celular: 55 67873628",
    owner: "61a6a8824776bc026bade3ab",
  },
  {
    name: "Toño",
    age: "5 años",
    size: "Mediana",
    sexo: "Macho",
    funFact: "Tiene personalidad de gato, es muy independiente",
    image: "https://adoptist.com/wp-content/uploads/2021/08/DSC1406-859x1024.jpg",
    description: "Cruza de Schnauzer gigante. Es amigable pero le gusta estar solo y no pide mucha atención. No se lleva con machos porque fue atacado, pero con hembras convive muy bien",
    informes: "teléfono: 55 22621045",
    owner: "61a6a8824776bc026bade3ab",
  },
  {
    name: "Pelusa",
    age: "1 año y medio",
    size: "Grande",
    sexo: "Hembra",
    funFact: "Le encanta el agua y tratar de morder los chorros de las mangueras",
    image: "https://adoptist.com/wp-content/uploads/2020/06/4EF23068-073F-45A2-90E7-0A574B93352E-768x1024.jpeg",
    description: "Perrita súper tranquila, se lleva bien con humanos, perros y gatos. Se encuentra esterlizada y es muy tranquila a pesar de su gran tamaño",
    informes: "correo electrónico: achavezr@hotmail.com",
    owner: "61a6a8824776bc026bade3ab",
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
