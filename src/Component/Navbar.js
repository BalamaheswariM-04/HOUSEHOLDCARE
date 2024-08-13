import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileEl, setProfileEl] = useState(null);

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#445' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="https://cdn.vectorstock.com/i/500p/01/64/property-logo-template-vector-11610164.avif" alt="Logo" style={{ height: '40px', marginRight: '5px' }} />
          {/* <Typography variant="h6" component="div" sx={{ color: 'white', textDecoration: 'none' }}>
            HOUSEHold Care
          </Typography> */}
        </Box>
        <Button color="inherit" component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
        <Box onMouseEnter={handleDropdownClick} onMouseLeave={handleDropdownClose}>
          <Button color="inherit" sx={{ color: 'white' }}>
            Services
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleDropdownClose}
            MenuListProps={{ onMouseLeave: handleDropdownClose }}
          >
            <MenuItem onClick={handleDropdownClose} component={Link} to="/PopularServices">Cleaning Service</MenuItem>
            <MenuItem onClick={handleDropdownClose} component={Link} to="/PopularServices">Cooking Service</MenuItem>
            <MenuItem onClick={handleDropdownClose} component={Link} to="/PopularServices">All Rounder</MenuItem>
          </Menu>
        </Box>
        <Button color="inherit" component={Link} to="/Selection" sx={{ color: 'white' }}>Pricing</Button>
        <Button color="inherit" component={Link} to="/Blog" sx={{ color: 'white' }}>Blog</Button>
        <Button color="inherit" component={Link} to="/Aboutus" sx={{ color: 'white' }}>Review</Button>
        <IconButton edge="end" color="inherit" onClick={handleProfileMenuOpen}>
          <AccountCircle sx={{ color: 'white' }} />
        </IconButton>
        <Menu
          anchorEl={profileEl}
          open={Boolean(profileEl)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuClose} component={Link} to="/Login">Login</MenuItem>
          <MenuItem onClick={handleProfileMenuClose} component={Link} to="/Registration">Signup</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;