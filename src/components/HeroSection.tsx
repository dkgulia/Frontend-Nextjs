// components/HeroSection.tsx
import { Box, Button, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

const StyledSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFDF7',
  padding: theme.spacing(4, 0),
  position: 'relative',
}));

const MainBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#fff',
  padding: theme.spacing(6),
  // height: '500px',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    padding: theme.spacing(4),
  },
}));

const SideCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#F7FAFC',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ShopNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#1A202C',
  color: 'white',
  padding: '8px 24px',
  '&:hover': {
    backgroundColor: '#2D3748',
  },
}));

const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  backgroundColor: '#fff',
  borderRadius: theme.spacing(1),
}));

const HeroSection = () => {
  return (
    <StyledSection>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* Main Banner */}
          <Grid item xs={12} lg={9}>
            <MainBanner>
              <Box sx={{ width: '50%', zIndex: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ mb: 1, color: '#1A202C' }}
                >
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 'bold',
                    fontSize: { xs: '3rem', md: '4rem' },
                    color: '#1A202C'
                  }}
                >
                  MEN
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  SALE UP TO <span style={{ color: '#E53E3E' }}>30% OFF</span>
                </Typography>
                <Typography 
                  sx={{ 
                    mb: 4,
                    color: '#4A5568'
                  }}
                >
                  Get Free Shipping on orders over $99.00
                </Typography>
                <ShopNowButton variant="contained">
                  Shop Now
                </ShopNowButton>
              </Box>
              <Box 
                sx={{ 
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: '50%',
                  height: '100%',
                }}
              >
                {/* Replace with your image */}
                <Box
                  component="img"
                  src="/240822_Levis_Music_Hero-1137x688.webp"
                  alt="Male model in leather jacket"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </MainBanner>
          </Grid>

          {/* Side Cards */}
          <Grid item xs={12} lg={3}>
            <SideCard>
              <Typography 
                variant="subtitle2" 
                color="primary"
                sx={{ mb: 1 }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                SUMMER
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                SALE 20% OFF
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                  component="span" 
                  sx={{ 
                    color: '#2B6CB0',
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Shop Now
                </Typography>
                <Typography sx={{ ml: 1 }}>→</Typography>
              </Box>
            </SideCard>

            <SideCard>
              <Typography 
                variant="subtitle2" 
                color="primary"
                sx={{ mb: 1 }}
              >
                GAMING 4K
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                DESKTOPS &
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                LAPTOPS
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                  component="span" 
                  sx={{ 
                    color: '#2B6CB0',
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Shop Now
                </Typography>
                <Typography sx={{ ml: 1 }}>→</Typography>
              </Box>
            </SideCard>
          </Grid>
        </Grid>

        {/* Features Section */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureBox>
              <LocalShippingOutlinedIcon sx={{ fontSize: 40, color: '#4A5568' }} />
              <Box>
                <Typography variant="h6">Fast Delivery</Typography>
                <Typography color="textSecondary">Start from $10</Typography>
              </Box>
            </FeatureBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureBox>
              <MonetizationOnOutlinedIcon sx={{ fontSize: 40, color: '#4A5568' }} />
              <Box>
                <Typography variant="h6">Money Guarantee</Typography>
                <Typography color="textSecondary">7 Days Back</Typography>
              </Box>
            </FeatureBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureBox>
              <AccessTimeOutlinedIcon sx={{ fontSize: 40, color: '#4A5568' }} />
              <Box>
                <Typography variant="h6">365 Days</Typography>
                <Typography color="textSecondary">For free return</Typography>
              </Box>
            </FeatureBox>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureBox>
              <CreditCardOutlinedIcon sx={{ fontSize: 40, color: '#4A5568' }} />
              <Box>
                <Typography variant="h6">Payment</Typography>
                <Typography color="textSecondary">Secure system</Typography>
              </Box>
            </FeatureBox>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default HeroSection;