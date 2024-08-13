import React from 'react';
import Navbar from './Navbar'; // Adjust the path if necessary
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const HireWorkerPage = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Hire a Worker
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Your Name"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email Address"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone Number"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="service"
                name="service"
                label="Service Required"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Link to='/Payment'>
                 <Button variant="contained" color="primary" type="submit">
                    Hire Worker
                 </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer/>
    </div>
  );
};

export default HireWorkerPage;