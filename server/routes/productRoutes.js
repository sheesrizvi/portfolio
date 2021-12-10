const express = require('express')
const { getProducts, getProduct } = require('../controller/productController')
const router = express.Router()

router.get('/', getProducts)
router.get('/:id', getProduct)

module.exports = router
