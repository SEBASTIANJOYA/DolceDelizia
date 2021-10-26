import express from 'express';
import Products from './products.js';

const router = express.Router();

router.get('/',(req,resp) => {
    resp.send("Conectado a la APP");
});

router.use('/products',Products);
export default router;