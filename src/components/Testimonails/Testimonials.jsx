import React from "react";

import { Grid, Box, Typography, Avatar } from "@mui/material";
import TestimonialSlider from "./TestimonialReview";

import avatar1 from "../../Assets/images/TestimonailIcon1.png";
import avatar2 from "../../Assets/images/TestimonailIcon2.png";
import avatar3 from "../../Assets/images/TestimonailIcon3.png";
import avatar4 from "../../Assets/images/TestimonailIcon4.png";
import avatar5 from "../../Assets/images/TestimonailIcon5.png";
import avatar6 from "../../Assets/images/TestimonailIcon6.png";
import avatar7 from "../../Assets/images/TestimonailIcon7.png";
import avatar8 from "../../Assets/images/TestimonailIcon8.png";

import bgImg from "../../Assets/images/TestimonialBg.png";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
];

function Testimonials() {
  return (
    <div>
      <Box
        sx={{
          background: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "90%", my: 8 }}>
          <Grid container spacing={0} alignItems="center">
            <Grid
              item
              md={12}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: { xs: "16px", sm: "18px", md: "18px" },
                  lineHeight: { xs: "20px", sm: "22px", md: "22px" },
                  marginBottom: 1,
                  color: "#9A2935",
                  textAlign: "center",
                }}
              >
                Testimonial
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: { xs: "20px", sm: "30px", md: "42px" },
                  lineHeight: { xs: "24px", sm: "34px", md: "48px" },
                  marginBottom: 4,
                  color: "#641B33",
                  textAlign: "center",
                  maxWidth: "500px",
                }}
              >
                Client’s Awesome Feedback About Our Services
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {avatars.map((src, index) => (
              <Grid
                item
                xs={3}
                sm={3}
                md={1.5}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={src}
                  alt={`Avatar ${index + 1}`}
                  sx={{
                    width: { xs: 70, sm: 100, md: 100, lg: 114 },
                    height: { xs: 70, sm: 100, md: 100, lg: 114 },
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={0} alignItems="center">
            <Grid
              item
              md={12}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TestimonialSlider />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Testimonials;
