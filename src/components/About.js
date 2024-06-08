import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/system';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import teamImage from '../assets/team.jpg'; 
import missionImage from '../assets/team.jpg'; 

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  opacity: 0.8,
}));

const About = () => {
  return (
    <Container sx={{ padding: 4, textAlign: 'center' }}>
      <Heading variant="h2" component="h1" 
      sx={{
        textTransform:"uppercase"
      }}>
        About Ecom
      </Heading>
      <Fade in={true} timeout={2000}>
        <Typography variant="h5" component="h2">
          {/* Welcome to Ecom, your number one source for all things. */}
        </Typography>
      </Fade>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={6}>
          <Zoom in={true} style={{ transitionDelay: '500ms' }}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardMedia
                sx={{ height: 140,
                  objectFit:"contain"
                 }}
                image={missionImage}
                title="Our Mission"
              />
              <CardContent sx={{ padding: 2 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Our Mission
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Our mission is to provide the best products that meet the needs of our customers while ensuring top-notch customer service.
                </Typography>
              </CardContent>
            </Card>
          </Zoom>
        </Grid>
        <Grid item xs={12} md={6}>
          <Zoom in={true} style={{ transitionDelay: '1000ms' }}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardMedia
                sx={{ height: 140 }}
                image={teamImage}
                title="Our Team"
              />
              <CardContent sx={{ padding: 2 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Our Team
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Meet our team of dedicated professionals who work tirelessly to bring you the best products and services.
                </Typography>
              </CardContent>
            </Card>
          </Zoom>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
