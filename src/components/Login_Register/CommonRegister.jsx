import React, { useState } from 'react'
import { Typography, Container,Grid, FormControl, FormLabel, RadioGroup, FormControlLabel,TextField ,Radio, Button } from '@mui/material'
import { useAsyncError } from 'react-router-dom'

import validate from '../../js/registerValidate'

const CommonRegister = () => {

  
  const [firstName,SetFirstName] = useState('')
  const [lastName, SetLastName] = useState('')
  const [date,SetDate] = useState('')
  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')
  const [confirmPass,SetConPass] = useState('')
  const [gender,SetGender] = useState('')
  const [phone,setPhone] = useState('')

  const handleValidate =()=>{
    const data = {firstName,lastName,date,email,password,confirmPass,phone}
    const msg = validate(data)
    alert(msg)
  }

 

  return (
    <>
    <Container
    maxWidth="sm"
    sx={{
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Typography variant="h4" align="center" marginTop='200px'>
      Register
    </Typography>

    <Grid container direction="column" spacing={2}>
        <Grid item xs={6}>
         <TextField fullWidth label="first name"  required onChange={(e)=> SetFirstName(e.target.value)}/>
        </Grid>
        <Grid item xs={6}>
         <TextField fullWidth label="last name"  onChange={(e)=> SetLastName(e.target.value)}/>
        </Grid>
      <Grid item>
        <TextField label = "Date of Birth" type = "date" fullWidth  InputLabelProps={{ shrink: true }} onChange={(e)=> SetDate(e.target.value)}/>
      </Grid>
      <Grid item>
        <TextField label = "Phone" fullWidth  onChange={(e)=> setPhone(e.target.value)} required/>
      </Grid>
      <Grid item>
        <TextField fullWidth label="Email" required onChange ={ (e)=> SetEmail(e.target.value)}/>
      </Grid>
      <Grid item xs={6}>
        <TextField  fullWidth label="Password" type="password" xs={6} required onChange = { (e)=> SetPassword(e.target.value)} />
      </Grid>
      <Grid item xs={6}>
      <TextField fullWidth  label="ConPassword" type="password" xs={6} required onChange={ (e)=>SetConPass(e.target.value)}/>
      </Grid>
      <Grid item>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup row value={gender} onChange={(e)=>SetGender(e.target.value)}>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="other" control={<Radio/>} label="other"/>

        </RadioGroup>
      </FormControl>

    
      </Grid>
      <Button variant='contained' onClick={handleValidate}>Register</Button>

    </Grid>

    <div>
        More fields to be added .. Under Construction
    </div>

  </Container>
    </>
    
  )
}

export default CommonRegister