
import NonHomeNav from '../components/Header_Footer/NonHomeNav'
import React, {useEffect , useState} from 'react'
import {Box} from '@mui/material'
import AllFooter from '../components/Header_Footer/AllFooter';
import AdminSideBar from '../components/SIdeBar/AdminSideBar';
import ViewDoctors from '../components/Admin/ViewDoctors';
import ViewPatients from '../components/Admin/ViewPatients';
import BluredBuy from './BluredBuy';
import DeleteDoctor from '../components/Doctor/DeleteDoctor';


const Admin = () => {

  const [user , setUser] = useState('')
  const [selectIndex,setSelectedIndex] = useState(0)

  useEffect(()=>{
    const storedUser = localStorage.getItem('user')
    setUser(storedUser)
  },[]);

  const renderContent = () =>{
    switch (selectIndex) {
      case 0:
        return <ViewDoctors/>;
      case 1:
        return <ViewPatients/>;
      case 2:
        return <BluredBuy />;
      case 3:
        return <DeleteDoctor/>;
      case 4:
        return <BluredBuy/>;
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
          <AdminSideBar 
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
          
      
          {renderContent() }
    
        
        </Box>
        
      </Box>
      <AllFooter/>
    </>
   
  )
}

export default Admin