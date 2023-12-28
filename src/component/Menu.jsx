import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system'; // Import styled from @mui/system
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'white',
  textDecoration: 'none',
  marginRight: theme.spacing(2), // Adjust the margin as needed
}));

const Menu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            faizan
           
          </Typography>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/student">student</StyledLink>
          <StyledLink to="/contact-us">ContactUS</StyledLink>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;