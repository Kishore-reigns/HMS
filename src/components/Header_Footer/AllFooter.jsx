import React from 'react'
import {Box,Typography,Container,Link} from '@mui/material'

const AllFooter = () => {
  return (
    <Box component="footer" sx = {{ position:'fixed', bottom:0,left:0,width:'100%', backgroundColor: 'primary.main',color : 'white',py: 3,px: 2, mt:'auto', borderTop: 'ipx solid #ccc' }}>
        <Container>
            <Typography variant='h6' color="inherit">
                @{new Date().getFullYear()} KR HMS |ALL rights reserved.
            </Typography>
            <Typography variant='h6' color="inherit">
                <Link href ='/contact' color="inherit" underline = "hover">
                    Contact US
                </Link>
            </Typography>
            <Typography variant='p' color="inherit">
                Crafted with ❤️ by Malarvannan.M - 2022503011
            </Typography>


        </Container>
    </Box>
  )
}

export default AllFooter