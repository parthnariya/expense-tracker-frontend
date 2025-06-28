import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

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
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <Card
                  sx={{
                    backgroundColor: (theme) => theme.palette.grey[50],
                    border: 2,
                    borderRadius: 2,
                    borderColor: (theme) => theme.palette.grey[50],
                    transition: `all 300ms ease`,
                    ':hover': {
                      backgroundColor: (theme) => theme.palette.grey[100],
                      boxShadow: 2,
                      borderColor: (theme) => theme.palette.blue[200],
                    },
                    p: 2,
                    boxShadow: 'none',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ padding: 0 }}>
                    <Stack
                      width={'4rem'}
                      height={'4rem'}
                      bgcolor={`blue.100`}
                      borderRadius={4}
                      mb={3}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <feature.icon strokeWidth={2} size={24} color="#2563eb" />
                    </Stack>

                    <Typography
                      fontWeight={'600'}
                      variant="h6"
                      color="grey.900"
                      mb={2}
                    >
                      {feature.title}
                    </Typography>

                    <Typography lineHeight={1.625} color="grey.600">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default FeatureSection;
