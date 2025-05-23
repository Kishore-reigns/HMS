import React from 'react'
import { AppBar, Toolbar , Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
//import Role from '../../pages/Role'

const NonHomeNav = () => {

    let nav = useNavigate()

    let handleLogout =()=>{
        console.log("logout triggered")
        localStorage.removeItem('user')
        console.log("removed")
        nav('/')
        console.log(localStorage.getItem('user'))
    }

    let gotoAbout =()=>{
        nav('/about')
    }

    let gotoContact = ()=>{
        nav('/contact')
    }

  return (
    <AppBar position='fixed'>
        <Toolbar>
            <Typography variant='h5' component='div' sx={{flexGrow:1}}>KR HMS</Typography>
            
            <Button color = "inherit" onClick={handleLogout}>Logout</Button>
            <Button color = "inherit" onClick={gotoAbout}>About</Button>
            <Button color = "inherit" onClick={gotoContact}>Contact</Button>
            
        </Toolbar>
    </AppBar>
  )
}

export default NonHomeNav