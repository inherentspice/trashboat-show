import React, { useState } from 'react';
import { Grid, Box, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        key={image.id}
                        onClick={() => handleOpen(image)}
                        sx={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
                    >
                        <Box
                            sx={{
                                width: 325,
                                height: 'auto',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                position: 'relative',
                                '&:hover': {
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                                },
                            }}
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                width={325}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                            />
                            <Box
                                sx={{
                                    p: 1,
                                    position: 'absolute',
                                    bottom: 0,
                                    width: '100%',
                                    textAlign: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    color: 'white',
                                }}
                            >
                                <Typography variant="subtitle1">{image.title}</Typography>
                            </Box>
                            <IconButton
                                aria-label="view details"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleOpen(image);
                                }}
                                sx={{
                                    position: 'absolute',
                                    bottom: 8,
                                    right: 8,
                                    color: 'black',
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    },
                                }}
                            >
                                <OpenInNewIcon />
                            </IconButton>
                        </Box>
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
