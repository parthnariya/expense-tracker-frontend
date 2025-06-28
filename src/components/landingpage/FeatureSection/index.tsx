import { Box, Container, Grid, Typography } from '@mui/material';

import FeatureCard from './FeatureCard';

import { FEATURES } from '@/constants/messages';

const FeatureSection = () => {
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
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }}>
        <Box mb={8}>
          <Typography
            color="grey.900"
            component="h2"
            fontWeight="700"
            mb={3}
            textAlign="center"
            variant="h3"
          >
            Everything You Need to Manage Your Finances
          </Typography>

          <Typography
            color="grey.600"
            component="p"
            fontWeight="700"
            maxWidth="md"
            mb={3}
            mx="auto"
            textAlign="center"
            variant="h6"
          >
            Powerful features designed to give you complete control over your
            personal finances. Simple enough for beginners, comprehensive enough
            for power users.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container={true} spacing={2}>
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                description={feature.description}
                Icon={feature.icon}
                title={feature.title}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default FeatureSection;
