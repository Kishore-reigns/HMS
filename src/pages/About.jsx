import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  CssBaseline
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

const contentSections = [
  {
    title: "Our Mission",
    content: "At KRMV HMS, our mission is to empower hospitals and clinics with cutting-edge digital tools that enhance patient care, streamline operations, and simplify healthcare management for everyone involved."
  },
  {
    title: "Who We Are",
    content: "We are a passionate team of developers, designers, and healthcare enthusiasts committed to transforming healthcare management. KRMV HMS was built to solve real-world problems hospitals face daily."
  },
  {
    title: "Our Vision",
    content: "To become a trusted digital partner for hospitals across the globe, leading the way in smart healthcare solutions that are secure, scalable, and centered around patients."
  }
];

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />

      <Box sx={{ bgcolor: "primary.main", color: "#fff", py: 8, textAlign: "center" }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            About KRMV HMS
          </Typography>
          <Typography variant="h6">
            Enhancing Hospital Efficiency through Digital Innovation
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        {contentSections.map((section, index) => (
          <Grid
            container
            spacing={4}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            sx={{ mb: 6 }}
            key={index}
          >
            <Grid item xs={12} md={5}>
              <Typography variant="h4" gutterBottom color="primary">
                {section.title}
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="body1" whiteSpace="pre-line">
                {section.content}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Container>

      <HomeFooter />
    </ThemeProvider>
  );
};

export default About;
