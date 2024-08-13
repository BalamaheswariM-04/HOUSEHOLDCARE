import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path if necessary
import Footer from './Footer'; // Adjust the path if necessary
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
const WorkerProfilePage = () => {
  const { workerId } = useParams();

  // Replace with your actual data fetching logic
  const worker = {
    id: workerId,
    name: 'John Doe',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s',
    services: ['Cleaning', 'Cooking'],
    rating: 4.5,
    reviews: [
      { id: 1, reviewer: 'Alice', comment: 'Great service!' },
      { id: 2, reviewer: 'Bob', comment: 'Very professional.' },
    ],
    contact: 'john.doe@householdcare.com',
    availability: 'Monday to Friday, 9 AM to 5 PM',
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar alt={worker.name} src={worker.photo} sx={{ width: 100, height: 100, mr: 2 }} />
          <Typography variant="h4">{worker.name}</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Services Offered</Typography>
              <List>
                {worker.services.map((service, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={service} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Contact Information</Typography>
              <Typography>Email: {worker.contact}</Typography>
              <Typography>Availability: {worker.availability}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Reviews</Typography>
              {worker.reviews.map((review) => (
                <Box key={review.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1">{review.reviewer}</Typography>
                  <Typography variant="body2">{review.comment}</Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">Rating</Typography>
              <Rating value={worker.rating} readOnly />
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          
          <Button variant="contained" color="primary" component={Link} to="/Payment">Book Now</Button>
          
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default WorkerProfilePage;