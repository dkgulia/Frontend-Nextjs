import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, Card, CardContent, CardMedia, CardActions, Rating, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
const categories = [
  'Wireless Speaker', 'Tablet', 'Smartphone', 'Laptop', 'iMac', 'Game Controller', 'Drone', 'Apple'
];

const products = [
  { id: 1, name: 'Black White Sweater', price: 180, image: '/cat-1.webp', rating: 4 },
  { id: 2, name: 'Gray Overcoat Women', price: 110, image: '/cat-1.webp', rating: 5 },
  { id: 3, name: 'Women\'s Fashion', price: 140, image: '/cat-1.webp', rating: 3 },
  { id: 4, name: 'Nike Red', price: 210, image: '/cat-1.webp', rating: 4 },
  // Add more products if needed
];

// Custom arrow components for the carousel
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: -20,
        transform: 'translateY(-50%)',
        zIndex: 1,
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: -20,
        transform: 'translateY(-50%)',
        zIndex: 1,
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

const ProductCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ display: 'flex', gap: 3, padding: 3, backgroundColor: '#f8f9fa' }}>
      {/* Sidebar for Categories */}
      <Box sx={{ width: '20%', padding: 2, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography variant="h6" gutterBottom>Men's Fashion</Typography>
        {categories.map((category) => (
          <Typography key={category} sx={{ cursor: 'pointer', marginBottom: 1 }}>{category}</Typography>
        ))}
        <Typography sx={{ cursor: 'pointer', color: 'primary.main', marginTop: 2 }}>
          Browse All →
        </Typography>
      </Box>

      {/* Product Carousel */}
      <Box sx={{ width: '80%' }}>
        <Slider {...settings}>
          {products.map((product) => (
            <Card key={product.id} sx={{ padding: 2, borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image} 
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">${product.price.toFixed(2)}</Typography>
                <Rating value={product.rating} readOnly />
              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ display: 'flex', alignItems: 'center' }}>
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProductCarousel;
