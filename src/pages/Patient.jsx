import NonHomeNav from '../components/Header_Footer/NonHomeNav';
import React, { useEffect, useState } from 'react'
import PatientSideBar from '../components/SIdeBar/PatientSideBar';
import { Box } from '@mui/material'
import AllFooter from '../components/Header_Footer/AllFooter';
import BookAppointment from '../components/Patient/BookAppointment';
import ViewAppointment from '../components/Patient/ViewAppointment';
import MedicalHistory from '../components/Patient/MedicalHistory';
import {Typography} from '@mui/material'

const Patient = () => {

  const [user, setUser] = useState('')
  const [selectIndex,setSelectedIndex] = useState(0)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    setUser(storedUser)
  }, []);

  const renderContent = () =>{
    switch (selectIndex) {
      case 0:
        return <BookAppointment />;
      case 1:
        return <ViewAppointment />;
      case 2:
        return <MedicalHistory />;
      case 3:
        return <Typography variant="h6">Buy our product to unlock this feature</Typography>;
      default:
        return null;
    }
  }

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
          <PatientSideBar 
            selectIndex={selectIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </Box>
        
 
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: 'background.default',
            p: 3,
          }}
        >
          
          {renderContent()}
       
          
        
        </Box>
        
      </Box>
      <AllFooter/>

    </>
  )
}

export default Patient
