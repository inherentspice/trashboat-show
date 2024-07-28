import React from 'react';
import Image from 'next/image';
import { Box, Typography, Container } from '@mui/material';

import Layout from '@/app/layout';

const About = () => {
    return (
        <Layout>
            <Container maxWidth="md">
                <Box sx={{ my: 4, textAlign: 'center' }}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
                        About Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Trashbloat is a comedy collective made up of comics based in London, Chicago, New York,
                        Vancouver and Shanghai who all met while performing in China.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        At Trashfloat - a chaotic live panel show, expect a mix of stand-up and games, involving
                        audience interaction with the chance to win prizes*
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        *No guarantee prizes are good or worth winning
                    </Typography>
                    <Image src="/poster.jpg" alt="Show Poster" width={350} height={550} priority />
                </Box>
            </Container>
        </Layout>
    );
};

export default About;
