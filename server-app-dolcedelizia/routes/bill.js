const { Router } = require('express');

//Se importan los métodos que estan en la ruta indicada en el require, 
//para obtener las funciones que se exportaron en dicho archivo
const {
  createBill,
  getBill,
  getBills,
  updateBill,
  deleteBill

} = require('../controllers/bill');

const router = Router();

//Rutas para acceder a las funciones de la API
//Para las funciones que tienen como parámetros idProduct e idTypeProduct, hace referencia a idProduct = id_producto 
// e idTypeProduct = Id_tipo (tipo de de producto) llave foránea 
router.get('/bill/:idBill', [], getBill); 
router.get('/bill', [], getBills);
router.post('/bill', [], createBill);
router.put('/bill/:idBill', [], updateBill);
router.delete('/bill/:idBill', [], deleteBill);

module.exports = router;