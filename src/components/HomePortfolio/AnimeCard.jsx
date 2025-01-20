import React, { useState } from "react";
import { Box,Button } from "@mui/material";
import CardImg from "../../Assets/images/image1.png";
import CardImg1 from "../../Assets/images/image2.png";
import CardImg2 from "../../Assets/images/image3.png";

const cards = [
  { id: 1, img: CardImg },
  { id: 2, img: CardImg1 },
  { id: 3, img: CardImg2 },
];

const AnimeCard = () => {
  const [activeCard, setActiveCard] = useState(2); 
  const handleClick = (id) => {
    if (activeCard !== id) {
      setActiveCard(id); 
    }
  };

  return (
   <Box>
   

     <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
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
              top: isActive ? "55%" : "35%",
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
    
   </Box>
  );
};

export default AnimeCard;
