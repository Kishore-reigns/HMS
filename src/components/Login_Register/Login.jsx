import React from 'react'

import { Typography,Button, Container } from '@mui/material'
import Nav from '../Header_Footer/Nav'
import SelectType from './SelectType'
import CommonLoginForm from './CommonLoginForm'

const Login = () => {
  return (
    <>
         <Nav/>
       
        <CommonLoginForm/>
    </>
   

  )
}

export default Login