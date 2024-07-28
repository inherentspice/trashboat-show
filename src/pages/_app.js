import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../app/theme';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline to apply the theme's background color globally */}
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
