import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { CATEGORIES } from '@/constants/transaction';

const ExpenseCategory = () => {
  return (
    <FormControl fullWidth required size="small">
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
  );
};

export default ExpenseCategory;
