const mongoose = require('mongoose')


const adminSchema = mongoose.Schema({
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
      date: {
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
      role:{
        type:String,
        required:true
      },
      petName:{
        type:String,
        required:true
      }
} , {timestamps : true})

module.exports = mongoose.model('Admin',adminSchema)