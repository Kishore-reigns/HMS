import { Box,Button } from '@mui/material'
import React from 'react'

const SelectType = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Box sx = {{ display:'flex', gap : 2}}>
            <Button variant='contained' color = 'primary'>Patient</Button>
            <Button variant='contained' color ='primary'>Doctor</Button>
            <Button variant='contained' color ='primary'>Admin</Button>
        </Box>
    </Box>
  )
}

export default SelectType