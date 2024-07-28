import React, { useState } from "react";
import { Box, Container, TextField, Button, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Layout from "../app/layout";

const imageList = [
  "/Vape.png",
  "/Phone.png",
  "/Jorts.png",
  "/Oxytntanyl.png",
  "/Groggin.png",
  "/Escaped.png",
  "/TrashboatAd.png",
];

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(imageList[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * imageList.length);
    setSelectedImage(imageList[randomIndex]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ marginTop: 4, marginBottom: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              margin="normal"
              type="tel"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="image-modal"
          aria-describedby="image-description"
        >
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
            outline: 0
          }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500]
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2, mt: 3 }}>
              Oops! You&apos;ve hit a technical issue! Relax with a word from our sponsors.
            </Typography>
            <Image
              src={selectedImage}
              alt="Advertisement from our sponsors"
              width={370}
              height={300}
              layout="responsive"
            />
          </Box>
        </Modal>
      </Container>
    </Layout>
  );
};

export default Contact;
