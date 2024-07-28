import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

import Layout from '@/app/layout';
import imageData from '@/data/imagesData';
import ImageModal from '@/components/ImageModal';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCheckPhrase = () => {
        if (inputValue.toLowerCase() === 'londonsucks') {
            setIsAuthorized(true);
        }
    };

    return (
        <Layout>
            {isAuthorized ? (
                <ImageModal imageData={imageData} modalDescription={'answers'} />
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
                    <Button variant="contained" sx={{ mt: 2 }} fullWidth onClick={handleCheckPhrase}>
                        Submit
                    </Button>
                </Box>
            )}
        </Layout>
    );
}
