const { Router } = require('express');

//Se importan los métodos que estan en la ruta indicada en el require, 
//para obtener las funciones que se exportaron en dicho archivo
const {
  getCategory,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory

} = require('../controllers/category');

const router = Router();

//Rutas para acceder a las funciones de la API
//Para las funciones que tienen como parámetros id_category 
router.get('/category/:Id_tipo', [], getCategory); 
router.get('/listaCategorias', [], getCategories);
router.post('/registroCategoria', [], createCategory);
router.put('/category/:id_category', [], updateCategory);
router.delete('/eliminarCategoria/:Id_tipo', [], deleteCategory);

module.exports = router;