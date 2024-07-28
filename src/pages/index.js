import React from 'react';
import Layout from '../app/layout';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import Link from 'next/link'; // Import Link from Next.js

export default function Index() {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh' // This ensures it's centered vertically in the viewport
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
              width: 300, // Width of the circle
              height: 300, // Height of the circle
              boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.3)', // Optional shadow for depth
              cursor: 'pointer' // Changes cursor to indicate clickable
            }}
          >
            <Image
              src="/trashboat.png"
              alt="Burning boat at sea"
              width={300}
              height={300}
            />
          </Box>
        </Link>
      </Box>
    </Layout>
  );
}