import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';

import DatePicker from '@/components/ui/DatePicker';
import { CATEGORIES } from '@/constants/transaction';

const TransactionFilters = () => {
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={1.5}>
      <Stack
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
      >
        <FormControl fullWidth size="small" sx={{ minWidth: 110 }}>
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select id="type-select" label="Type" labelId="type-select-label">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            id="category-select"
            label="Category"
            labelId="category-select-label"
          >
            {Object.entries(CATEGORIES).map(([category, { name }]) => (
              <MenuItem key={category} value={category}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Stack
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
      >
        <FormControl fullWidth size="small">
          <DatePicker label="From" />
        </FormControl>
        <FormControl fullWidth size="small">
          <DatePicker label="To" />
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default TransactionFilters;
