import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

const ExpenseTitle = () => {
  return (
    <FormControl fullWidth required size="small">
      <InputLabel htmlFor="title">Title</InputLabel>
      <OutlinedInput id="title" label="Title" />
    </FormControl>
  );
};

export default ExpenseTitle;
