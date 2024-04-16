/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const CustomAppBar = () => {
  const handleMenuOpen = (event:  React.MouseEvent<HTMLButtonElement>) => {
    // Open the menu
  };

  return (
    <AppBar >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h1" style={{ flexGrow: 1 }}>
          <Link to="/" style={{textDecoration: "none"}}>
            Star Wars App
          </Link>
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
