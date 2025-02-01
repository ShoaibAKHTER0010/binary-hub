import React, { useState } from 'react';
import { Box, Modal, TextField, Button, Typography } from '@mui/material';

const Popup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Popup
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: 'blur(5px)',
        }}
      >
        <Box sx={style}>
          <Typography variant="h2" gutterBottom>
            Get In Touch
          </Typography>
          <Typography variant="body1" gutterBottom>
            You can reach us anytime via info@binaryhub.com
          </Typography>

          <TextField
            fullWidth
            label="Name"
            placeholder="Your Name"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Your Email"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Explain Your Requirements"
            placeholder="Tell us a little about yourself"
            multiline
            rows={10}
            margin="normal"
          />

          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Popup;