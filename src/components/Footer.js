import React from 'react';
import { Box, Typography, IconButton, Link as MuiLink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderTop: '1px solid #ccc',
                mt: 'auto',
            }}
            className="bg-primary"
        >
            <Typography variant="body2" color="text.secondary">
                © 2024 Trashboat Comedy Collective
            </Typography>
            <Box>
                <IconButton
                    component={MuiLink}
                    href="https://www.instagram.com/trashboatcomedy?igsh=aGowbTdoOHg0eHJ6"
                    target="_blank"
                    rel="noopener"
                >
                    <InstagramIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
