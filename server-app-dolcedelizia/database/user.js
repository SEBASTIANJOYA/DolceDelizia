const mysql = require('mysql');

//Se crea la conexión con la BD 
module.exports = () => {
  return mysql.createConnection({
    host : '127.0.0.1',
    database : 'dolcedelizia',
    user : 'root',
    password : '',
  });
};