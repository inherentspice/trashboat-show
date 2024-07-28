import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const ImageModal = ({ imageData, modalDescription }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {imageData.map((image) => (
          <Grid item xs={12} sm={4} key={image.id}>
            <Card
              sx={{
                backgroundColor: '#f5f5f5',
                ':hover': {
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                },
                borderRadius: '16px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
              onClick={() => handleOpen(image)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={345}
                height={160}
                layout="responsive"
              />
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%'
              }}>
                <Typography gutterBottom variant="h6" component="div">
                  {image.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 370,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          outline: 0
        }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedImage.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
            {modalDescription === "default" ? selectedImage.description : selectedImage.answer}
          </Typography>
          <Image
            src={selectedImage.src}
            alt={selectedImage.title}
            width={370}
            height={300}
            layout="responsive"
          />
        </Box>
      </Modal>
    </>
  );
};

export default ImageModal;