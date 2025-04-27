import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CssBaseline,
  Button,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Nav from '../components/Header_Footer/Nav';
import HomeFooter from '../components/Header_Footer/HomeFooter';

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

const pricingModules = [
  {
    title: "Tier 1",
    price: "₹799/year",
    features: [
      "This includes the features which are available in demo version",
      "Patient and Dotors can remove the appoinments",
      "New features will be included in batch updates",
      
    ]
  },
  {
    title: "Tier 2",
    price: "₹1999/year",
    features: [
        "Medication & health reminders",
        "Secure communication with doctors",
      "Manage appointments & schedules",
      "Access patient history instantly",
      "Prescription management system",
      "Analytics on patient care",
      "Hospital-wide user management",
      "Data analytics & reporting tools",
      "Resource allocation dashboard",
      "Access control & system settings"
    ]
  },
 
];

const BuyNow = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />

      <Box sx={{ bgcolor: "primary.main", color: "#fff", py: 8, textAlign: "center" }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Buy KRMV HMS Modules
          </Typography>
          <Typography variant="h6">
            Choose the module that suits your role and unlock premium features.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {pricingModules.map((module, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" color="primary" gutterBottom>
                    {module.title}
                  </Typography>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    {module.price}
                  </Typography>
                  <List dense>
                    {module.features.map((feature, i) => (
                      <ListItem key={i}>
                        <ListItemText primary={`• ${feature}`} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button fullWidth variant="contained" color="primary">
                    Buy Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <HomeFooter />
    </ThemeProvider>
  );
};

export default BuyNow;
