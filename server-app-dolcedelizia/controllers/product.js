const { response } = require('express');
const productConnection = require('../database/user');

//Función para crear un nuevo producto en la BD
const createProduct = async (req, res = response) => {
  try {
    //Datos obtenidos a través de la acción POST, tomando los campos del frontend
    //IMPORTANTE: Tener en cuenta que estos campos se deben llamar igual a como estan definidos a continuación
    const {
      
      nombre,
      valor_unitario,
      descripcion,
      
    } = req.body;
    Id_tipo="2"


    //Consulta para guardar en la BD, en la tabla producto
    /*var sSQLCreate = 'INSERT INTO producto (id_producto,nombre,valor_unitario,descripcion, '
    sSQLCreate += ' Id_tipo) VALUES (';
    sSQLCreate +=  id_producto + ', ';
    sSQLCreate += '\'' + nombre +'\', ';
    sSQLCreate +=  valor_unitario + ', ';
    sSQLCreate += '\'' + descripcion + '\', ';
    sSQLCreate +=  Id_tipo + ');';*/

    const connection = productConnection();
    connection.query(
      'INSERT INTO Producto(nombre,valor_unitario,descripcion,Id_tipo) values (?,?,?,?)',
      [nombre,valor_unitario,descripcion,Id_tipo],
      function (err, results, fields) {
        
        if (err) {

          console.log(err);
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {

          console.log("hola mundo")
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


//Buscar un solo registro de la tabla de usuarios
const getProduct = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para identificar que registro buscar
    const {
      idProduct, //Identificador del producto (id_producto)
      idTypeProduct, //tipo de producto (Id_tipo) llave foránea
    } = req.params;
    //Consulta a ejecutar
    var SQLSearch =  'SELECT * FROM producto '
    SQLSearch += '  WHERE id_producto = '+ idProduct  + ' AND Id_tipo = '+idTypeProduct+';';

    const connection = productConnection();
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

//Buscar los usuarios existentes
const getProducts = async (req, res = response) => {
  try {
    const connection = productConnection();
    connection.query(
      'SELECT * FROM Producto;',
      function (err, results, fields) {
        
        if (err) {
          
          //Error al ejecutar la consulta 
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //
          
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

//Actualizar los usuarios existentes
const updateProduct = async (req, res = response) => {
  try {
    //Los datos a actualizar
    const {
      id_producto,
      nombre,
      valor_unitario,
      descripcion,
      Id_tipo,
    } = req.body;

    //Son lo parámetros que se le envían a la petición para identificar que registro modificar
    const {
      idProduct, //Identificador del producto (id_producto), en dado caso que la quiera modificar se guarda para poder realizar la actualización
      idTypeProduct, //tipo de producto (Id_tipo) llave foránea
    } = req.params;
    //Consulta a ejecutar
    var SQLUpdate =  'UPDATE producto SET '
    SQLUpdate += 'id_producto = ' + id_producto + ', ' 
    SQLUpdate += ' nombre = \'' + nombre + '\', ' 
    SQLUpdate += ' valor_unitario = ' + valor_unitario + ', ' 
    SQLUpdate += ' descripcion = \'' + descripcion + '\', ' 
    SQLUpdate += ' Id_tipo = ' + Id_tipo
    SQLUpdate += '  WHERE id_producto = '+ idProduct  + ' AND Id_tipo = '+idTypeProduct+';';

    const connection = productConnection();
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

//Borrar un registro de la tabla de usuarios
const deleteProduct = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para identificar que registro borrar
    const {
      idProduct, //Identifidor (id) del producto
      
    } = req.params;
    //Consulta a ejecutar
    var SQLDelete =  'DELETE FROM Producto '
    SQLDelete += '  WHERE id_producto = '+ idProduct +';';

    const connection = productConnection();
    connection.query(
      SQLDelete,
      function (err, results, fields) {
        
        if (err) {
          console.log(err)
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

//Método para consultar los tipos de usuarios
const typeProduct = async (req, res = response) => {
  try {
    //Consulta a ejecutar
    var SQLTipoProducto =  'SELECT * FROM tipoproducto; ';

    const connection = productConnection();
    connection.query(
      SQLTipoProducto,
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

//Se exportan las funciones definidas en la API (CRUD) y buscar tipo de producto
module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  typeProduct
};