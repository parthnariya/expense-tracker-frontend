import { Button, Container, Typography } from '@mui/material';
import { ArrowRight } from 'lucide-react';

import BenefitList from './BenefitList';

const BenefitSection = () => {
  return (
    <Container
      sx={{
        py: {
          xs: 8,
          lg: 12,
        },
        px: 0,
        width: '100%',
        backgroundColor: (theme) => theme.palette.grey[50],
      }}
      component="section"
      maxWidth={false}
    >
      <Container
        sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto', textAlign: 'center' }}
        maxWidth="md"
      >
        <Typography
          component="h2"
          fontWeight={700}
          color="grey.900"
          mb={3}
          variant="h3"
          textAlign="center"
        >
          Ready to Transform Your Financial Life?
        </Typography>

        <Typography
          component="p"
          color="grey.600"
          mb={6}
          mx="auto"
          variant="h6"
          maxWidth="md"
          textAlign="center"
        >
          Join thousands of users who have already taken control of their
          finances. Start your journey to financial freedom today – it's
          completely free!
        </Typography>

        <BenefitList />

        <Button variant="contained" size="large" endIcon={<ArrowRight />}>
          Start Tracking Now
        </Button>
      </Container>
    </Container>
  );
};

export default BenefitSection;
