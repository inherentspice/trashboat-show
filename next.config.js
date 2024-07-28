const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['@'] = path.resolve(__dirname, './src');
        // Only enable source maps in development mode
        if (dev) {
            config.devtool = 'cheap-module-source-map'; // This option balances build speed with debuggability
        }

        return config;
    },
};

module.exports = nextConfig;
