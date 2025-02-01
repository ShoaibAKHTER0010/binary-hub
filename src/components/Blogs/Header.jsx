import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 
import { Link } from 'react-router-dom'; // Add this for Link component
import logo from '../../Assets/images/logo.png'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const navItems = [
    {
      index: "Home",
      link: "/"
    },
    {
      index: "Portfolio",
      link: "/portfolio"
    },
    {
      index: "Services",
      link: "/services"
    },
    {
      index: "Blogs",
      link: "/blogs"
    },
    {
      index: "FAQs",
      link: "/faqs"
    }
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Binary Digital Services Logo" style={{ width: '150px' }} />
        </Box>

        {/* Navigation Links for Larger Screens */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // Hide on small screens
            alignItems: 'center',
          }}
        >
          {navItems.map((item, index) => (
            <Button
              key={index}
              sx={{
                color: '#fff',
                fontSize: '14px',
                margin: '0 10px',
                textTransform: 'none',
                '&:hover': {
                  borderBottom: '2px solid #ff1744',
                },
              }}
            >
              <Link to={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                {item.index}
              </Link>
            </Button>
          ))}
        </Box>

        {/* Toggle Button for Small Screens */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'flex', md: 'none' } }} // Show only on small screens
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#000',
            color: '#fff',
            width: '250px',
            padding: '20px',
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
          sx={{ position: 'absolute', top: 10, right: 10 }}
          onClick={toggleDrawer(false)}
        >
          <CloseIcon />
        </IconButton>

        <List>
          {navItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText
                  primary={
                    <Link to={item.link} style={{ color: '#fff', textDecoration: 'none' }}>
                      {item.index}
                    </Link>
                  }
                  sx={{
                    textAlign: 'center',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
