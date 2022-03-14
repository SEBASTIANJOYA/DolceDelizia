const { response } = require('express');
const stockConnection = require('../database/user');

//Función para crear el inventario de un producto en la BD
const createProductStock = async (req, res = response) => {
  try {
    //Datos obtenidos a través de la acción POST, tomando los campos del frontend
    //IMPORTANTE: Tener en cuenta que estos campos se deben llamar igual a como estan definidos a continuación
    const {
      id_producto,
      Id_tipo,
      cantidad,
      porcentaje_descuento
    } = req.body;

    //Consulta para guardar en la BD, en la tabla inventario
    var sSQLCreate = 'INSERT INTO Inventario (id_producto,Id_tipo,cantidad,porcentaje_descuento) VALUES ( ?,?,?,?)'
    [id_producto,Id_tipo,cantidad,porcentaje_descuento]
  
    /*sSQLCreate +=  id_producto + ', ';
    sSQLCreate +=  Id_tipo +', ';
    sSQLCreate +=  cantidad + ', ';
    sSQLCreate +=  porcentaje_descuento + ');';
*/
    const connection = stockConnection();
    connection.query(
      sSQLCreate,
      function (err, results, fields) {

        if (err) {
          //Error con la base de datos
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
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


//Buscar un solo registro de la tabla de inventario
const getProductStock = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para identificar que registro buscar
    const {
      idProduct, //Identificador del producto (id_producto)
      idTypeProduct, //tipo de producto (Id_tipo) llave foránea
    } = req.params;
    //Consulta a ejecutar
    var SQLSearch =  'SELECT * FROM Inventario '
    SQLSearch += '  WHERE id_producto = '+ idProduct  + ' AND Id_tipo = '+idTypeProduct+';';

    const connection = stockConnection();
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

//Obtener todos los productos que estan en el inventario
const getProductsStock = async (req, res = response) => {
  try {
    const connection = stockConnection();
    connection.query(
      'SELECT * FROM Inventario;',
      function (err, results, fields) {
        if (err) {
          //Error al ejecutar la consulta 
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
          //
          return res.status(200).json({
            success: true,
            results
          });
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

//Actualizar el inventario de los productos
const updateProductStock = async (req, res = response) => {
  try {
    //Los datos a actualizar
    const {
      id_producto,
      Id_tipo,
      cantidad,
      porcentaje_descuento
    } = req.body;

    //Son lo parámetros que se le envían a la petición para identificar que registro modificar
    const {
      idProduct, //Identificador del producto (id_producto), en dado caso que la quiera modificar se guarda para poder realizar la actualización
      idTypeProduct, //tipo de producto (Id_tipo) llave foránea
    } = req.params;
    //Consulta a ejecutar
    var SQLUpdate =  'UPDATE Inventario SET '
    SQLUpdate += 'id_producto = ' + id_producto + ', ' 
    SQLUpdate += ' Id_tipo = ' + Id_tipo + ', ' 
    SQLUpdate += ' cantidad = ' + cantidad + ', ' 
    SQLUpdate += ' porcentaje_descuento = ' + porcentaje_descuento  
    SQLUpdate += '  WHERE id_producto = '+ idProduct  + ' AND Id_tipo = '+idTypeProduct+';';

    const connection = stockConnection();
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

//Borrar un registro de la tabla de inventario
const deleteProductStock = async (req, res = response) => {
  try {
    //Son lo parámetros que se le envían a la petición para identificar que registro borrar
    const {
      idProduct, //Identifidor (id_producto) del producto
      idTypeProduct, //tipo de producto (Id_tipo)
    } = req.params;
    //Consulta a ejecutar
    var SQLDelete =  'DELETE FROM Inventario '
    SQLDelete += '  WHERE id_producto = '+ idProduct + ' AND Id_tipo = '+idTypeProduct+';';

    const connection = stockConnection();
    connection.query(
      SQLDelete,
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

//Se exportan las funciones definidas en la API (CRUD) 
module.exports = {
  createProductStock,
  getProductStock,
  getProductsStock,
  updateProductStock,
  deleteProductStock
};