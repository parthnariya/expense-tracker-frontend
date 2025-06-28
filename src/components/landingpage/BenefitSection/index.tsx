import { Button, Container, Typography } from '@mui/material';
import { ArrowRight } from 'lucide-react';

import BenefitList from './BenefitList';

const BenefitSection = () => {
  return (
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
        backgroundColor: (theme) => theme.palette.grey[50],
      }}
    >
      <Container
        maxWidth="md"
        sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto', textAlign: 'center' }}
      >
        <Typography
          color="grey.900"
          component="h2"
          fontWeight={700}
          mb={3}
          textAlign="center"
          variant="h3"
        >
          Ready to Transform Your Financial Life?
        </Typography>

        <Typography
          color="grey.600"
          component="p"
          maxWidth="md"
          mb={6}
          mx="auto"
          textAlign="center"
          variant="h6"
        >
          Join thousands of users who have already taken control of their
          finances. Start your journey to financial freedom today – it's
          completely free!
        </Typography>

        <BenefitList />

        <Button endIcon={<ArrowRight />} size="large" variant="contained">
          Start Tracking Now
        </Button>
      </Container>
    </Container>
  );
};

export default BenefitSection;
