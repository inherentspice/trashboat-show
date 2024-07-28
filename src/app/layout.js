"use client"
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
