//Importaciones
const mongoose = require("mongoose");

//Funcion de declaracion conectar DB
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Base de datos conectada");
};

//Exportacion
module.exports = connectDB;
