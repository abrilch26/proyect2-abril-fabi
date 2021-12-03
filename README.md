# Desarrollo de proyecto

## Uso de proyecto

- Es necesario instalar las dependencias, tan pronto se clone el proyecto.

```shell
$ npm install
```

- Una vez hecho esto, crear un archivo `.env` para generar las variables de entorno.

`.env`

```
PORT=3000
MONGODB='THE URL_DB'
SESSION='THE SECRET WORD'
```

## Instalación de librerías

- bcryptjs
- connect mongo
- dotenv
- express
- express session
- hbs
- mongoose
- nodemon

```shell
$ npm install o npm i
```

## Correr el proyecto

Para correr el proyecto basta con ejecutar:

```shell
$ npm run dev
```

## Al poblar la DB

Acceder a la carpeta `bin` y ejecutar:

```shell
$ node seeds.js
```
