import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Modal, Box } from '@mui/material';
import Layout from '../app/layout';
import imageData from '../data/imagesData';

export default function Home() {
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
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {imageData.map((image) => (
          <Grid item xs={12} sm={4} key={image.id}>
            <Card
              sx={{
                backgroundColor: '#f5f5f5',
                ':hover': {
                  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', // Optional: Add hover effect
                },
                borderRadius: '16px', // Rounded edges
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Enhanced drop shadow
              }}
              onClick={() => handleOpen(image)}
            >
              <CardMedia
                component="img"
                height="160"
                image={image.src}
                alt={image.title}
              />
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Vertically center content
                height: '100%' // Ensure the CardContent takes full height of its parent
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
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedImage.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedImage.answer}
          </Typography>
          <img src={selectedImage.src} alt={selectedImage.title} style={{ width: '100%', marginTop: '20px' }} />
        </Box>
      </Modal>
    </Layout>
  );
}
