import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import {Box,Typography,Card,CardContent,Grid,Button} from '@mui/material'


const ViewPatients = () => {

    const [patients, setPatients] = useState([])
    const [gender ,setGender]= useState('')

    useEffect(()=>{
        axios.get('http://localhost:5000/api/patient/getPatients').then((res)=>{
            console.log('Fetched doctors',res.data)
            setPatients(res.data)

        }).catch((err)=>{
            console.error('fetching error in doctors',err)
        })

    },[])


  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Patients
      </Typography>

      <Grid container spacing={3}>
        {patients.map((pat, idx) => (
          <Grid item xs={12} key={idx} sx={{ width: '100%', margin: 0 }} >
            <Card sx={{ height: 250, width:"100%", display: 'flex', justifyContent: 'space-between', p: 2, borderRadius: 4, boxShadow: 3, 
                '&:hover':{
                    boxShadow:20,
                }
        }}>
              <CardContent sx={{width:'100%'}}>
                <Typography variant="h6" color="primary">
                  {pat.firstName} {pat.lastName}
                </Typography>
                <Typography variant="body2">DOB: {pat.dob}</Typography>
                <Typography variant="body2">Gender: {pat.gender}</Typography>
                <Typography variant="body2">Blood Group: {pat.bloodgrp}</Typography>
                <Typography variant="body2">Address: {pat.address} years</Typography>
                <Typography variant="body2">Email: {pat.email}</Typography>
                <Typography variant="body2">Phone: {pat.phone}</Typography>
                <Typography variant="body2">Health Inusuracne Number: {pat.hin}</Typography>
                <Typography variant="body2">Health Inusuracne Provider: {pat.hip}</Typography>
                <Typography variant="p" color ="warning">Account created at: {pat.createdAt}</Typography>

              </CardContent>
            
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ViewPatients 