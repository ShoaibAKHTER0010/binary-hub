import React from "react";
import { Box, Typography } from "@mui/material";

import Banner from "../../Assets/images/banner.png";

const MountainBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "200px", sm: "300px", md: "400px" }, // Responsive height
        backgroundImage: `url(${Banner})`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontSize: { xs: "18px", sm: "24px", md: "66px" }, // Responsive font size
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adds shadow for better readability
        }}
      >
        From the mountains we have arrived
      </Typography>
    </Box>
  );
};

export default MountainBanner;
