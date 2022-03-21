const { Router } = require('express');

//Se importan los métodos que estan en la ruta indicada en el require, 
//para obtener las funciones que se exportaron en dicho archivo
const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  typeProduct

} = require('../controllers/product');

const router = Router();

//Rutas para acceder a las funciones de la API
//Para las funciones que tienen como parámetros idProduct e idTupeProduct, hace referencia a idProduct = id_producto
// e idTypeProduct = Id_tipo (tipo de de producto) llave foránea 
router.post('/consultarProducto', [], getProduct); 
router.get('/listaProductos', [], getProducts);
router.post('/registroProducto', [], createProduct);
router.put('/actualizarProducto', [], updateProduct);
router.delete('/eliminarProduct/:idProduct/', [], deleteProduct);
router.get('/typeProduct', [],typeProduct);


module.exports = router;