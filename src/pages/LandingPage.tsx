import { Container, Stack, Typography } from '@mui/material';

import BenefitSection from '@/components/landingpage/BenefitSection';
import FeatureSection from '@/components/landingpage/FeatureSection';
import HeroSection from '@/components/landingpage/HeroSection';
import StateSection from '@/components/landingpage/StateSection';
import AppLogo from '@/components/ui/AppLogo';

const LandingPage = () => {
  return (
    <Container maxWidth={false} sx={{ m: 0, width: '100%', p: { xs: 0 } }}>
      <HeroSection />

      <FeatureSection />

      <StateSection />

      <BenefitSection />

      <Container
        component="section"
        maxWidth={false}
        sx={{
          py: {
            xs: 8,
            lg: 12,
          },
          px: 0,
          width: '100%',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }}
        >
          <Stack alignItems="center" justifyContent="center">
            <AppLogo />

            <Typography
              color="grey.600"
              maxWidth="sm"
              my={3}
              textAlign="center"
            >
              Take control of your financial future with our comprehensive
              personal finance management tool.
            </Typography>
          </Stack>
        </Container>
      </Container>
    </Container>
  );
};

export default LandingPage;
