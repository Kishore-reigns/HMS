import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  CssBaseline,
  Paper
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Nav from '../components/Header_Footer/Nav';
import HomeFooter from '../components/Header_Footer/HomeFooter';
import { Send } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" },
    secondary: { main: "#1976D2" },
    background: { default: "#f4f6f8" }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: { fontWeight: 600 },
    h6: { fontWeight: 500 }
  }
});

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />

      {/* Banner */}
      <Box sx={{ bgcolor: "primary.main", color: "#fff", py: 8, textAlign: "center" }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h6">
            We'd love to hear from you. Let's get in touch!
          </Typography>
        </Container>
      </Box>

      {/* Form Section */}
      <Container sx={{ py: 6 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom color="primary">
                Get In Touch
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Feel free to reach out to us for support, questions, or just to say hello!
              </Typography>
              <Typography variant="body2">
                Address: 123 HealthTech Street, MedCity, India
              </Typography>
              <Typography variant="body2">
                Phone: +91 98765 43210
              </Typography>
              <Typography variant="body2">
                Email: support@krmvhms.com
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <form>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  required
                />
                <TextField
                  fullWidth
                  label="Write your feedback here"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<Send />}
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <HomeFooter />
    </ThemeProvider>
  );
};

export default Contact;
