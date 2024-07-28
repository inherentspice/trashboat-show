import React from 'react';
import { Paper, Typography } from '@mui/material';

const DefinitionBox = ({ term, definition }) => {
  return (
    <Paper elevation={3} sx={{ padding: '16px', margin: '20px 0', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
        {term}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '8px' }}>
        {definition}
      </Typography>
    </Paper>
  );
};

export default DefinitionBox;
