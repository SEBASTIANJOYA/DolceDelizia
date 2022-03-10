const { response } = require('express');
var categoryConnection = require('../database/user');



//Función para crear una nueva categoria en la BD
const createCategory = async (req, res = response) => {
  try {
    //Datos obtenidos a través de la acción POST, tomando los campos del frontend
    //IMPORTANTE: Tener en cuenta que estos campos se deben llamar igual a como estan definidos a continuación
    const {
      
      Id_tipo,
      nombre
    } = req.body;

    //Consulta para guardar en la BD, en la tabla category

    const connection = categoryConnection();
    connection.query(
      "INSERT INTO Categoria (Id_tipo,nombre) VALUES(?,?)",
      [Id_tipo,nombre],
      function (err, results, fields) {

        if (err) {
          console.log(err);
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else{
          console.log("como");
          //Respuesta de la petición
          return res.status(200).json({
            success: true,
            result: results,
          });

        }
      }
    );
    //Se cierra la conexión con la BD
    connection.end();

  } catch (e) {
    console.log(e);
    //En caso de fallos se retorna el error 
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};


//Buscar un solo registro de la tabla decategorias
const getCategory = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para identificar que registro buscar
    const {
      Id_tipo //Identificación de la categoría
    } = req.params;
    //Consulta a ejecutar
    var SQLSearch =  'SELECT * FROM Categoria '
    SQLSearch += '  WHERE Id_tipo = '+ Id_tipo;
    console.log(SQLSearch)
    const connection = categoryConnection();
    connection.query(
      SQLSearch,
      function (err, results, fields) {
        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //Resultado de la consulta
          return res.status(200).json({
            success: true,
            results
          });
        }
      }
    );
    connection.end();

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Buscar las categorias existentes
const getCategories = async (req, res = response) => {
  try {
    const connection = categoryConnection();
    connection.query(
      'SELECT * FROM Categoria;',
      function (err, results, fields) {
        if (err) {
          //Error al ejecutar la consulta 
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //

          console.log("esta")
          res.send(results);
        }
      }
    );
    connection.end();

    //Errores 
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Actualizar las categorias existentes
const updateCategory = async (req, res = response) => {
  try {
    //Los datos a actualizar
    const {
      Id_tipo,
      nombre
    } = req.body;

    //Son lo parámetros que se le envían a la petición para identificar que registro modificar
    const {
      id_category, //Identificador de la categoria, en dado caso que la quiera modificar se guarda para poder realizar la actualización
    } = req.params;
    //Consulta a ejecutar
    var SQLUpdate =  'UPDATE Categoria SET ' 
    SQLUpdate += ' Id_tipo = ' + Id_tipo + ', '  
    SQLUpdate += ' nombre = \'' + nombre + "\' "
    SQLUpdate += '  WHERE Id_tipo = '+ id_category  + ';';

    const connection = categoryConnection();
    connection.query(
      SQLUpdate,
      function (err, results, fields) {
        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          console.log("como");
          //Resultado de la consulta
          return res.status(200).json({
            success: true,
            
            results
          });
        }
      }
    );
    connection.end();

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};

//Borrar un registro de la tabla de vategoria
const deleteCategory = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para identificar que registro borrar
    const {
      Id_tipo, //Identificación de la categori
    } = req.params;
    //Consulta a ejecutar
    //var SQLDelete =  'DELETE FROM categoria WHERE Id_Tipo = ? ;';
     
    const connection = categoryConnection();
    connection.query(
      "DELETE FROM Categoria WHERE Id_tipo= ? ;",[Id_tipo],
      function (err, results, fields) {
        if (err) {

          console.log(err)
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {

          console.log("hecho")
          //Resultado de la consulta
          return res.status(200).json({
            success: true,
            results
          });
        }
      }
    );
    connection.end();

  } catch (e) {
    return res.status(500).json({
      success: false,
      message: e.message
    });
  }
};


//Se exportan las funciones definidas en la API (CRUD) y funciones para login, buscar tipo de usuario
module.exports = {
 createCategory,
 getCategory,
 getCategories,
 updateCategory,
 deleteCategory
};