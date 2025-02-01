import React from 'react'

import mobile from '../../Assets/images/17.png';
import mobile2 from '../../Assets/images/18.png';
import mobile3 from '../../Assets/images/19.png';
import mobile4 from '../../Assets/images/20.png';
import mobile5 from '../../Assets/images/21.png';
import mobile6 from '../../Assets/images/22.png';
import mobile7 from '../../Assets/images/23.png';
import mobile8 from '../../Assets/images/24.png';
import CardItem from './CardItem';
import './styles.css';
import { Button,Box } from '@mui/material';

const cardData = [
  {
    image: mobile,
    title: 'Amazon PPC ',
    description: 'Maximize Clicks, Rank Higher – Smarter Ads & SEO for Bigger Wins!',
  },
  {
    image: mobile2,
    title: 'Report and Monitoring',
    description: 'Track, Analyze, Optimize – Real-Time Reports for Smarter Decisions!',
  },
  {
    image: mobile3,
    title: 'Platform Management',
    description: 'Seamless Control, Effortless Growth – Master Your Platform!',
  },
  {
    image: mobile4,
    title: 'Copywriting',
    description: 'Words That Sell – Persuasive, Powerful, and Precise!',
  },
  {
    image: mobile5,
    title: 'Main Image CTR Hack',
    description: 'Boost Clicks Instantly – The Main Image CTR Hack That Works!',
  },
  {
    image: mobile6,
    title: 'Amazon SEO',
    description: 'Scroll-Stopping Content – Engage, Inspire, Convert!',
  },

  {
    image: mobile7,
    title: 'E-commerce Marketing',
    description: 'Sell Smarter, Not Harder – E-commerce Marketing That Converts!',
  },
  {
    image: mobile8,
    title: 'Social Media Marketing',
    description: 'Boost engagement and grow your brand with our expert strategies.!',
  },
];

const MarkCards = () => {
  return (
  <>
  <div style={{ margin: '20px auto', paddingTop: '50px' }}>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: '700',
            textAlign: 'center',
            fontFamily: 'Manrope',
          }}
        >
          Digital marketing
        </h1>
      </div>
   {/* Card display */}
   <div className="card-container">
   {cardData.map((card, index) => (
     <CardItem
       key={index}
       image={card.image}
       title={card.title}
       description={card.description}
     />
   ))}
 </div>
<Box sx={{
 padding: "40px 0px",
   width:'full',
   display:'flex',
   justifyContent:'center',

}}>
 <Button
         
         
         variant="contained"
         sx={{
           padding: "12px 16px",
           bgcolor: '#9A2935',
           borderRadius: '8px',
           justifySelf:'center',
           '&:hover': { bgcolor: '#7a212a' },
         }}
       >
         Contact
       </Button>
 </Box>
  </>
  )
}

export default MarkCards
