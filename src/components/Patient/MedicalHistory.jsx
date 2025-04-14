import React, {useEffect,useState} from 'react'
import {Box , Typography} from '@mui/material'


const MedicalHistory = () => {

  const [history,setHistory] = useState()

  useEffect(()=>{
     setHistory(JSON.parse(localStorage.getItem('user'))?.patient?.medicalHistory)
     console.log('medial history : ',history)
  },[])


  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>HISTORY</Typography>
      </Box>
  )
}

export default MedicalHistory