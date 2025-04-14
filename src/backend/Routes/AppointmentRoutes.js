const express = require('express')
const router = express.Router()
const  {postAppointment,getAppointment} = require('../Controller/AppointmentController')

router.post('/book',postAppointment)
router.post('/getAppointments',getAppointment)

module.exports = router