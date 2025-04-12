const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  date: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  confirmPass: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  yoe: {
    type: String, 
    required: true
  },
  mln: {
    type: String, 
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  workingHours: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);
