const express = require('express')
const { registerDoctor , loginDoctor,getDoctors } = require('../Controller/DoctorController')
const router = express.Router()

router.post('/register',registerDoctor)
router.post('/login',loginDoctor)
router.get('/getDoctors',getDoctors)

module.exports = router 