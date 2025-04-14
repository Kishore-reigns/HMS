import React from 'react'
import axios from 'axios'
import { useEffect ,useState} from 'react'
import { Card, CardContent, Typography, Button,Grid,Box}from '@mui/material'

const ViewAppointment = () => {

    const [appointments, setAppointments]  = useState([])
    const [doctorMap, setDoctorMap] = useState({})

    useEffect(() => {
        const patEmail = JSON.parse(localStorage.getItem('user'))?.patient?.email
        console.log("Patient Email:", patEmail)
      
        axios.get('http://localhost:5000/api/appointments/')
          .then(async (res) => {
            const filtered = res.data.filter(a => a.patientEmail === patEmail);
            console.log('Fetched appointments:', filtered)
            setAppointments(filtered)
      
            // Fetch doctor info for each unique doctorEmail
            const uniqueDoctorEmails = [...new Set(res.data.map(a => a.doctorEmail))]
            console.log('Unique doctors',uniqueDoctorEmails)
            const doctorInfoMap = {}
      
            await Promise.all(uniqueDoctorEmails.map(async (email) => {
              try {
                const docRes = await axios.get(`http://localhost:5000/api/doctor/getDoctor/${email}`)
                doctorInfoMap[email] = docRes.data
              } catch (err) {
                console.error(`Error fetching doctor ${email}:`, err)
              }
            }))
            console.log('doctor info map ', doctorInfoMap)
            setDoctorMap(doctorInfoMap)
          })
          .catch((err) => {
            console.error('Error fetching appointments:', err)
          })
      }, [])

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        MY APPOINTMENTS
      </Typography>

      <Grid container spacing={3}>
      {appointments.map((e, idx) => {
  const doc = doctorMap[e.doctorEmail]
  return (
    <Grid item xs={12} sm={6} md={4} key={idx}>
      <Card sx={{ height: 200, width: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2, borderRadius: 4, boxShadow: 3,
        '&:hover': {
          boxShadow: 20,
        }
      }}>
        <CardContent>
          {doc ? (
            <>
              <Typography variant="h6" color="primary">
                Dr. {doc.firstName} {doc.lastName}
              </Typography>
              <Typography variant="body2">Qualification: {doc.qualification}</Typography>
              <Typography variant="body2">Specialization: {doc.specialization}</Typography>
              <Typography variant="body2">Experience: {doc.yoe} years</Typography>
              <Typography variant="body2">Email: {doc.email}</Typography>
              <Typography variant="body2">Phone: {doc.phone}</Typography>
              <Typography variant="body2">MLN: {doc.mln}</Typography>
            </>
          ) : (
            <Typography variant="body2">Loading doctor info...</Typography>
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