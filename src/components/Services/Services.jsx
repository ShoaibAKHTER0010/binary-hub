import React from "react";
import { Box, Typography } from "@mui/material";

import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <Box
      sx={{
        padding: "60px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#9A2935",
          fontSize: "18px",
          fontWeight: "medium",
          marginTop: "20px",
        }}
      >
        Our Services
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#9A2935",
          fontSize: "70px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        What we can offer
      </Typography>
      <ServicesGrid />
    </Box>
  );
};

export default Services;
