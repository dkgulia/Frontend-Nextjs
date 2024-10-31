// src/components/CategoryGrid.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface Category {
  title: string;
  imageSrc: string;
}

const CategoryCard: React.FC<Category> = ({ title, imageSrc }) => {
  return (
    <Box
      sx={{
        width: 150,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderRadius: 2,
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        margin: '0 10px', // Horizontal spacing between cards
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt={title}
        sx={{
          width: '100px',
          height: '100px',
          marginBottom: 1,
        }}
      />
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
        {title}
      </Typography>
    </Box>
  );
};

const CategoriesGrid: React.FC = () => {
  // Placeholder images; replace these URLs with actual images
  const categories: Category[] = [
    { title: 'Toys', imageSrc: '/cat-1.webp' },
    { title: 'Sports', imageSrc: '/cat-2.webp' },
    { title: 'Gaming', imageSrc: '/cat-3.webp' },
    { title: 'Furniture', imageSrc: '/cat-4.webp' },
    { title: 'Fashion', imageSrc: '/cat-5.webp' },
    { title: 'Cameras', imageSrc: '/cat-5.webp' },
    { title: 'Furniture', imageSrc: '/cat-4.webp' },
    { title: 'Fashion', imageSrc: '/cat-5.webp' },
    { title: 'Cameras', imageSrc: '/cat-5.webp' },
    { title: 'Toys', imageSrc: '/cat-1.webp' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
        flexWrap: 'wrap',
        padding: 3,
        backgroundColor: '#f0f0f0',
      }}
    >
      {categories.map((category) => (
        <CategoryCard key={category.title} title={category.title} imageSrc={category.imageSrc} />
      ))}
    </Box>
  );
};

export default CategoriesGrid;
