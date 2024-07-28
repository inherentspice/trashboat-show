import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Modal, Box, TextField, Button } from '@mui/material';
import Layout from '../app/layout';
import imageData from '../data/imagesData';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCheckPhrase = () => {
    if (inputValue.toLowerCase() === "londonsucks") {
      setIsAuthorized(true);
    }
  };

  return (
    <Layout>
      {isAuthorized ? (
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
                <CardMedia
                  component="img"
                  height="160"
                  image={image.src}
                  alt={image.title}
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
      ) : (
        <Box sx={{ maxWidth: 360, m: 'auto', pt: 10 }}>
          <TextField
            fullWidth
            label="Enter Secret Phrase"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleCheckPhrase();
              }
            }}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
            onClick={handleCheckPhrase}
          >
            Submit
          </Button>
        </Box>
      )}
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
            {selectedImage.description}
          </Typography>
          <img src={selectedImage.src} alt={selectedImage.title} style={{ width: '100%', marginTop: '20px' }} />
        </Box>
      </Modal>
    </Layout>
  );
}
