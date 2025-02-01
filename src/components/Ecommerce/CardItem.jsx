import React from 'react'
import { 
    Card, 
    CardContent, 
    CardMedia, 
    Button, 
    Typography, 
    Box, 
   
  } from '@mui/material';

const CardItem = ({ image, title, description, buttonLabel }) => {
  return (
   <Box>
    <Card sx={{ maxWidth: 345, p: 2.5, color: '#9A2935', borderRadius: '12px' }}>
        <CardMedia
          sx={{ borderRadius: '8px' }}
          component="img"
          height="311"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#525252', fontSize: '18px' }}>
            {description}
          </Typography>
        </CardContent>


        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#FFFFFF',
            color: '#9A2935',
            border:'1px solid #9A2935',
            borderRadius: '8px',
            
            '&:hover': { bgcolor: '#9A2935', color: '#FFFFFF'  },
          }}
        >
          Visit
        </Button>
      </Card>
   </Box>
  )
}

export default CardItem
