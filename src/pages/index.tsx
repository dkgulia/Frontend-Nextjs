// src/pages/index.tsx
import React from 'react';
import Header from '@/components/Header';
import CategoriesGrid from '../components/CategoryGrid';
import HeroSection from '@/components/HeroSection';
import { Box } from '@mui/material';
import Footer from '@/components/Footer';
import DealsOfDay from '@/components/DealsOfDay'
import ProductShowcase from '@/components/ProductShowcase'

const HomePage = () => (
  <Box>
    <Header />
    <HeroSection/>
    <CategoriesGrid/>
    <DealsOfDay/>
    <ProductShowcase/>
    <Footer/>
  </Box>
);

export default HomePage;
