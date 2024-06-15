const express = require('express');
const router = express.Router();
const { getProducts, createProducts, updateProducts, deleteProducts, getLatestProducts, addToCart ,getCart,updateCart} = require('../controller/productController');
const requireAuth = require('../middleware/requireAuth');

router.get('/latest', getLatestProducts);
router.get('/', getProducts);
router.use(requireAuth);
router.get("/getCart",getCart)
router.post('/cart', addToCart);
router.patch("/cart",updateCart)
router.post('/', createProducts);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);

module.exports = router;
