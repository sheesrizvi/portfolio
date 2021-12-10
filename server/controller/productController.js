const asyncHandler = require('express-async-handler')
const products = require('../data/products')

const getProducts = asyncHandler(async (req, res) => {
  res.json(products)
})

const getProduct = asyncHandler(async (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

module.exports = { getProducts, getProduct }
