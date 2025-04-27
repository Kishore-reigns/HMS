const express = require('express')
const router = express.Router()
const {registerAdmin , loginAdmin,Forgot,deleteDoctor,deletePatient} = require('../Controller/AdminController')

router.post('/register',registerAdmin)
router.post('/login',loginAdmin)
router.post('/forgotPassword',Forgot)
router.delete('/deletePatient/:email',deletePatient)
router.delete('/deleteDoctor/:email',deleteDoctor)

module.exports = router