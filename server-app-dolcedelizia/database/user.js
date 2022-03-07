const mysql = require('mysql');

//Se crea la conexión con la BD 
module.exports = () => {
  var db= mysql.createConnection({
    host : 'localhost',
    database : 'dolceDelicia',
    user : 'root',
    password : 'root',
  });

  db.connect((err) => {
    if (err){
        
    } 
    else{
        console.log("Base de datos conectada")
    }
  });

  return db;
};