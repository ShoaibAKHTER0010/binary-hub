import React, { useState } from "react";
import { Box } from "@mui/material";


const cards = [
  { id: 1, img: "/images/image1.png" },
  { id: 2, img: "/images/image2.png" }, // Middle card (default active)
  { id: 3, img: "/images/image3.png" },
];

const Cards = () => {
  const [activeCard, setActiveCard] = useState(2); // Start with middle card in front

  const handleClick = (id) => {
    if (activeCard !== id) {
      setActiveCard(id); // Only update if a different card is clicked
    }
  };

  return (
    
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        width: "100%",
        position: "relative",
        backgroundColor: "#f5f5f5",
      }}
    >
      {cards.map((card, index) => {
        const isActive = activeCard === card.id;

        return (
          <Box
            key={card.id}
            onClick={() => handleClick(card.id)}
            sx={{
              width: "320px",
              height: "220px",
              background: `url(${card.img}) no-repeat center/cover`,
              border: "12px solid #641B33",
              position: "absolute",
              transition: "all 0.6s ease-in-out",
              top: isActive ? "70%" : "50%",
              left: isActive ? "50%" : `${50 + (index - 1) * 25}%`,
              transform: `translate(-50%, -50%) scale(${isActive ? 1.5 : 1})`,
              zIndex: isActive ? 3 : 1,
              borderRadius: "10px",
              boxShadow: isActive
                ? "0px 10px 30px rgba(0,0,0,0.4)"
                : "0px 5px 15px rgba(0,0,0,0.2)",
              opacity: isActive ? 1 : 0.8,
              cursor: "pointer",
            }}
          />
        );
      })}
      
    </Box>
  );
};

export default Cards;
