const express=require('express')
const router=express.Router()

const {
    Register,
    login,
  } = require('../controllers/userCtrl')

router.route('/login').post(login)
router.route('/register').post(Register)




module.exports = router