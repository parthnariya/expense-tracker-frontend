import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Paper,
} from '@mui/material';
import dayjs from 'dayjs';

import type { TransactionFilters as FiltersType } from '@/services/apiService/transactionsApi';

import DatePicker from '@/components/ui/DatePicker';
import { CATEGORIES } from '@/constants/transaction';

interface TransactionFiltersProps {
  filters: FiltersType;
  onChange: (changed: Partial<FiltersType>) => void;
}

const TransactionFilters = ({ filters, onChange }: TransactionFiltersProps) => {
  return (
    <Paper elevation={0} sx={{ p: 2, mb: 2, width: '100%' }}>
      <Stack
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="flex-start"
        spacing={2}
        width="100%"
      >
        <FormControl
          fullWidth
          size="small"
          sx={{ minWidth: { xs: '100%', md: 120 }, flex: 1 }}
        >
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
            id="type-select"
            label="Type"
            labelId="type-select-label"
            value={filters.type || 'all'}
            onChange={(e) =>
              onChange({
                type: e.target.value === 'all' ? undefined : e.target.value,
              })
            }
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          size="small"
          sx={{ minWidth: { xs: '100%', md: 150 }, flex: 2 }}
        >
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            id="category-select"
            label="Category"
            labelId="category-select-label"
            value={filters.category || 'all'}
            onChange={(e) =>
              onChange({
                category: e.target.value === 'all' ? undefined : e.target.value,
              })
            }
          >
            <MenuItem value="all">All</MenuItem>
            {Object.entries(CATEGORIES).map(([category, { name }]) => (
              <MenuItem key={category} value={category}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          size="small"
          sx={{ minWidth: { xs: '100%', md: 140 }, flex: 1 }}
        >
          <DatePicker
            label="From"
            value={dayjs(filters.startDate) || null}
            onChange={(date) =>
              date && onChange({ startDate: date.toISOString() })
            }
          />
        </FormControl>
        <FormControl
          fullWidth
          size="small"
          sx={{ minWidth: { xs: '100%', md: 140 }, flex: 1 }}
        >
          <DatePicker
            label="To"
            value={dayjs(filters.endDate) || null}
            onChange={(date) =>
              date && onChange({ endDate: date.toISOString() })
            }
          />
        </FormControl>
      </Stack>
    </Paper>
  );
};

export default TransactionFilters;
