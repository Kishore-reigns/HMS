import React from 'react'

//import { Typography,Button, Container } from '@mui/material'
import Nav from '../components/Header_Footer/Nav'

//import AdminRegisterForm from '../components/Login_Register/AdminRegisterForm'
import PatientRegisterForm from '../components/Login_Register/PatientRegisterForm'


const Register = () => {
  return (
    <>
         <Nav/>
       
        <PatientRegisterForm/>
    </>
   
  )
}

export default Register