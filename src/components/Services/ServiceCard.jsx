import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Link1 from "../../Assets/images/Link.png";

const ServiceCard = ({ title, description, image }) => {
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
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "26px",
            wordWrap: "break-word",
            whiteSpace: "normal",
            overflow: "hidden",
            borderBottom: "1px solid #E1E4EB",
          }}
        >
          {title.split(" ")[0]} <br /> {title.split(" ")[1]}
         <Link to="/portfolio">
         <img
            alt="img"
            style={{
              width: "60px",
              height: "60px",
            }}
            src={Link1}
          />
         </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
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
    </Card>
  );
};

export default ServiceCard;
