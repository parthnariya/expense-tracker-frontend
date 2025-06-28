import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { ArrowRight } from 'lucide-react';

import { TRUST_INDICATOR } from '@/constants/messages';

const HeroSection = () => {
  return (
    <Container
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
      component="section"
      maxWidth={false}
    >
      <Container sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }} maxWidth="lg">
        <Grid
          display="grid"
          sx={{ gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' } }}
          gap={6}
          alignItems="center"
          container
        >
          <Grid columns={{ xs: 12, lg: 6 }}>
            <Stack
              alignItems={{ xs: 'center', lg: 'flex-start' }}
              textAlign={{ xs: 'center', lg: 'left' }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '2.25rem',
                    sm: '3rem',
                    lg: '3.75rem',
                  },
                  lineHeight: 1,
                  color: (theme) => theme.palette.grey[900],
                }}
                component="h1"
                fontWeight="700"
                marginBottom={3}
              >
                Take Control of Your&nbsp;
                <Typography
                  component="span"
                  color="primary"
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
                maxWidth="672px"
                marginBottom={4}
                textAlign={{ xs: 'center', lg: 'left' }}
                sx={{ color: (theme) => theme.palette.grey[600] }}
              >
                Track, categorize, and visualize your personal financial
                transactions with powerful insights. Make informed decisions
                about your spending patterns and achieve your financial goals.
              </Typography>
              <Button variant="contained" size="large" endIcon={<ArrowRight />}>
                Start Tracking
              </Button>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                marginTop={6}
                gap={3}
                alignItems="center"
                justifyContent={{ xs: 'center', lg: 'flex-start' }}
              >
                {TRUST_INDICATOR.map((listItem, index) => (
                  <Stack
                    direction="row"
                    gap={1}
                    key={index}
                    alignItems="center"
                  >
                    <Box
                      height={'8px'}
                      width={'8px'}
                      bgcolor={listItem.color}
                      borderRadius="2in"
                    />
                    <Typography component="span" fontSize={'14px'}>
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Personal finance management dashboard showing charts and transaction data"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '1rem',
                  }}
                />
              </Box>
              <Box
                position="absolute"
                top={-16}
                left={-16}
                sx={{
                  backgroundColor: (theme) => theme.palette.background.default,
                }}
                borderRadius={2}
                p={2}
                zIndex={20}
                display={{ xs: 'none', lg: 'block' }}
              >
                <Stack direction={'row'} alignItems="center" gap={0.5}>
                  <Stack
                    width={40}
                    height={40}
                    sx={{
                      backgroundColor: (theme) => theme.palette.green[100],
                    }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      component="span"
                      color="secondary"
                      variant="subtitle1"
                    >
                      +
                    </Typography>
                  </Stack>
                  <Box>
                    <Typography
                      component="p"
                      variant="subtitle2"
                      sx={{ color: (theme) => theme.palette.grey[900] }}
                      fontWeight={600}
                      margin={0}
                    >
                      Income
                    </Typography>
                    <Typography
                      component="p"
                      variant="subtitle1"
                      sx={{ color: (theme) => theme.palette.secondary.main }}
                      fontWeight={700}
                      margin={0}
                    >
                      +1205
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box
                position="absolute"
                bottom={-16}
                right={-16}
                sx={{
                  backgroundColor: (theme) => theme.palette.background.default,
                }}
                borderRadius={2}
                p={2}
                zIndex={20}
                display={{ xs: 'none', lg: 'block' }}
              >
                <Stack direction={'row'} alignItems="center" gap={0.5}>
                  <Stack
                    width={40}
                    height={40}
                    sx={{
                      backgroundColor: (theme) => theme.palette.red[100],
                    }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      component="span"
                      color="error"
                      variant="subtitle1"
                    >
                      -
                    </Typography>
                  </Stack>
                  <Box>
                    <Typography
                      component="p"
                      variant="subtitle2"
                      sx={{ color: (theme) => theme.palette.grey[900] }}
                      fontWeight={600}
                      margin={0}
                    >
                      Expense
                    </Typography>
                    <Typography
                      component="p"
                      variant="subtitle1"
                      sx={{ color: (theme) => theme.palette.error.main }}
                      fontWeight={700}
                      margin={0}
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
