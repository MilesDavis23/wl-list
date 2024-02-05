import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.yellow',
  border: '1px solid #000',
  borderRadius: 1.5,
  boxShadow: 24,
  opacity: 0.75,
  borderColor: '#FFFDF7',
  p: 4,
};

const FeedbackModal = ({ open, handleClose, message }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="feedback-modal-title"
      aria-describedby="feedback-modal-description"
    >
      <Box sx={style}>
        <Typography id="feedback-modal-title" variant="h6" component="h2">
          Uh.
        </Typography>
        <Typography id="feedback-modal-description" sx={{ mt: 2 }}>
          {message}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
