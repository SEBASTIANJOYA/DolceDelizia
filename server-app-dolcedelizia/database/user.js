const mysql = require('mysql');

//Se crea la conexión con la BD 
module.exports = () => {

  var db= mysql.createConnection({
    host : 'bteserlwmjxomvnjxrpl-mysql.services.clever-cloud.com',
    database : 'bteserlwmjxomvnjxrpl',
    user : 'uhmmtlmzsdbsbwjs',
    password : 'vP889yp9zEPCjVC2bJEo',
  });

  
  /**var db= mysql.createConnection({
    host : 'localhost',
    database : 'dolcedelizia',
    user : 'root',
    password : 'Sebas1997',
  });**/

  db.connect((err) => {
    if (err){
        
    } 
    else{
        console.log("Base de datos conectada")
    }
  });

  return db;
};