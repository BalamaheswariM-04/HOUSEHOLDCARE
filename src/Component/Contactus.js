import React from 'react';
import { Container, Box, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
const ContactUs = () => {
  return (
    <div>
    <Container maxWidth="lg" background="#445">
      <Box mt={5}>
        <Grid container spacing={5}>
          {/* Form Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Fill the form to contact us quicker!
            </Typography>
            <TextField
              fullWidth
              label="Full Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Phone Number"
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img
                    src="https://www.freeiconspng.com/thumbs/indian-flag-icon/indian-flag-icon-0.png"
                    alt="India"
                    style={{ width: '24px', marginRight: '8px' }}
                  />
                ),
              }}
            />
            <TextField
              fullWidth
              label="Email ID"
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: '16px', backgroundColor: '#1976d2' }}
              component={Link} to="/"
            >
              Continue
            </Button>
          </Grid>
          
          {/* Contact Information Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Hey we are here!
            </Typography>
            <Typography variant="h4" gutterBottom>
              Get in touch with us
            </Typography>
            <Card sx={{ marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="h6">Phone Number</Typography>
                <Typography>+91 8401-8401-42</Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="h6">Headquarters</Typography>
                <Typography>586/6, Govindpuri, New Delhi, 110020</Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="h6">E-mail ID</Typography>
                <Typography>support@householdcare.com</Typography>
              </CardContent>
            </Card>
            <Card sx={{ marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="h6">WhatsApp</Typography>
                <Typography>+91 8401-8401-42</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
    
    </div>
  );
};

export default ContactUs;
