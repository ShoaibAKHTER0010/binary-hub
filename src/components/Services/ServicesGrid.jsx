import React from "react";
import { Grid } from "@mui/material";
import ServiceCard from "./ServiceCard";

// Importing local images
import web from "../../Assets/images/web.png";
import digital from "../../Assets/images/digital.png";
import ecom from "../../Assets/images/Ecom.png";
import ui from "../../Assets/images/ui.png";
import vid from "../../Assets/images/vid.png";
import graphic from "../../Assets/images/graphic.png";

const ServicesGrid = () => {
  const services = [
    {
      title: "Web-Development",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: web,
    },
    {
      title: "Digital Marketing",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: digital,
    },
    {
      title: "UI/UX Designing",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: ui,
    },
    {
      title: "E-Commerce",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: ecom,
    },
    {
      title: "Video Editing",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: vid,
    },
    {
      title: "Graphics Design",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: graphic,
    },
  ];

  return (
    <Grid container spacing={1} sx={{ padding: 3 }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ServiceCard
            title={service.title}
            description={service.description}
            image={service.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesGrid;
