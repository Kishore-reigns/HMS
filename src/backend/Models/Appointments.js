const mongoose = require('mongoose')


const appointmentSchema = mongoose.Schema({
  
      patientEmail: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
      },
      doctorEmail: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
      },
      date:{
        type: Date,
        default: Date.now
      }
} , {timestamps : true})

module.exports = mongoose.model('Appointment',appointmentSchema)