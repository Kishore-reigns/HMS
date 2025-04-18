const express = require('express')
const { registerDoctor , loginDoctor,getDoctors,getDoctorbyEmail,Forgot } = require('../Controller/DoctorController')
const router = express.Router()

router.post('/register',registerDoctor)
router.post('/login',loginDoctor)
router.get('/getDoctors',getDoctors)
router.get('/getDoctor/:email',getDoctorbyEmail)
router.post('/forgotPassword',Forgot)

module.exports = router 