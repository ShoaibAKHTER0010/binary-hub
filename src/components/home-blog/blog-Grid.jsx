import React from "react";
import { Grid } from "@mui/material";
import BlogCard from "./blogCard";

// Importing local images
import web from "../../Assets/images/web.png";
import digital from "../../Assets/images/digital.png";
import ecom from "../../Assets/images/Ecom.png";
import ui from "../../Assets/images/ui.png";
import vid from "../../Assets/images/vid.png";
import graphic from "../../Assets/images/graphic.png";

const BlogGrid = () => {
  console.log('BlogGrid component rendered');

  const services = [
    {
      title: "Web-Development",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: web,
      subDesc : "Management"
    },
    {
      title: "Digital Marketing",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: digital,
      subDesc : "Management"
    },
    {
      title: "UI/UX Designing",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore et quasi architecto beatae.",
      image: ui,
      subDesc : "Management"
    }
   
  ];

  console.log('Services data:', services);

  return (
    <Grid container spacing={1} sx={{ padding: 3 }}>
      {services.map((service, index) => {
        console.log(`Rendering service ${index + 1}: ${service.title}`);
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard
              title={service.title}
              description={service.description}
              image={service.image}
              subDesc={service.subDesc}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogGrid;