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
            <Grid container spacing={2} className="py-10">
                {imageData.map((image) => (
                    <Grid item xs={12} sm={4} key={image.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div id="photo-card" className="h-auto md:h-[400px] border w-[325px] rounded-md">
                            <div
                                id="overlay-container"
                                role="button"
                                onClick={() => handleOpen(image)}
                                className="bg-white bg-opacity-[60%] h-full relative flex items-center rounded-md"
                            >
                                <div
                                    id="photo-container"
                                    className="w-full h-full flex justify-center cursor-pointer"
                                    style={{ paddingBottom: '40px' }}
                                >
                                    <img src={image.src} className="object-contain max-h-full" />
                                </div>
                                <div
                                    id="white-bottom-banner"
                                    className="absolute bottom-0 w-full flex justify-center p-2"
                                >
                                    <p className="text-black text-xl hover:underline text-center">{image.title}</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 370,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        outline: 0,
                    }}
                >
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {selectedImage.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                        {modalDescription === 'default' ? selectedImage.description : selectedImage.answer}
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
