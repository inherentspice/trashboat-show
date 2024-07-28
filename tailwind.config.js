/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js, ts, jsx, tsx, svg}'],
    theme: {
        extend: {
            colors: {
                primary: '#FFFFB3', // Pale yellow
                secondary: '#B3E5FC', // Pale blue
                error: '#FF1744', // Red from Material-UI red.A400
                background: '#FFF59D', // Light summery yellow
                success: '#B9F6CA', // Soft green
                warning: '#FFE57F', // Soft orange
                info: '#81D4FA', // Soft light blue
            },
        },
    },
    plugins: [],
};
