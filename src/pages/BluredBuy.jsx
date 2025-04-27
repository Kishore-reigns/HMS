import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Typography} from '@mui/material'


const BluredBuy = () => {

    let nav = useNavigate()

    const handleclick = () =>{
        nav('/buyNow')
    }
  return (
    <div style={{
        width: '100%',
        height: '100%',
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px' // adds space between the text and button
        }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
            To unlock more cool features, buy our product now!
          </Typography>
          <button style={{
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#1976d2',
            color: 'white',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1565c0'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#1976d2'}
            onClick={handleclick}
          >
            Buy Now
          </button>
        </div>
      </div>
  );
};

export default BluredBuy;
