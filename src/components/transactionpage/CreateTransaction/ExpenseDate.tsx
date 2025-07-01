import { FormControl } from '@mui/material';

import DatePicker from '@/components/ui/DatePicker';

const ExpenseDate = () => {
  return (
    <FormControl fullWidth required size="small">
      <DatePicker
        label="Date"
        slotProps={{ textField: { required: true, size: 'small' } }}
      />
    </FormControl>
  );
};

export default ExpenseDate;
