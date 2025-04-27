import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import {Box,Typography,Card,CardContent,Grid,Button} from '@mui/material'

const ViewDoctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/doctor/getDoctors').then((res)=>{
            console.log('Fetched doctors',res.data)
            setDoctors(res.data)

        }).catch((err)=>{
            console.error('fetching error in doctors',err)
        })

    },[])


  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Doctors
      </Typography>

      <Grid container spacing={3}>
        {doctors.map((doc, idx) => (
          <Grid item xs={12} key={idx} sx={{ width: '100%', margin: 0 }} >
            <Card sx={{ height: 200, width:"100%", display: 'flex', justifyContent: 'space-between', p: 2, borderRadius: 4, boxShadow: 3, 
                '&:hover':{
                    boxShadow:20,
                }
        }}>
              <CardContent sx={{width:'100%'}}>
                <Typography variant="h6" color="primary">
                  Dr. {doc.firstName} {doc.lastName}
                </Typography>
                <Typography variant="body2">Qualification: {doc.qualification}</Typography>
                <Typography variant="body2">Specialization: {doc.specialization}</Typography>
                <Typography variant="body2">Experience: {doc.yoe} years</Typography>
                <Typography variant="body2">Email: {doc.email}</Typography>
                <Typography variant="body2">Phone: {doc.phone}</Typography>
                <Typography variant="body2">MLN: {doc.mln}</Typography>
                <Typography variant="p" color ="warning">Account created at: {doc.createdAt}</Typography>
              </CardContent>
            
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ViewDoctors