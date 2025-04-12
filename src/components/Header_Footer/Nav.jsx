import React from 'react'
import { AppBar, Toolbar , Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Role from '../../pages/Role'

const Nav = () => {

  let nav = useNavigate()

  let  NavigateToRole =()=>{
    nav('/role')
  }

  return (
    <AppBar position='staitc'>
        <Toolbar>
            <Typography variant='h5' component='div' sx={{flexGrow:1}}>KR HMS</Typography>

            <Button color = "inherit" onClick={NavigateToRole}>Login</Button>
            <Button color = "inherit" onClick={NavigateToRole} >Register</Button>
            <Button color = "inherit">About</Button>
            
        </Toolbar>
    </AppBar>
  )
}

export default Nav