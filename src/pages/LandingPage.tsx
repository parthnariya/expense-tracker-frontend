import { Container } from '@mui/material';

import FeatureSection from '@/components/landingpage/FeatureSection';
import HeroSection from '@/components/landingpage/HeroSection';

const LandingPage = () => {
  return (
    <Container maxWidth={false} sx={{ m: 0, width: '100%', p: { xs: 0 } }}>
      <HeroSection />

      <FeatureSection />
    </Container>
  );
};

export default LandingPage;
