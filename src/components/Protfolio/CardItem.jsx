import React, { useState, useRef } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Typography, 
  Box, 
  CircularProgress, 
  TextField 
} from '@mui/material';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_yvwlt2k';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_w5w1hiu';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'bMKvOsMo829hKFom8';

const CardItem = ({ image, title, description, buttonLabel }) => {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError('');
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setError('');
    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      handleClose();
    } catch (err) {
      console.error('Email send error:', err);
      setError('Failed to send email. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box>
      {/* Success Message */}
      <Box 
        sx={{ 
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: 'success.main',
          color: 'white',
          zIndex: 10000,
          visibility: showSuccess ? 'visible' : 'hidden',
          opacity: showSuccess ? 1 : 0,
          transition: 'all 0.3s ease',
        }}
      >
        Thank you for your submission!
      </Box>

      {/* Contact Form Modal */}
      {open && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            zIndex: 9999,
          }}
          onClick={handleClose}
        >
          <Box 
            sx={{ 
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              minWidth: 300,
              maxWidth: 600,
              width: '90%'
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <Typography variant="h5" gutterBottom>
              Get In Touch
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can reach us anytime via info@binaryhub.com
            </Typography>

            <form ref={form} onSubmit={sendEmail}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Name
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Email
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Explain Your Requirements
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="message"
                  placeholder="Tell us a little about yourself"
                  multiline
                  rows={6}
                  required
                />
              </Box>

              {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                disabled={isSending}
                sx={{
                  bgcolor: '#9A2935',
                  color: 'white',
                  '&:hover': { bgcolor: '#7a212a' },
                  '&:disabled': { bgcolor: '#cccccc' },
                }}
              >
                {isSending ? (
                  <CircularProgress size={24} sx={{ color: 'white' }} />
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          </Box>
        </Box>
      )}

      {/* Card Component */}
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
          onClick={handleOpen}
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#9A2935',
            borderRadius: '16px',
            mb: 1,
            '&:hover': { bgcolor: '#7a212a' },
          }}
        >
          Contact
        </Button>

        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#040404',
            borderRadius: '16px',
            '&:hover': { bgcolor: '#262626' },
          }}
        >
          Visit
        </Button>
      </Card>
    </Box>
  );
};

export default CardItem;