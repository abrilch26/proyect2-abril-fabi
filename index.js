//1. IMPORTACIONES
const express = require("express");
const app = express();
const hbs = require("hbs");
//importar DB
const connectDB = require("./db/db");
const sessionManager = require("./config/session");

require("dotenv").config();

//2MIDDLEWARES
sessionManager(app);
app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

//Para poder usar req.body hay que decirle a express que agrege una configuracion extra
//Meter el middleware urlencoded
//obtener datos que se mandan en los formularios
app.use(express.urlencoded({ extended: true }));

//Invocamos DB
connectDB();

//3. RUTAS
app.use((req, res, next) => {
  res.locals.currentUser = req.session.currentUser;
  next();
});

app.use("/", require("./routes/home"));
app.use("/user", require("./routes/user"));

//4. SERVER
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
