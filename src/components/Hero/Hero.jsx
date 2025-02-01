import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Grid
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; 
// import logo from '../../../Assets/images/logo.png'; 
import logo from '../../Assets/images/logo.png'

import bgImg from "../../Assets/images/Hero.png";
import Img from "../../Assets/images/Heroimg.png";
import { Link } from 'react-router-dom';

function Hero() {
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
      index: "Blogs",
      link: "/blogs"
    }
  ];

  return (
    <Box
      sx={{
        background: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
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
      <Box
        sx={{
          // background: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "90%", my: 10 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "start" },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: { xs: "40px", sm: "56px", md: "66px" },
                    lineHeight: { xs: "38px", sm: "54px", md: "62px" },
                    marginBottom: 3,
                    color: "#fff",
                    maxWidth: { xs: "400px", sm: "500px", md: "500px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Solutions for your Digital needs
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    marginBottom: 4,
                    color: "#fff",
                    maxWidth: "460px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Binary digital service- a venture of binary hub excels in
                  providing resources to shape your virtual world
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "none",
                    borderRadius: "10px",
                    paddingX: 4,
                    paddingY: 1.5,
                    fontSize: "16px",
                    fontWeight: 600,
                    background: "#9A2935",
                  }}
                >
                  Begin Journey
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                component="img"
                src={Img}
                alt="Digital Solutions"
                sx={{
                  width: { xs: "80%", md: "100%" },
                  borderRadius: "16px",
                  maxWidth: "600px",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
