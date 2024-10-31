import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Rating, Fab, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';

// Define the product data directly in this file
const products = [
  { title: 'Silver High Neck Sweater', price: 210, image: '/1.webp', rating: 4.5 },
  { title: 'Yellow Casual Sweater', price: 110, image: '/21.webp', rating: 4 },
  { title: 'Denim Blue Jeans', price: 140, image: '/4.webp', rating: 4.2 },
  { title: 'Black White Sweater', price: 180, image: '/19.webp', rating: 4.3 },
];

const DealsOfDay: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 3, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Deals Of The Day
        </Typography>
        <Button variant="text" endIcon={<span>&#8594;</span>} sx={{ color: '#000', fontWeight: 'bold' }}>
          More Products
        </Button>
      </Box>

      {/* Product Grid for Desktop and Horizontal Scroll for Mobile */}
      <Grid container spacing={2} justifyContent={isMobile ? 'flex-start' : 'center'} sx={{ overflowX: isMobile ? 'auto' : 'unset', flexWrap: isMobile ? 'nowrap' : 'wrap' }}>
        {products.map((product, index) => (
          <Grid item key={index} sx={{ flexShrink: 0, width: isMobile ? '90%' : 260 }}>
            <Card
              sx={{
                width: '100%',
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ height: 180, width: 'auto', mx: 'auto', mt: 1 }}
              />
              <CardContent sx={{ textAlign: 'center', px: 2 }}>
                <Typography variant="h6" component="div" gutterBottom noWrap>
                  {product.title}
                </Typography>
                <Typography variant="h5" color="text.primary" fontWeight="bold">
                  ${product.price.toFixed(2)}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
                  <Rating name="read-only" value={product.rating} readOnly size="small" precision={0.5} />
                  <Typography variant="body2" color="text.secondary" ml={0.5}>
                    (0)
                  </Typography>
                </Box>
              </CardContent>
              <Button
                sx={{
                  fontWeight: 'bold',
                  color: '#000',
                }}
              >
                Add To Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Floating Action Button */}
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default DealsOfDay;
