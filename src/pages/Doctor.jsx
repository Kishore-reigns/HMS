
import NonHomeNav from '../components/Header_Footer/NonHomeNav'
import React, {useEffect , useState} from 'react'
import {Box} from '@mui/material'
import AllFooter from '../components/Header_Footer/AllFooter';
import DoctorSideBar from '../components/SIdeBar/DoctorSideBar';
import ViewAppointment from '../components/Doctor/ViewAppointment';

const Doctor = () => {

  const [user , setUser] = useState('')

  useEffect(()=>{
    const storedUser = localStorage.getItem('user')
    setUser(storedUser)
  },[]);

  return (
    <>
     
      <NonHomeNav />
      <Box sx={{ display: 'flex', pt :'64px'}}>
        
      <Box sx={{
          width: 240, 
          flexShrink: 0,
          marginTop: '64px', 
          height: 'calc(100vh - 64px)', 
          position: 'sticky',
          top: 0,
          overflow:'auto'
        }}>
          <DoctorSideBar/>
        </Box>
        <ViewAppointment/>
 
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
          }}
        >
          
        
    
        
        </Box>
        
      </Box>
      <AllFooter/>

    </>
  )
}

export default Doctor