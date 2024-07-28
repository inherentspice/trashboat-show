import React from 'react';

import Layout from '@/app/layout';
import ImageModalGrid from '@/components/ImageModal';
import imageData from '@/data/imagesData';

const HomePage = () => {
    return (
        <Layout>
            <ImageModalGrid imageData={imageData} modalDescription={'default'} />
        </Layout>
    );
};

export default HomePage;
