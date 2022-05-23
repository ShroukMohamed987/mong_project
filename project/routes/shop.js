const express = require('express')
const router = express.Router()

const {
    getAllshop,
    createٍshop,
    getAllshopWithAgg,getOneShop
  } = require('../controllers/shopCtrl')

router.route('/').get(getAllshop)
router.route('/agg').get(getAllshopWithAgg)
router.route('/:id').get(getOneShop)

router.route('/').post(createٍshop)




module.exports = router