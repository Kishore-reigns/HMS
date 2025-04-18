const express = require('express')
const router = express.Router()
const {registerAdmin , loginAdmin,Forgot} = require('../Controller/AdminController')

router.post('/register',registerAdmin)
router.post('/login',loginAdmin)
router.post('/forgotPassword',Forgot)

module.exports = router