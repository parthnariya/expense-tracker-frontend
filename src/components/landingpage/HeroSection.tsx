import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { ArrowRight } from 'lucide-react';

import { TRUST_INDICATOR } from '@/constants/messages';

const HeroSection = () => {
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
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? `linear-gradient(to bottom right, ${theme.palette.augmentColor({ color: { main: '#0F172A' } }).dark} 0%, ${theme.palette.augmentColor({ color: { main: '#1E293B' } }).dark} 100%)`
            : `linear-gradient(to bottom right, ${theme.palette.augmentColor({ color: { main: '#EBF8FF' } }).light} 0%, ${theme.palette.augmentColor({ color: { main: '#C3DAFE' } }).light} 100%)`,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }}>
        <Grid
          alignItems="center"
          container
          display="grid"
          gap={6}
          sx={{ gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' } }}
        >
          <Grid columns={{ xs: 12, lg: 6 }}>
            <Stack
              alignItems={{ xs: 'center', lg: 'flex-start' }}
              textAlign={{ xs: 'center', lg: 'left' }}
            >
              <Typography
                component="h1"
                fontWeight="700"
                marginBottom={3}
                sx={{
                  fontSize: {
                    xs: '2.25rem',
                    sm: '3rem',
                    lg: '3.75rem',
                  },
                  lineHeight: 1,
                  color: (theme) => theme.palette.grey[900],
                }}
              >
                Take Control of Your&nbsp;
                <Typography
                  color="primary"
                  component="span"
                  fontWeight="700"
                  sx={{
                    fontSize: {
                      xs: '2.25rem',
                      sm: '3rem',
                      lg: '3.75rem',
                    },
                    lineHeight: 1,
                  }}
                >
                  Finances
                </Typography>
              </Typography>

              <Typography
                fontSize="20px"
                marginBottom={4}
                maxWidth="672px"
                sx={{ color: (theme) => theme.palette.grey[600] }}
                textAlign={{ xs: 'center', lg: 'left' }}
              >
                Track, categorize, and visualize your personal financial
                transactions with powerful insights. Make informed decisions
                about your spending patterns and achieve your financial goals.
              </Typography>
              <Button endIcon={<ArrowRight />} size="large" variant="contained">
                Start Tracking
              </Button>

              <Stack
                alignItems="center"
                direction={{ xs: 'column', sm: 'row' }}
                gap={3}
                justifyContent={{ xs: 'center', lg: 'flex-start' }}
                marginTop={6}
              >
                {TRUST_INDICATOR.map((listItem, index) => (
                  <Stack
                    key={index}
                    alignItems="center"
                    direction="row"
                    gap={1}
                  >
                    <Box
                      bgcolor={listItem.color}
                      borderRadius="2in"
                      height="8px"
                      width="8px"
                    />
                    <Typography component="span" fontSize="14px">
                      {listItem.detail}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid columns={{ xs: 12, lg: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ position: 'relative', zIndex: 10 }}>
                <img
                  alt="Personal finance management dashboard showing charts and transaction data"
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '1rem',
                  }}
                />
              </Box>
              <Box
                borderRadius={2}
                display={{ xs: 'none', lg: 'block' }}
                left={-16}
                p={2}
                position="absolute"
                sx={{
                  backgroundColor: (theme) => theme.palette.background.default,
                }}
                top={-16}
                zIndex={20}
              >
                <Stack alignItems="center" direction="row" gap={0.5}>
                  <Stack
                    alignItems="center"
                    height={40}
                    justifyContent="center"
                    sx={{
                      backgroundColor: (theme) => theme.palette.green[100],
                    }}
                    width={40}
                  >
                    <Typography
                      color="secondary"
                      component="span"
                      variant="subtitle1"
                    >
                      +
                    </Typography>
                  </Stack>
                  <Box>
                    <Typography
                      component="p"
                      fontWeight={600}
                      margin={0}
                      sx={{ color: (theme) => theme.palette.grey[900] }}
                      variant="subtitle2"
                    >
                      Income
                    </Typography>
                    <Typography
                      component="p"
                      fontWeight={700}
                      margin={0}
                      sx={{ color: (theme) => theme.palette.secondary.main }}
                      variant="subtitle1"
                    >
                      +1205
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box
                borderRadius={2}
                bottom={-16}
                display={{ xs: 'none', lg: 'block' }}
                p={2}
                position="absolute"
                right={-16}
                sx={{
                  backgroundColor: (theme) => theme.palette.background.default,
                }}
                zIndex={20}
              >
                <Stack alignItems="center" direction="row" gap={0.5}>
                  <Stack
                    alignItems="center"
                    height={40}
                    justifyContent="center"
                    sx={{
                      backgroundColor: (theme) => theme.palette.red[100],
                    }}
                    width={40}
                  >
                    <Typography
                      color="error"
                      component="span"
                      variant="subtitle1"
                    >
                      -
                    </Typography>
                  </Stack>
                  <Box>
                    <Typography
                      component="p"
                      fontWeight={600}
                      margin={0}
                      sx={{ color: (theme) => theme.palette.grey[900] }}
                      variant="subtitle2"
                    >
                      Expense
                    </Typography>
                    <Typography
                      component="p"
                      fontWeight={700}
                      margin={0}
                      sx={{ color: (theme) => theme.palette.error.main }}
                      variant="subtitle1"
                    >
                      -589
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default HeroSection;
