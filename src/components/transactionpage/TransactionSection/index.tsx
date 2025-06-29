import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';

import TransactionTable from './TransactionTable';

import DatePicker from '@/components/ui/DatePicker';
import { CATEGORIES } from '@/constants/transaction';

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

            <Stack
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
            >
              <FormControl fullWidth size="small" sx={{ minWidth: 110 }}>
                <InputLabel id="type-select-label">Age</InputLabel>
                <Select
                  id="type-select"
                  label="Type"
                  labelId="type-select-label"
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="expense">Expense</MenuItem>
                  <MenuItem value="income">Income</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small" sx={{ minWidth: 150 }}>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  id="category-select"
                  label="Type"
                  labelId="category-select-label"
                >
                  {Object.entries(CATEGORIES).map(([category, { name }]) => (
                    <MenuItem value={category}>{name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <DatePicker />
            </Stack>
          </Stack>

          <TransactionTable />
        </Box>
      </Container>
    </Container>
  );
};

export default TransactionSection;
