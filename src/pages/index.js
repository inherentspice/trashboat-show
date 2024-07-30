import React from 'react';
import Image from 'next/image';
import { Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

import Layout from '@/app/layout';

export default function Index() {
    return (
        <Layout>
            <style>
                {`
                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
                    }
                    50% {
                        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                    }
                }
            `}
            </style>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    Trashboat
                </Typography>
                <Typography variant="body1" component="p">
                    the world's worst gameshow
                </Typography>
                <Link href="/home" passHref>
                    <Button sx={{ p: 0, minWidth: 'auto', marginTop: 2 }}>
                        <Box
                            sx={{
                                mt: 2,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                width: 300,
                                height: 300,
                                cursor: 'pointer',
                                display: 'flex',
                                animation: 'pulse 2s infinite',
                            }}
                        >
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
                <Typography variant="caption" sx={{ mt: 1 }}>
                    Tap the image to enter
                </Typography>
            </Box>
        </Layout>
    );
}
