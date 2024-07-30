import React from 'react';
import Image from 'next/image';
import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

import Layout from '@/app/layout';

export default function Index() {
    return (
        <Layout>
            <Box className="centered-flex-box">
                <Typography variant="h2" component="h1" gutterBottom>
                    Trashboat
                </Typography>
                <Typography variant="body1" component="p">
                    the world's worst gameshow
                </Typography>
                <Link href="/home" passHref>
                    <Button className="image-button">
                        <Box className="image-container pulse-effect">
                            <Image
                                src="/trashboat.png"
                                alt="Burning boat at sea"
                                width={300}
                                height={300}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </Box>
                    </Button>
                </Link>
                <Typography variant="caption" className="image-caption">
                    Tap the image to enter
                </Typography>
            </Box>
        </Layout>
    );
}
