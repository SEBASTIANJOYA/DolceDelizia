
const jwt= require("jsonwebtoken");
var mysql = require('mysql');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

//database connection
const app = express();

//Se usa para poder acceder a la API desde un navegador
app.use(cors());

app.use(express.static('public'));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/user',require('./routes/user'));
app.use('/product',require('./routes/product'));
app.use('/order',require('./routes/order'));



//Se define el puerto por el que va a correr el servidor
app.set('port', 5000)
app.listen(app.get('port'), ()=>{
  console.log(`Server listen to port ${app.get('port')}`)
})


