import React from 'react'
import { AppBar, Toolbar , Typography,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  
  return (
    <AppBar position='staitc'>
        <Toolbar>
            <Typography variant='h5' component='div' sx={{flexGrow:1}}>KR HMS</Typography>

            <Button color = "inherit">Login</Button>
            <Button color = "inherit">Register</Button>
            <Button color = "inherit">About</Button>
            
        </Toolbar>
    </AppBar>
  )
}

export default Nav