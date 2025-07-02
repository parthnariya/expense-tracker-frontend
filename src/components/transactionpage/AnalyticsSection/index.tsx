import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import CategoryRadarChart from './CategoryRadarChart';
import IncomeExpensePieChart from './IncomeExpensePieChart';
import TrendLineChart from './TrendLineChart';

const AnalyticsSection = () => {
  return (
    <Container
      component="section"
      maxWidth={false}
      sx={{
        py: { xs: 1, lg: 2 },
        px: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }}>
        <Stack
          alignItems="flex-start"
          bgcolor="background.paper"
          border={1}
          borderColor="grey.200"
          p={2}
          spacing={2}
        >
          <Stack
            borderBottom={1}
            borderColor="grey.200"
            direction="row"
            justifyContent="flex-start"
            width="100%"
          >
            <Typography
              color="textPrimary"
              component="h2"
              fontWeight={600}
              variant="h6"
            >
              Analytics DashBoard
            </Typography>
          </Stack>
          <Box flexGrow={1} width="100%">
            <Grid container spacing={2}>
              <Grid
                border={1}
                borderColor="divider"
                borderRadius={1}
                size={12}
                width="100%"
              >
                <TrendLineChart />
              </Grid>
              <Grid
                border={1}
                borderColor="divider"
                borderRadius={1}
                size={{ xs: 12, md: 6 }}
                width="100%"
              >
                <IncomeExpensePieChart />
              </Grid>
              <Grid
                border={1}
                borderColor="divider"
                borderRadius={1}
                size={{ xs: 12, md: 6 }}
                width="100%"
              >
                <CategoryRadarChart />
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
};

export default AnalyticsSection;
