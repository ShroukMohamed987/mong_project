const express = require('express')
const router = express.Router()

const {
  getAllProductsStatic,
    createproduct,
    getproduct,deleteproduct, UserByProduct, updateProduct,createManyProduct
  } = require('../controllers/productsCtrl')

router.route('/').get(getAllProductsStatic)
router.route('/').post(createproduct)
router.route('/:id').put(updateProduct)
router.route('/:id').get(getproduct)
router.route('/:id').delete(deleteproduct)
router.route('/many').post(createManyProduct)


module.exports = router