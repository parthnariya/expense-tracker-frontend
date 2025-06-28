import { Box, Container, Grid, Typography } from '@mui/material';

import StateCard from './StateCard';

import { MARKETING_STATS } from '@/constants/messages';

const StateSection = () => {
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
        background: (theme) => theme.palette.blue[600],
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }}>
        <Box mb={8} textAlign="center">
          <Typography color="white" fontWeight={700} variant="h3">
            Trusted by Thousands of Users
          </Typography>
          <Typography
            color="white"
            maxWidth="md"
            mx="auto"
            sx={{ opacity: 0.75 }}
            variant="h6"
          >
            Join a growing community of people who have taken control of their
            finances and are building a better financial future.
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container={true} spacing={2}>
            {MARKETING_STATS.map((state, index) => (
              <StateCard
                key={index}
                description={state.description}
                Icon={state.icon}
                label={state.label}
                value={state.value}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default StateSection;
