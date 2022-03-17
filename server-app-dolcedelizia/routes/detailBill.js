const { Router } = require('express');

//Se importan los métodos que estan en la ruta indicada en el require, 
//para obtener las funciones que se exportaron en dicho archivo
const {
  createDetailBill,
  getDetailBill,
  getDetailsBill,
  updateDetailBill,
  deleteDetailBill,
  realizarPedido

} = require('../controllers/detailBill');

const router = Router();

//Rutas para acceder a las funciones de la API
//Para las funciones que tienen como parámetros idProduct e idTypeProduct, hace referencia a idProduct = id_producto 
// e idTypeProduct = Id_tipo (tipo de de producto) llave foránea 
router.get('/detail/:idDetailBill', [], getDetailBill); 
router.get('/detail', [], getDetailsBill);
router.post('/detail', [], createDetailBill);
router.put('/detail/:idDetailBill', [], updateDetailBill);
router.delete('/detail/:idDetailBill', [], deleteDetailBill);
router.post('/detail/pedido', [], realizarPedido);

module.exports = router;