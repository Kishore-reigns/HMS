import React,{useState} from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CommonLoginForm = ({type}) => {

  const[email,setEmail] = useState('')
  const[password , setPassword] = useState('')

  const navigate = useNavigate()



  const handleLogin = async()=>{
    const data = {email,password}
    let response ;
    

    try{
      if(type === 'patient'){
        response = await axios.post('http://localhost:5000/api/patient/login', data);
        localStorage.setItem('user',JSON.stringify({...response.data,role:'patient'}))
        navigate('/patient')
      }else if(type === 'doctor'){
        response = await axios.post('http://localhost:5000/api/doctor/login', data);
        localStorage.setItem('user',JSON.stringify({...response.data , role:'doctor'}))
        navigate('/doctor')
      }else if(type === 'admin'){
        response = await axios.post('http://localhost:5000/api/admin/login', data);
        localStorage.setItem('user',JSON.stringify({...response.data , role:'doctor'}))
        navigate('/admin')
      }
      console.log('login successul',response.data)
    }catch(error){
      console.error(error)
      alert("Please chaeck credentials")
    }
   
  }





  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField fullWidth label="Email" value={email} required onChange={ (e)=>{ setEmail(e.target.value)}} />
        </Grid>
        <Grid item>
          <TextField fullWidth label="Password" type="password" value={password} required onChange={(e)=>{ setPassword(e.target.value)}}/>
        </Grid>
        <Grid item>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommonLoginForm;
