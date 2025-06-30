import { Box, Container, Pagination, Stack, Typography } from '@mui/material';

import TransactionFilters from './TransactionFilters';
import TransactionTable from './TransactionTable';

const TransactionSection = () => {
  return (
    <Container
      component="section"
      maxWidth={false}
      sx={{
        py: {
          xs: 1,
          lg: 2,
        },
        px: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 }, mx: 'auto' }}>
        <Box boxShadow={1}>
          <Stack
            alignItems={{ xs: 'flex-start', lg: 'center' }}
            bgcolor="background.paper"
            border={1}
            borderBottom={0}
            borderColor="grey.200"
            direction={{ xs: 'column', lg: 'row' }}
            justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
            p={2}
            spacing={2}
          >
            <Box>
              <Typography
                color="textPrimary"
                component="h2"
                fontWeight={600}
                variant="h6"
              >
                Transactions
              </Typography>

              <Typography
                color="textSecondary"
                component="p"
                variant="subtitle2"
              >
                30 transactions found
              </Typography>
            </Box>

            <TransactionFilters />
          </Stack>

          <TransactionTable />
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="center"
            mt={1}
            p={2}
          >
            <Pagination
              color="primary"
              count={12}
              shape="rounded"
              showFirstButton
              showLastButton
              size="medium"
            />
          </Stack>
        </Box>
      </Container>
    </Container>
  );
};

export default TransactionSection;
