// components/Footer.tsx
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1F2937',
  color: '#fff',
  padding: theme.spacing(6, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#94A3B8',
  textDecoration: 'none',
  fontSize: '14px',
  '&:hover': {
    color: '#fff',
  },
  display: 'block',
  marginBottom: theme.spacing(1),
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  width: '32px',
  height: '32px',
  backgroundColor: '#374151',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#4B5563',
  },
}));

const StoreButton = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(2),
  '& img': {
    height: '40px',
    cursor: 'pointer',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 2 }}>
              <Image
                src="/logo.svg"
                alt="Bazaar Logo"
                width={120}
                height={40}
              />
            </Box>
            <Typography sx={{ color: '#94A3B8', mb: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Auctor libero id et, in gravida. Sit diam duis mauris nulla 
              cursus. Erat et lectus vel ut sollicitudin elit at amet.
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <StoreButton>
                <Image
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                />
              </StoreButton>
              <StoreButton>
                <Image
                  src="/app-store.png"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                />
              </StoreButton>
            </Box>
          </Grid>

          {/* About Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
              About Us
            </Typography>
            <Stack>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/our-stores">Our Stores</FooterLink>
              <FooterLink href="/our-cares">Our Cares</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          {/* Customer Care */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
              Customer Care
            </Typography>
            <Stack>
              <FooterLink href="/help">Help Center</FooterLink>
              <FooterLink href="/track-order">Track Your Order</FooterLink>
              <FooterLink href="/corporate">Corporate & Bulk Purchasing</FooterLink>
              <FooterLink href="/returns">Returns & Refunds</FooterLink>
            </Stack>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: '#94A3B8', mb: 1 }}>
              70 Washington Square South, New York, NY 10012, United States
            </Typography>
            <Typography sx={{ color: '#94A3B8', mb: 1 }}>
              Email: uilib.help@gmail.com
            </Typography>
            <Typography sx={{ color: '#94A3B8', mb: 2 }}>
              Phone: +1 1123 456 780
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <SocialIcon>
                <Image src="/fb.svg" alt="Twitter" width={16} height={16} />
              </SocialIcon>
              <SocialIcon>
                <Image src="/fb.svg" alt="Facebook" width={16} height={16} />
              </SocialIcon>
              <SocialIcon>
                <Image src="/fb.svg" alt="Instagram" width={16} height={16} />
              </SocialIcon>
              <SocialIcon>
                <Image src="/fb.svg" alt="YouTube" width={16} height={16} />
              </SocialIcon>
              <SocialIcon>
                <Image src="/fb.svg" alt="Google" width={16} height={16} />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;