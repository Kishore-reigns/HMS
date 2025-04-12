import React, { useState } from 'react'
import { Typography, Container,Grid, FormControl, FormLabel, RadioGroup, FormControlLabel,TextField ,Radio, Button } from '@mui/material'
import { useAsyncError, useNavigate } from 'react-router-dom'
import validate from '../../js/registerValidate'
import axios from 'axios'

const AdminRegisterForm = () => {

  
  const [firstName,SetFirstName] = useState('')
  const [lastName, SetLastName] = useState('')
  const [date,SetDate] = useState('')
  const [email,SetEmail] = useState('')
  const [password,SetPassword] = useState('')
  const [confirmPass,SetConPass] = useState('')
  const [gender,SetGender] = useState('')
  const [phone,setPhone] = useState('')
  const [role,SetRole] = useState('')

  let navigate = useNavigate()
  const handleValidate = async ()=>{
    const data = {firstName,lastName,date,email,password,confirmPass,gender,phone,role}
    const msg = validate(data)
    if(msg === 'success'){
        try{
            const response = await axios.post('http://localhost:5000/api/admin/register',data)
            alert("registration successful")
            navigate('/role/AdminLogin')
        }catch(err){
            console.error(error)
        }
       
    }else{
        alert(msg)
    }
  }

 

  return (
    <>
    <Container
    maxWidth="sm"
    sx={{
      height: '80vh',
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
         <TextField fullWidth label="first name" value={firstName}  required onChange={(e)=> SetFirstName(e.target.value)}/>
        </Grid>
        <Grid item xs={6}>
         <TextField fullWidth label="last name" value={lastName}  onChange={(e)=> SetLastName(e.target.value)}/>
        </Grid>
      <Grid item>
        <TextField label = "Date of Birth" type = "date" value={date} fullWidth  InputLabelProps={{ shrink: true }} onChange={(e)=> SetDate(e.target.value)}/>
      </Grid>
      <Grid item>
        <TextField label = "Phone" fullWidth value={phone} onChange={(e)=> setPhone(e.target.value)} required/>
      </Grid>
      <Grid item>
        <TextField fullWidth label="Email" required value={email} onChange ={ (e)=> SetEmail(e.target.value)}/>
      </Grid>
      <Grid item xs={6}>
        <TextField  fullWidth label="Password" type="password" value={password} xs={6} required onChange = { (e)=> SetPassword(e.target.value)} />
      </Grid>
      <Grid item xs={6}>
      <TextField fullWidth  label="ConPassword" type="password" xs={6} value={confirmPass} required onChange={ (e)=>SetConPass(e.target.value)}/>
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
      <Grid item xs={6}>
      <TextField fullWidth  value={role} label="Role" xs={6} required onChange={ (e)=>SetRole(e.target.value)}/>
      </Grid>
      <Button variant='contained' onClick={handleValidate}>Register</Button>

    </Grid>


  </Container>
    </>
    
  )
}

export default AdminRegisterForm