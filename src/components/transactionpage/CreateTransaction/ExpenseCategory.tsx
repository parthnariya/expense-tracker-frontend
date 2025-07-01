import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { CATEGORIES } from '@/constants/transaction';

const ExpenseCategory = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="category"
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth required size="small">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            id="category-select"
            label="Category"
            labelId="category-select-label"
            {...field}
          >
            {Object.entries(CATEGORIES).map(([category, { name }]) => (
              <MenuItem key={category} value={category}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      rules={{ required: 'Category is required' }}
    />
  );
};

export default ExpenseCategory;
