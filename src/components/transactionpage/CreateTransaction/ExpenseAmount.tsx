import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { IndianRupee } from 'lucide-react';

const ExpenseAmount = () => {
  return (
    <FormControl fullWidth required size="small">
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
      />
    </FormControl>
  );
};

export default ExpenseAmount;
