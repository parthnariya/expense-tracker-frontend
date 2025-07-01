import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

const ExpenseDescription = () => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="description">Description</InputLabel>
      <OutlinedInput
        id="description"
        label="Description"
        minRows={3}
        multiline
      />
    </FormControl>
  );
};

export default ExpenseDescription;
