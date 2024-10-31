// components/ProductShowcase.tsx
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, styled } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

interface ProductCardProps {
  label: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  link: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  '&:hover': {
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
      transition: 'transform 0.3s ease-in-out',
    },
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 300,
  transition: 'transform 0.3s ease-in-out',
});

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(3),
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
  color: 'white',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  borderColor: 'white',
  '&:hover': {
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  marginTop: theme.spacing(1),
}));

const ProductCard: React.FC<ProductCardProps> = ({
  label,
  title,
  subtitle,
  imageUrl,
  link,
}) => {
  return (
    <StyledCard>
      <StyledCardMedia
        image={imageUrl}
        title={title}
      />
      <ContentOverlay>
        <Typography variant="overline" color="inherit">
          {label}
        </Typography>
        <Typography variant="h6" component="h2" color="inherit" gutterBottom>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="subtitle2" color="inherit" gutterBottom>
            {subtitle}
          </Typography>
        )}
        <StyledButton
          variant="outlined"
          size="small"
          endIcon={<ArrowForwardIcon />}
          href={link}
        >
          Shop Now
        </StyledButton>
      </ContentOverlay>
    </StyledCard>
  );
};

const ProductShowcase: React.FC = () => {
  const theme = useTheme();

  const products = [
    {
      label: 'NEW ARRIVALS',
      title: 'SKI CLOTHES SALE',
      subtitle: 'Up to 35% Off',
      imageUrl: '/banner-18.webp',
      link: '/ski-clothes',
    },
    {
      label: 'BEST SELLER',
      title: 'TRENDING WOMEN SUNGLASSES',
      imageUrl: '/banner-19.webp',
      link: '/sunglasses',
    },
    {
      label: 'NEW ARRIVALS',
      title: 'NEW LATEST BAG COLLECTION',
      imageUrl: '/banner-20.webp',
      link: '/bags',
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductShowcase;