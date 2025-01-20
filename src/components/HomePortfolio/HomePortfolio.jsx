import React, { useState } from "react";
import { Box,Button } from "@mui/material";

import AnimeCard from "./AnimeCard";
import CardImg from "../../Assets/images/image1.png";
import CardImg1 from "../../Assets/images/image2.png";
import CardImg2 from "../../Assets/images/image3.png";

const cards = [
  { id: 1, img: CardImg },
  { id: 2, img: CardImg1 },
  { id: 3, img: CardImg2 },
];

const HomePortfolio = () => {
  const [activeCard, setActiveCard] = useState(2); 
  const handleClick = (id) => {
    if (activeCard !== id) {
      setActiveCard(id); 
    }
  };

  return (
   <Box>
    <Box>
        <Box sx={{
          display:"flex",
          justifyContent:"space-around",
          gap: "90px"
          // padding:"0px 220px"
        }}>
          <Box>
            <h2 style={{
              fontSize:"18px",
              color:"#9A2935",
            }}>Our Portfolio</h2>
            <h3 style={{
              fontSize:"60px",
              color:"#641B33",
              lineHeight:"48px"
            }}>Our Company <br /> Portfolio</h3>
          </Box>
          <Box>
            <Button sx={{
              background:"#9A2935",
              padding:"10px 20px",
              color:'#FFF',
              marginTop:"60px",
            }}>All Member<svg style={{
              marginLeft:"10px"
            }} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3906 0.629883C13.304 0.629883 15.0656 1.09655 16.6756 2.02988C18.2856 2.96322 19.5573 4.23488 20.4906 5.84488C21.424 7.45488 21.8906 9.21655 21.8906 11.1299C21.8906 13.0432 21.424 14.8049 20.4906 16.4149C19.5573 18.0249 18.2856 19.2965 16.6756 20.2299C15.0656 21.1632 13.304 21.6299 11.3906 21.6299C9.47729 21.6299 7.71562 21.1632 6.10563 20.2299C4.49563 19.2965 3.22396 18.0249 2.29062 16.4149C1.35729 14.8049 0.890625 13.0432 0.890625 11.1299C0.890625 9.21655 1.35729 7.45488 2.29062 5.84488C3.22396 4.23488 4.49563 2.96322 6.10563 2.02988C7.71562 1.09655 9.47729 0.629883 11.3906 0.629883ZM6.77063 10.4999C6.58396 10.4999 6.43229 10.5582 6.31563 10.6749C6.19896 10.7915 6.14062 10.9432 6.14062 11.1299C6.14062 11.3165 6.19896 11.4682 6.31563 11.5849C6.43229 11.7015 6.58396 11.7599 6.77063 11.7599H14.4006L11.6006 14.6299C11.4606 14.7232 11.3906 14.8632 11.3906 15.0499C11.3906 15.2365 11.449 15.3999 11.5656 15.5399C11.6823 15.6799 11.834 15.7499 12.0206 15.7499C12.2073 15.7499 12.3706 15.6799 12.5106 15.5399L16.4306 11.6199C16.5706 11.4799 16.6406 11.3165 16.6406 11.1299C16.6406 10.9432 16.5706 10.7799 16.4306 10.6399L12.5106 6.71988C12.324 6.53322 12.114 6.47488 11.8806 6.54488C11.6473 6.61488 11.4956 6.77822 11.4256 7.03488C11.3556 7.29155 11.414 7.48988 11.6006 7.62988L14.4006 10.4999H6.77063Z" fill="white"/>
            </svg>
            </Button>
          </Box>

        </Box>

    </Box>

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
    <AnimeCard/>
   </Box>
  );
};

export default HomePortfolio;
