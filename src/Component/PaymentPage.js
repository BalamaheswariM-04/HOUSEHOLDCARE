import React, { useState } from 'react';
import Navbar from './CustomerNavbar'; 
import Footer from './Footer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [upiId, setUpiId] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleUpiChange = (e) => {
    setUpiId(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'card') {
      // Handle card payment logic here
      console.log('Card payment details submitted');
    } else if (paymentMethod === 'upi') {
      // Handle UPI payment logic here
      console.log('UPI payment details:', { upiId });
    }
    alert('Payment submitted successfully');
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Payment
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Button
            variant={paymentMethod === 'card' ? 'contained' : 'outlined'}
            color="primary"
            sx={{ mr: 2 }}
            onClick={() => handlePaymentMethodChange('card')}
          >
            Pay with Card
          </Button>
          <Button
            variant={paymentMethod === 'upi' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handlePaymentMethodChange('upi')}
          >
            Pay with UPI
          </Button>
        </Box>
        <form onSubmit={handlePaymentSubmit}>
          <Grid container spacing={3}>
            {paymentMethod === 'card' ? (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="name"
                    name="name"
                    label="Name on Card"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cardNumber"
                    name="cardNumber"
                    label="Card Number"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="expiryDate"
                    name="expiryDate"
                    label="Expiry Date"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cvv"
                    name="cvv"
                    label="CVV"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="upiId"
                    name="upiId"
                    label="UPI ID"
                    fullWidth
                    variant="outlined"
                    value={upiId}
                    onChange={handleUpiChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => alert('Redirect to GPay')}
                  >
                    Pay with GPay
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => alert('Redirect to PhonePe')}
                  >
                    Pay with PhonePe
                  </Button>
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Make Payment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default PaymentPage;
