import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import { Card, CardContent, Typography, Button,Grid,Box}from '@mui/material'

const ViewAppointment = () => {

  const [appointments,setAppointments] = useState([])
  const [patientMap, setPatientMap] = useState({})

  useEffect(()=>{
    const docEmail = JSON.parse(localStorage.getItem('user'))?.doctor?.email
    console.log('Doctor email : ',docEmail)

    axios.get('http://localhost:5000/api/appointments/').then(async(res)=>{
      const filtered = res.data.filter(a=>a.doctorEmail === docEmail)
      console.log('Fetched appointments:', filtered)
      setAppointments(filtered)

      const uniquePatientEmails = [...new Set(res.data.map(a => a.patientEmail))]
      console.log('Unique patients',uniquePatientEmails)
      const patientInfoMap = {}


      await Promise.all(uniquePatientEmails.map(async (email) => {
        try {
          const patRes = await axios.get(`http://localhost:5000/api/patient/getPatient/${email}`)
          patientInfoMap[email] = patRes.data
        } catch (err) {
          console.error(`Error fetching doctor ${email}:`, err)
        }
      }))

      console.log('doctor info map ', patientInfoMap)
      setPatientMap(patientInfoMap)
    }).catch((err) => {
      console.error('Error fetching appointments:', err)
    })
  },[])

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        APPOINTMENTS
      </Typography>

      <Grid container spacing={3}>
      {appointments.map((e, idx) => {
  const pat = patientMap[e.patientEmail]
  return (
    <Grid item xs={12} sm={6} md={4} key={idx}>
      <Card sx={{ height: 200, width: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2, borderRadius: 4, boxShadow: 3,
        '&:hover': {
          boxShadow: 20,
        }
      }}>
        <CardContent>
          {pat ? (
            <>
              <Typography variant="h6" color="primary">
                {pat.firstName} {pat.lastName}
              </Typography>
              <Typography variant="body2">Blood Group: {pat.bloodgrp}</Typography>
              <Typography variant="body2">Email: {pat.email}</Typography>
              <Typography variant="body2">Phone: {pat.phone}</Typography>
              <Typography variant="body2">Heath Insurance Number: {pat.hin}</Typography>
            </>
          ) : (
            <Typography variant="body2">Loading patient info...</Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
})}      </Grid>
    </Box>
  )
}

export default ViewAppointment