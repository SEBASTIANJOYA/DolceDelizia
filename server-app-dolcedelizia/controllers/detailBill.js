const { response } = require('express');
const detailBillConnection = require('../database/user');

//Función para crear el detalle de una factura en la BD
const createDetailBill = async (req, res = response) => {
  try {
    //Datos obtenidos a través de la acción POST, tomando los campos del frontend
    //IMPORTANTE: Tener en cuenta que estos campos se deben llamar igual a como estan definidos a continuación
    const {
      id_producto,
      id_tipo,
      cant,
      valor_total, 
      id_factura
    } = req.body;

    //Consulta para guardar en la BD, en la tabla inventario
    var sSQLCreate = 'INSERT INTO detallefactura (id_producto,id_tipo,cant,valor_total, id_factura) VALUES ( '
    sSQLCreate +=  id_producto +', ';
    sSQLCreate += "\'" + id_tipo + '\', ';
    sSQLCreate +=  cant + ', ';
    sSQLCreate +=  valor_total +', ';
    sSQLCreate +=  id_factura + ');';

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
      Id_tipo,
      cant,
      valor_total,
      id_factura
    } = req.body;

    //Parámetro que se le envía a la petición para identificar que registro modificar
    const {
      idDetailBill //Identificador del detalle de la factura (id_detFactura)
    } = req.params;
    //Consulta a ejecutar
    var SQLUpdate =  'UPDATE detallefactura SET '
    SQLUpdate += 'id_detFactura = ' + id_detFactura + ', ' 
    SQLUpdate += 'id_producto = ' + id_producto + ', ' 
    SQLUpdate += 'Id_tipo = ' + Id_tipo + ', ' 
    SQLUpdate += 'cant = ' + cant + ','
    SQLUpdate += 'valor_total = ' + valor_total   + ','
    SQLUpdate += 'id_factura = ' + id_factura  
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

//Función para realizar un pedido
const realizarPedido = async (req, res = response) => {
  try {
    //Parámetros que llegan desde el front, para el caso el arrgelo de productos del pedido
    const {
      fecha,
      products //Arreglo de productos del pedido
    } = req.body;

    let numberBill = "" //Variable para almacenar el numero de factura
  
    //Conexion para crear la factura
    const connectionFact = detailBillConnection();
    connectionFact.query(
      'INSERT INTO Factura (fecha) VALUES(?) ',
      [fecha],
      function (err, results, fields) {
        if (err) {
          //Error con la base de datos
          console.log("FALLO GUARDAR FACTURA")
          return res.status(500).json({
            success: false,
            result: err,
          });
        } else {
        
          //Id de la factura
          numberBill = results.insertId;

          //Recorre el arreglo de productos que llegan desde el front
          for (let i = 0; i < products.length; i++) {
            //Obtiene los parámetros de cada producto, donde al menos los productos deben llegar con 
            //id_producto, Id_tipo, cantidad, valor_total  
            const id_producto = products[i].id_producto;
            const tipo_producto = products[i].Id_tipo;
            const cantidad = products[i].cantidad;
            const valorTotal = products[i].valor_total;
            
            //Se crea la conexión para buscar el producto i al que se le va a descontar el stock
            const connectionFind = detailBillConnection();
            connectionFind.query(
              //Se envian los parametros de los productos que llegan del front
              'SELECT * FROM Producto WHERE id_producto = '+ id_producto+ ' AND Id_tipo = ' + tipo_producto+';' 
             ,
              function (err, results, fields) {
                if (err) {
                  //Error con la base de datos
                  console.log("FALLO BUSQUEDA DE PRODUCTOS")
                  return res.status(500).json({
                    success: false,
                    result: err,
                  });
                } else {      
                  //Se realiza la operación para descontar la cantidad de productos del stock del producto actual
                     let  newStock =  results[0].cantidad - cantidad
                    //  if(newStock >= 0){

                        //Se crea la conexión para poder actualizar el stock
                        const connectionUpdate = detailBillConnection();
                  
                        connectionUpdate.query(
                        'UPDATE Producto SET cantidad = '+ newStock+ ' WHERE id_producto = ' + id_producto+' AND Id_tipo = '+ tipo_producto+';' 
                        ,
                          function (err, results, fields) {
                            if (err) {
                              //Error con la base de datos
                              console.log("FALLO ACTUALIZAR STOCK")
                              return res.status(500).json({
                                success: false,
                                result: err,
                              });
                            } else {      
                            }
                          }
                        );
                        connectionUpdate.end();

                        //Se crea la conexión para guardar el detalle de la factura en la BD
                       const connectionSave = detailBillConnection();
                        connectionSave.query(
                          'INSERT INTO detallefactura (id_producto,Id_tipo,cant,valor_total, id_factura) VALUES (?,?,?,?,?)',
                          [id_producto,tipo_producto,cantidad,valorTotal, numberBill] 
                          ,
                          function (err, results, fields) {
                            if (err) {
                              //Error con la base de datos
                              console.log("FALLO GUARDAR DETALLE" + i)
                              return res.status(500).json({
                                success: false,
                                result: err,
                              });
                            } else {
                              return results 
                            }
                          }
                        ) 
                        connectionSave.end()
                  //    }
                }
              }
            );
            connectionFind.end();
          }     
        }
      }
    );
    connectionFact.end()

      return res.status(200).json({
        success:true,
        result: "Creación exitosa"
      })

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
  deleteDetailBill,
  realizarPedido
};