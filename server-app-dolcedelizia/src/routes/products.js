import express from "express";

const router = express.Router();

let products = [
    {
        id: 1,
        name: 'Pizza',
        description: 'Description one',

    },

    {
        id: 2,
        name: 'Nachos',
        description: 'Description two',

    },

    {
        id: 3,
        name: 'Batido',
        description: 'Description tree',

    }

];


router.get('/',(req,resp) => {
    resp.json(products);
});

router.post('/add',(req,resp) => {
    products = [
        ...products,
        req.body,
    ]
    resp.json(products);
});

//Actualizar
router.put('/update/:id', (req,resp)=>{
    const {params,body} = req;
    console.log(req.body);
    products = products.map(productItem => productItem.id === Number(params.id)&& body || productItem);
    resp.json(products);
});

router.delete('/remove/:id',(req,resp)=>{
    const {params: {id}} = req;
    products = products.filter(productItem => productItem.id !== Number(id));
    resp.json(products);
});
export default router;