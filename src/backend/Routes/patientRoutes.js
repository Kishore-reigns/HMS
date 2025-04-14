const express = require('express')
const router = express.Router()
const { registerPatient, loginPatient,getPatients,getPatientbyEmail } = require('../Controller/PatientController')

router.post('/register',registerPatient)
router.post('/login',loginPatient)
router.get('/getPatients',getPatients)
router.get('/getPatient/:email',getPatientbyEmail)

module.exports = router