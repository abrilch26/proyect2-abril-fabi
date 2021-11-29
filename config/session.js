//1. IMPORTACIONES
const session = require("express-session")
const MongoStore = require ("connect-mongo")

//2. GESTIÓN DE SESIÓN
const sessionManager = (app => {
    app.set("trust proxy", 1)
})