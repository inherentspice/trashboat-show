import React from 'react';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import Link from 'next/link';

import Layout from '@/app/layout';

export default function Index() {
    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh', // This ensures it's centered vertically in the viewport
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    Trashboat
                </Typography>
                <Link href="/home" passHref>
                    <Box
                        sx={{
                            mt: 2, // Margin top for spacing
                            borderRadius: '50%', // Makes the image round
                            overflow: 'hidden', // Ensures no overflow from the circular crop
                            width: 300, // Exact width of the circle
                            height: 300, // Exact height of the circle
                            boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)', // Optional shadow for depth
                            cursor: 'pointer', // Changes cursor to indicate clickable
                            display: 'flex', // Ensures content is flexed
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
                </Link>
            </Box>
        </Layout>
    );
}
