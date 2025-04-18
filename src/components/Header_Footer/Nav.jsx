import React from 'react'
import { AppBar, Toolbar , Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Role from '../../pages/Role'

const Nav = () => {

  let nav = useNavigate()

  let  NavigateToRole =(type)=>{
    if(type === 'login' )nav('/role_login')
    else if(type === 'register')nav('/role_register')
  }

  let gotoAbout =()=>{
    nav('/about')
  }

  let gotoContact = ()=>{
    nav('/contact')
  }

  let gotoHome = ()=>{
    nav('/')
  }

  return (
    <AppBar position='staitc'>
        <Toolbar>
            <Typography variant='h5' component='div' sx={{flexGrow:1}} onClick={gotoHome}>KRMV HMS</Typography>

            <Button color = "inherit" onClick={ () => NavigateToRole('login')}>Login</Button>
            <Button color = "inherit" onClick={ () => NavigateToRole('register')} >Register</Button>
            <Button color = "inherit" onClick={gotoAbout}>About</Button>
            <Button color = "inherit" onClick={gotoContact}>Contact</Button>
            
        </Toolbar>
    </AppBar>
  )
}

export default Nav