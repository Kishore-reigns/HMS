const express = require('express')
const router = express.Router()
const { registerPatient, loginPatient } = require('../Controller/PatientController')

router.post('/register',registerPatient)
router.post('/login',loginPatient)

module.exports = router