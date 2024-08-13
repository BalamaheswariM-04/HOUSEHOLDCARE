import React from 'react';
import Navbar from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        dynamicHeight={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
        emulateTouch
      >
        <div style={{ height: '100%', position: 'relative' }}>
          <img
            src="https://getbai.com/assets/images/service/cook-services-in-mumbai-GetBai.jpg"
            alt="Slide 1"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <p className="legend">Cooking Service</p>
        </div>
        <div style={{ height: '100%', position: 'relative' }}>
          <img
            src="https://app.allfixhome.com/subservice/1690640937.jpg"
            alt="Slide 2"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <p className="legend">Cleaning Service</p>
        </div>
        <div style={{ height: '100%', position: 'relative' }}>
          <img
            src="https://www.jimthehandyman.com/wp-content/uploads/2023/11/Why-You-Should-Hire-A-Handyman-1024x682.jpg"
            alt="Slide 3"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <p className="legend">Repair Service</p>
        </div>
      </Carousel>
      <Container sx={{ py: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ mt: 4 }} style={{ color: 'Black' }}>
          Welcome to HOUSEHoldCare
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://cdn-icons-png.flaticon.com/512/3581/3581109.png"
                alt="Cleaning Service"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Cleaning Service
                </Typography>
                <Button variant="contained" color="primary" component={Link} to='/PopularServices'>
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://cdn3.iconfinder.com/data/icons/beauty-wellness/64/chef_home_service_cook_kitchen_fruits_vegetables-512.png"
                alt="Cooking Service"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Cooking Service
                </Typography>
                <Button variant="contained" color="primary" component={Link} to='/PopularServices'>
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://cdn-icons-png.flaticon.com/512/452/452823.png"
                alt="Petcare Service"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  PetCare Service
                </Typography>
                <Button variant="contained" color="primary" component={Link} to='/PopularServices'>
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
