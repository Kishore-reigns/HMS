import React, { useState } from 'react'
import { Typography, Container, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, TextField, Radio, Button, MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import validate from '../../js/registerValidate'
import axios from 'axios'

const PatientRegisterForm = () => {
  const [firstName, SetFirstName] = useState('')
  const [lastName, SetLastName] = useState('')
  const [dob, setDob] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const [confirmPass, SetConPass] = useState('')
  const [gender, SetGender] = useState('')
  const [phone, setPhone] = useState('')
  const [bloodgrp, SetBloodGroup] = useState('')
  const [address, SetAddress] = useState('')
  const [emergencyCon, SetEmergencyContact] = useState('')
  const [hin, SetHIN] = useState('')
  const [hip, SetHIP] = useState('')

  let navigate = useNavigate()

  const handleValidate = async () => {
    const data = { firstName, lastName, dob, email, password, confirmPass,gender, phone, bloodgrp, address, emergencyCon, hin, hip }
    console.log(dob)
    const msg = validate(data)
    if (msg === 'success') {
      try {
        const response = await axios.post('http://localhost:5000/api/patient/register', data)
        alert('Registration successful')
        navigate('/')
      } catch (error) {
        console.error('Registration error:', error)
        alert('Registration failed. Please try again later.')
      }
    } else {
      alert(msg)
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" align="center" marginTop="200px">
        Register
      </Typography>

      <Grid container direction="column" spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First name"
            required
            value={firstName}
            onChange={(e) => SetFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last name"
            value={lastName}
            onChange={(e) => SetLastName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Date of Birth"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Phone"
            fullWidth
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Email"
            required
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            xs={6}
            required
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            xs={6}
            required
            value={confirmPass}
            onChange={(e) => SetConPass(e.target.value)}
          />
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row value={gender} onChange={(e) => SetGender(e.target.value)}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Blood group"
            select
            required
            value={bloodgrp}
            onChange={(e) => SetBloodGroup(e.target.value)}
          >
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Address"
            required
            value={address}
            onChange={(e) => SetAddress(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Emergency Contact number"
            required
            value={emergencyCon}
            onChange={(e) => SetEmergencyContact(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Health Insurance Number"
            required
            value={hin}
            onChange={(e) => SetHIN(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Health Insurance Provider"
            required
            value={hip}
            onChange={(e) => SetHIP(e.target.value)}
          />
        </Grid>

        <Button variant="contained" onClick={handleValidate}>
          Register
        </Button>
      </Grid>
    </Container>
  )
}

export default PatientRegisterForm
