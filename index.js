//1. IMPORTACIONES
const express = require("express");
const app = express();
const hbs = require("hbs");
//importar DB
const connectDB = require("./db/db");

require("dotenv").config();

//2MIDDLEWARES
app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

//Invocamos DB
connectDB();

//3. RUTAS
app.use("/", require("./routes/home"));

//4. SERVER
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
