const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  dob: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPass: {
    type: String,
    required: true
  },
  gender:{
    type: String,
    required:true
  },
  phone: {
    type: String,
    required: true
  },
  bloodgrp: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  emergencyCon: {
    type: String,
    required: true
  },
  hin: {
    type: String, 
    required: true
  },
  hip: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient
