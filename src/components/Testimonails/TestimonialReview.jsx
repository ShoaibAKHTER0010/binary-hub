import React from "react";
import Slider from "react-slick";
import { Box, Typography, Rating, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    review:
      "Completely extend leveraged customer service rather than performance based imperatives. magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise",
    rating: 5,
    name: "John Doe",
    designation: "Marketing Manager",
  },
  {
    review:
      "Completely extend leveraged customer service rather than performance based imperatives. magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise",
    rating: 4.5,
    name: "Jane Smith",
    designation: "Software Engineer",
  },
  {
    review:
      "Completely extend leveraged customer service rather than performance based imperatives. magnetic relationships rather than leveraged e-markets. Rapidiously transform timely niches technology. Enthusiastically e-enable global e-markets for cooperative e-business. Authoritatively deliver highly efficient expertise",
    rating: 5,
    name: "Emily Johnson",
    designation: "Business Owner",
  },
];

const CustomArrow = ({ onClick, direction }) => (
  <IconButton
    onClick={onClick}
    sx={{
      backgroundColor: "#fff",
      color: "#000",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      [direction === "left" ? "left" : "right"]: "-30px",
      borderRadius: "50%",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        backgroundColor: "#9A2935",
        color: "#fff",
      },
    }}
  >
    {direction === "left" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
  </IconButton>
);

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    dots: false,
  };

  return (
    <Box
      sx={{
        width: "90%",
        textAlign: "center",
        py: 4,
        px: 2,
        position: "relative",
      }}
    >
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              mx: "auto",
              maxWidth: "884px",
              pt: 5,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                mb: 2,
                color: "#041424",
                fontSize: { xs: "14px", sm: "18px", md: "20px" },
                textAlign: "center",
                mx: "30px",
              }}
            >
              "{testimonial.review}"
            </Typography>

            <Box
              component="hr"
              sx={{
                border: "none",
                height: "2px",
                width: "28px",
                backgroundColor: "#0B59D7",
                margin: "0 auto 16px",
              }}
            />

            <Rating
              value={testimonial.rating}
              precision={0.5}
              readOnly
              sx={{ mb: 2 }}
            />

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: "#641B33",
                fontSize: "24px",
              }}
            >
              {testimonial.name}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#686868", fontSize: "16px" }}
            >
              {testimonial.designation}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialSlider;
