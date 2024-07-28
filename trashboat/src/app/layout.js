"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
