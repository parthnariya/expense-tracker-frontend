import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { IndianRupee } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

const ExpenseAmount = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="amount"
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth required size="small">
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <IndianRupee size={18} />
                </IconButton>
              </InputAdornment>
            }
            id="amount"
            label="Amount"
            type="number"
            {...field}
          />
        </FormControl>
      )}
      rules={{
        required: 'Amount is required',
        min: { value: 0.01, message: 'Amount must be positive' },
      }}
    />
  );
};

export default ExpenseAmount;
