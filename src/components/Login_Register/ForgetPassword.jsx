import React,{useState} from 'react';
import axios from 'axios'
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import validate from '../../js/validatePassword'



const ForgetPassword = ({type}) => {

    
  const[email,setEmail] = useState('')
  const[petName,setPetName] = useState('')
  const[password , setPassword] = useState('')
  const[confpassword,setConfirmPassword] = useState('')

  const navigate = useNavigate()


  const handleUpdate = async()=>{
    const data = {email,petName,password,confpassword}
    let response = ''

    

    let msg = validate(data)

    if( msg !== "success"){
        console.log(msg)
        alert(msg);
        return;
    }

    try{
        if(type === 'patient'){
            response = await axios.post('http://localhost:5000/api/patient/forgotPassword', data);
            
          }else if(type === 'doctor'){
            response = await axios.post('http://localhost:5000/api/doctor/forgotPassword', data);
            
          }else if(type === 'admin'){
            response = await axios.post('http://localhost:5000/api/admin/forgotPassword', data);
            
          }


          if(response.data.success == true){
            alert("Password updated successfully!");
            if(type === 'patient'){
                navigate("/role/PatientLogin");
            }
            else if(type === 'doctor'){
                navigate("/role/DoctorLogin");
            }
            else if(type === 'admin'){
                navigate("/role/AdminLogin");
            }
            
          }else{
            alert(response.data.success + ' '+ response.data.message)
          }


          console.log('login successul',response.data)
    }catch(err){
        console.error(err)

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
      Foget Password ?
    </Typography>

    <Grid container direction="column" spacing={2}>
         <Grid item>
          <TextField fullWidth label="Email" value={email} required onChange={ (e)=>{ setEmail(e.target.value)}} />
        </Grid>
      <Grid item>
        <TextField fullWidth label="Enter Your Pet Name which you registered" value={petName} required onChange={ (e)=>{ setPetName(e.target.value)}} />
      </Grid>
      <Grid item>
        <TextField fullWidth label="New Password" type="password" value={password} required onChange={(e)=>{ setPassword(e.target.value)}}/>
      </Grid>
      <Grid item>
        <TextField fullWidth label="Confirm Password" type="password" value={confpassword} required onChange={(e)=>{ setConfirmPassword(e.target.value)}}/>
      </Grid>
      <Grid item>
        <Button fullWidth variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
      </Grid>
     
    </Grid>
  </Container>
  )
}

export default ForgetPassword