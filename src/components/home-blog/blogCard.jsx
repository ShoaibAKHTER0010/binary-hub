import React from "react";
import { Card, CardMedia, CardContent, Typography, Button} from "@mui/material";



const BlogCard = ({ title, description, image, subDesc }) => {
  return (
    <Card
    sx={{
      borderRadius: "30px",
      border: "2px solid #ACACAC",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      position: "relative",
      padding: "20px",
      width: "80%",
      marginTop: "29px",
    }}
  >
    <CardContent>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{
          objectFit: "cover",
          borderRadius: "8px",
          boxShadow: "4px rgba(0, 0, 0, 0.25)",
        }}
      />
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "15px",
          wordWrap: "break-word",
          paddingTop: "10px",
          whiteSpace: "normal",
          overflow: "hidden",
        }}
      >
        {subDesc}
      </Typography>
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
          wordWrap: "break-word",
          whiteSpace: "normal",
          overflow: "hidden",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>

      {/* Button Added Here */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#9A2935",
          color: "white",
          "&:hover": {
            backgroundColor: "#7a1f2a", // Darker shade for hover effect
          },
        }}
      >
       Read More
      </Button>
    </CardContent>
  </Card>
  );
};

export default BlogCard;
