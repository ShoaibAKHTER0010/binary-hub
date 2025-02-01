import React from "react";
import { Box, Typography } from "@mui/material";

import BlogGrid from "../home-blog/blog-Grid";

const HomeBlog = () => {
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
        Blogs
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#9A2935",
          fontSize: "50px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Our Latest Blogs
      </Typography>
      <BlogGrid />
    </Box>
  );
};

export default HomeBlog;
