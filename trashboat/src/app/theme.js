import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFB3',  // Pale yellow
    },
    secondary: {
      main: '#B3E5FC',  // Pale blue
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFF59D'  // Using a light, summery yellow for the background
    },
    success: {
      main: '#B9F6CA'  // Soft green
    },
    warning: {
      main: '#FFE57F'  // Soft orange
    },
    info: {
      main: '#81D4FA'  // Soft light blue
    }
  },
});

export default theme;
