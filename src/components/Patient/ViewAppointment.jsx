import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import { Card, CardContent, Typography, Button,Grid,Box}from '@mui/material'

const ViewAppointment = () => {

  useEffect(()=>{
    axios.get('http://localhost:5000/api/appointments/get')
  })

  return (
    <div>ViewAppointment</div>
  )
}

export default ViewAppointment