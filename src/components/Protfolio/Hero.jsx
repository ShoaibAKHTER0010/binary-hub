import React from "react";
import Header from "./Header";
import { Grid, Box, Typography, Button } from "@mui/material";
import CardList from "./cardData";
import Footer from "../Footer/Footer";

import portbg from '../../Assets/images/portbg.png'



function Hero() {
  return (
    <div>
      <Header />
      <Box
        sx={{
            backgroundColor:"#000",
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
                    fontFamily: "Manrope",
                    fontWeight: 700,
                    fontSize: { xs: "15px", sm: "20px", md: "27px" },
                    lineHeight: { xs: "38px", sm: "54px", md: "62px" },
                    marginBottom: 3,
                    color: "#fff",
                    maxWidth: { xs: "400px", sm: "500px", md: "500px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  WELCOM TO OUR WORLD
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: { xs: "20px", sm: "35px", md: "49px" },
                    lineHeight: { xs: "38px", sm: "54px", md: "62px" },
                    marginBottom: 3,
                    color: "#fff",
                    maxWidth: { xs: "400px", sm: "500px", md: "500px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Hi, we are member’s of 
                  binary hub
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
                 Binary Hub is a tech company delivering Creative Answers and diverse services empowering businesses to thrive through expertise in Tech creativity and Customer-focused strategies for lasting success
                </Typography>

                
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
                src={portbg}
                alt="Digital Solutions"
                sx={{
                  width: { xs: "80%", md: "100%" },
                  height:"510px",
                  borderRadius: "16px", 
                  maxWidth: "600px",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CardList />
      <Footer />
    </div>
  );
}

export default Hero;    