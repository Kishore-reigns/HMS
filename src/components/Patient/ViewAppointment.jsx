import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import { Card, CardContent, Typography, Button,Grid,Box}from '@mui/material'

const ViewAppointment = () => {

    const [appointments, setAppointments]  = useState([])

  useEffect(()=>{
    const patEmail = JSON.parse(localStorage.getItem('user'))?.patient?.email
    console.log(patEmail)
    axios.get('http://localhost:5000/api/appointments/').then((res)=>{
        console.log('fetched appointments',res.data)
        setAppointments(res.data)
    }).catch((err)=>{
        console.err('fetching error in doctors',err)
    })
  },[])

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        MY APPOINTMENTS
      </Typography>

      <Grid container spacing={3}>
        {appointments.map((e, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ Height: 400, width:300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2, borderRadius: 4, boxShadow: 3, 
                '&:hover':{
                    boxShadow:20,
                }
        }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  Dr. {doc.firstName} {doc.lastName}
                </Typography>
                <Typography variant="body2">Qualification: {doc.qualification}</Typography>
                <Typography variant="body2">Specialization: {doc.specialization}</Typography>
                <Typography variant="body2">Experience: {doc.yoe} years</Typography>
                <Typography variant="body2">Email: {doc.email}</Typography>
                <Typography variant="body2">Phone: {doc.phone}</Typography>
                <Typography variant="body2">MLN: {doc.mln}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ViewAppointment