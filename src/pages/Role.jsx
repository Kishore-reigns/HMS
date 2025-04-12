import React, { useState, useEffect } from 'react'
import { Grid, Paper, Typography, ButtonBase } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Role = ({type}) => {
  const [roles, setRoles] = useState([])
  const navigate = useNavigate()

  const handleclick = (role) =>{
    if(type === 'register'){
        if(role === 'Patient') navigate('/role/PatientRegister')
        else if ( role === 'Doctor') navigate('/role/DoctorRegister')
        else if ( role === 'Admin')navigate('/role/AdminRegister')
    }
    else if(type === 'login'){
        if(role === 'Patient') navigate('/role/PatientLogin')
        else if ( role === 'Doctor') navigate('/role/DoctorLogin')
        else if ( role === 'Admin')navigate('/role/AdminLogin')
    } 
   
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/roles')
      .then((res) => {
        console.log('Fetched Roles:', res.data)

        if (res.data && Array.isArray(res.data[0]?.roles)) {
          setRoles(res.data[0].roles)
        } else {
          console.error('Unexpected format:', res.data)
        }
      })
      .catch((err) => {
        console.error('Error in fetching roles', err)
      })
  }, [])

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ padding: '2rem' }}>
      {roles.map((e, idx) => (
        <Grid item key={idx}>
          <ButtonBase
          onClick={ ()=> handleclick(e.title)}
            sx={{ borderRadius: '16px',overflow: 'hidden', textAlign: 'left',width: '100%',height: 300, 
display: 'block', border: '2px solid #1976d2',
            }}
          >
            <Paper elevation={6}
              sx={{ width: '100%', height: '100%', padding: 3,
                borderRadius: '16px',
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  transform: 'scale(1.03)',
                },
              }}
            >
              <Typography variant="h3" gutterBottom>{e.title}</Typography>
              <Typography variant="body1">{e.description}</Typography>
            </Paper>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  )
}

export default Role
