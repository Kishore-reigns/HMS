import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

const CommonLoginForm = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>

      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField fullWidth label="Email" required />
        </Grid>
        <Grid item>
          <TextField fullWidth label="Password" type="password" required />
        </Grid>
        <Grid item>
          <Button fullWidth variant="contained" color="primary">Login</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommonLoginForm;
