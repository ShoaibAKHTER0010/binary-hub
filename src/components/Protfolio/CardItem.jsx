import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';

const CardItem = ({ image, title, description, buttonLabel }) => {
  return (
   
    <Box>
      
      <Card sx={{ maxWidth: 345, padding: '20px', color: '#9A2935', borderRadius: "12px"}}>
      <CardMedia sx={{
        borderRadius:"8px"
      }}  
        component="img"
        height="311"
        image={image} 
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ color: '#525252', fontSize:'18px ' }}>
          {description}
        </Typography>
      </CardContent>
      <Button size="small" variant="contained" style={{ margin: '0.5rem', backgroundColor: '#040404', borderRadius: '16px' }}>
        {buttonLabel}
      </Button>
    </Card>
    </Box>
  );
};

export default CardItem;
