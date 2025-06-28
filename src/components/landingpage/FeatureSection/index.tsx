import { Box, Container, Grid, Typography } from '@mui/material';

import FeatureCard from './FeatureCard';

import { FEATURES } from '@/constants/messages';

const FeatureSection = () => {
  return (
    <Container
      sx={{
        py: {
          xs: 8,
          lg: 12,
        },
        px: 0,
        width: '100%',
      }}
      component="section"
      maxWidth={false}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }} maxWidth="lg">
        <Box mb={8}>
          <Typography
            component="h2"
            variant="h3"
            fontWeight="700"
            textAlign="center"
            color="grey.900"
            mb={3}
          >
            Everything You Need to Manage Your Finances
          </Typography>

          <Typography
            component="p"
            variant="h6"
            fontWeight="700"
            textAlign="center"
            color="grey.600"
            mb={3}
            mx="auto"
            maxWidth="md"
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
                Icon={feature.icon}
                key={index}
                description={feature.description}
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
