import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import { Card, CardContent, Typography, Button,Grid,Box}from '@mui/material'

const BookAppointment = () => {
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
        BOOK AN APPOINTMENT
      </Typography>

      <Grid container spacing={3}>
        {doctors.map((doc, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ Height: 400, width:300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2, borderRadius: 4, boxShadow: 10 }}>
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
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Book Appointment
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )

}

export default BookAppointment