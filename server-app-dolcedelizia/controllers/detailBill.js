const { response } = require('express');
const detailBillConnection = require('../database/user');

//Función para crear el detalle de una factura en la BD
const createDetailBill = async (req, res = response) => {
  try {
    //Datos obtenidos a través de la acción POST, tomando los campos del frontend
    //IMPORTANTE: Tener en cuenta que estos campos se deben llamar igual a como estan definidos a continuación
    const {
      id_detFactura,
      id_producto,
      id_tipo,
      cant,
      valor_total
    } = req.body;

    //Consulta para guardar en la BD, en la tabla inventario
    var sSQLCreate = 'INSERT INTO detallefactura (id_detFactura,id_producto,id_tipo,cant,valor_total) VALUES ( '
    sSQLCreate +=  id_detFactura + ', ';
    sSQLCreate +=  id_producto +', ';
    sSQLCreate += "\'" + id_tipo + '\', ';
    sSQLCreate +=  cant + ', ';
    sSQLCreate +=  valor_total + ');';

    const connection = detailBillConnection();
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


//Buscar un solo registro de la tabla de detallefactura
const getDetailBill = async (req, res = response) => {
  try {
    //Parámetro que se le envía a la petición para identificar que registro buscar
    const {
      idDetailBill //Identificador del detalle de la factura (id_detFactura)
    } = req.params;
    //Consulta a ejecutar
    var SQLSearch =  'SELECT * FROM detallefactura '
    SQLSearch += '  WHERE id_detFactura = '+ idDetailBill+';' ;

    const connection = detailBillConnection();
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

//Obtener un detalle de factura
const getDetailsBill = async (req, res = response) => {
  try {
    const connection = detailBillConnection();
    connection.query(
      'SELECT * FROM detallefactura',
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

//Actualizar el detalle de la factura
const updateDetailBill= async (req, res = response) => {
  try {
    //Datos a actualizar
    const {
      id_detFactura,
      id_producto,
      id_tipo,
      cant,
      valor_total
    } = req.body;

    //Parámetro que se le envía a la petición para identificar que registro modificar
    const {
      idDetailBill //Identificador del detalle de la factura (id_detFactura)
    } = req.params;
    //Consulta a ejecutar
    var SQLUpdate =  'UPDATE detallefactura SET '
    SQLUpdate += 'id_detFactura = ' + id_detFactura + ', ' 
    SQLUpdate += 'id_producto = ' + id_producto + ', ' 
    SQLUpdate += 'id_tipo = ' + id_tipo + ', ' 
    SQLUpdate += 'cant = ' + cant + ','
    SQLUpdate += 'valor_total = ' + valor_total  
    SQLUpdate += 'WHERE id_detFactura = '+ idDetailBill +';';

    const connection = detailBillConnection();
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

//Borrar un registro de la tabla detallefactura
const deleteDetailBill = async (req, res = response) => {
  try {
    //Parámetro que se le envía a la petición para identificar que registro borrar
    const {
      idDetailBill //Identificador del detalle de la factura (id_detFactura)
    } = req.params;
    //Consulta a ejecutar
    var SQLDelete =  'DELETE FROM detallefactura '
    SQLDelete += '  WHERE id_detFactura = '+ idDetailBill + ';';

    const connection = detailBillConnection();
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
  createDetailBill,
  getDetailBill,
  getDetailsBill,
  updateDetailBill,
  deleteDetailBill
};