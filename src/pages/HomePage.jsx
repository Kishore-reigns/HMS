import React from 'react';
import Nav from '../components/Header_Footer/Nav';
import {

  Typography,

  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  CssBaseline
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeFooter from '../components/Header_Footer/HomeFooter';
import patientImg from '../images/patient.jpg';
import doctorimg from '../images/doctor.webp';
import adminimg from '../images/admin.webp'

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0D47A1" 
    },
    secondary: {
      main: "#1976D2" 
    },
    background: {
      default: "#f4f6f8"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 600
    },
    h6: {
      fontWeight: 500
    }
  }
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "#fff",
          py: 8,
          textAlign: "center"
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Welcome to KRMV HMS
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Streamlining Hospital Operations with Smart Healthcare Solutions.
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Register and view our demo.
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
           To use our full features, Buy our product for Rs.2500
          </Typography>
        
        </Container>
      </Box>

   
      <Container sx={{ mt: 8 }}>
  <Typography variant="h4" align="center" gutterBottom>
    Our Core Features
  </Typography>
  <Typography variant="body1" align="center" sx={{ mb: 5 }}>
    We offer an all-in-one hospital management system to empower patients, doctors, and admins.
  </Typography>

  <Grid container spacing={4} justifyContent="center" >
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%"  }}>
        <CardMedia
          component="img"
          height="180"
          image= {patientImg}
          alt="Appointment System"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Patient DashBoard
          </Typography>
          <Typography variant="body2">
            Patients can book appointments seamlessly online.
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="180"
          image={doctorimg}
          alt="Doctor Dashboard"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Doctor Dashboard
          </Typography>
          <Typography variant="body2">
            Doctors can track their appointments and guide patients.
          </Typography>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="180"
          image={adminimg}
          alt="Admin Panel"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Admin Panel
          </Typography>
          <Typography variant="body2">
            Admins can manage doctors and patient records with ease.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
</Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: "#E3F2FD", py: 8, mt: 10 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            What Our Customers Say
          </Typography>

          <Grid container spacing={4} sx={{ mt: 3 }}>

            <Grid item xs={12} md={6}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    "This platform made managing appointments so much easier for our hospital. Highly recommended!"
                  </Typography>
                  <Typography variant="subtitle2" align="right">
                    - Dr. Smith
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    "I could easily view my upcoming appointments. Simple and effective system."
                  </Typography>
                  <Typography variant="subtitle2" align="right">
                    - John Doe, Patient
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    "It's a well made webapp which made my day easier"
                  </Typography>
                  <Typography variant="subtitle2" align="right">
                    - Pearl, Senior Admin
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            
          </Grid>

          
        </Container>
      </Box>

      {/* FAQ Section */}
<Box sx={{ bgcolor: "#fff", py: 8, mt: 10 }}>
  <Container>
    <Typography variant="h4" align="center" gutterBottom>
      Frequently Asked Questions
    </Typography>

    <Grid container spacing={4} sx={{ mt: 3 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          How do I book an appointment?
        </Typography>
        <Typography variant="body2">
          Patients can log in to the system, select a doctor and book an appointment.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Is patient data secure?
        </Typography>
        <Typography variant="body2">
          Absolutely. We implement strong security measures to ensure all patient records are safe and confidential.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Who can access the admin panel?
        </Typography>
        <Typography variant="body2">
          Only authorized personnel with admin privileges can access and manage the admin panel.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</Box>


      <HomeFooter/>
    </ThemeProvider>
  );
};

export default HomePage;
