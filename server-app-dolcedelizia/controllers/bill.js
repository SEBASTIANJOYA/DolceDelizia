const { response } = require('express');
const billConnection = require('../database/user');

//Función para crear el detalle de una factura en la BD
const createBill = async (req, res = response) => {
  try {
    //Datos obtenidos a través de la acción POST, tomando los campos del frontend
    //IMPORTANTE: Tener en cuenta que estos campos se deben llamar igual a como estan definidos a continuación
    const {
      fecha
    } = req.body;

    //Consulta para guardar en la BD, en la tabla factura
    var sSQLCreate = 'INSERT INTO Factura (fecha) VALUES ( '
    sSQLCreate += "\'" + fecha + '\' );';

    const connection = billConnection();
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

//Buscar un solo registro de la tabla factura
const getBill = async (req, res = response) => {
  try {
    //Parámetro que se le envía a la petición para identificar que registro buscar
    const {
      idBill //Identificador de la factura (id)
    } = req.params;
    //Consulta a ejecutar
    var SQLSearch =  'SELECT * FROM Factura '
    SQLSearch += '  WHERE id = '+ id+';' ;

    const connection = billConnection();
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

//Obtener las facturas registradas
const getBills = async (req, res = response) => {
  try {
    const connection = billConnection();
    connection.query(
      'SELECT * FROM Factura',
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

//Actualizar factura
const updateBill= async (req, res = response) => {
  try {
    //Datos a actualizar
    const {
      id,
      fecha
    } = req.body;

    //Parámetro que se le envía a la petición para identificar que registro modificar
    const {
      idBill //Identificador de la factura (id)
    } = req.params;
    //Consulta a ejecutar
    var SQLUpdate =  'UPDATE Factura SET '
    SQLUpdate += 'id = ' + id + ', ' 
    SQLUpdate += 'fecha = \'' + fecha +'\' '   
    SQLUpdate += 'WHERE id = '+ idBill +';';

    const connection = billConnection();
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

//Borrar un registro de la tabla factura
const deleteBill = async (req, res = response) => {
  try {
    //Parámetro que se le envía a la petición para identificar que registro borrar
    const {
      idBill //Identificador de la factura (id)
    } = req.params;
    //Consulta a ejecutar
    var SQLDelete =  'DELETE FROM Factura '
    SQLDelete += '  WHERE id = '+ idBill + ';';

    const connection = billConnection();
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
  createBill,
  getBill,
  getBills,
  updateBill,
  deleteBill
};