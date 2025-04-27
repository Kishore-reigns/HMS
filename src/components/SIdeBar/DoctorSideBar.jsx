import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Box, Typography } from '@mui/material';

const DoctorSideBar = ({selectIndex,setSelectedIndex}) => {
    

    const handleButtonClick = (index) => {
        console.log(index)
        setSelectedIndex(index);
    };

    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    marginTop: '64px', 
                    height: 'calc(100vh - 64px)', 
                    
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {['View Appointment', 'Write Report', 'Report'].map((text, index) => (
                        <ListItem 
                            button 
                            key={text}
                            selected={selectIndex === index}
                            onClick={() => handleButtonClick(index)}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: 'primary.light',
                                    '&:hover': {
                                        backgroundColor: '#2980b9',
                                    }
                                },
                                '&:hover':{
                                    backgroundColor: '#34495e', 
                                    color: '#ecf0f1',
                                    transition: 'all 0.3s ease',
                                },
                                borderRadius: '8px', 
                                marginBottom: '18px', 
                                borderBottom: '2px solid black',
                              
                            }}
                        >
                            <ListItemText primary={text} sx={{fontWeight : 'bold'}} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default DoctorSideBar;