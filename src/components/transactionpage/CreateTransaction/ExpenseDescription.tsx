import { FormControl, InputLabel, TextareaAutosize } from '@mui/material';

const ExpenseDescription = () => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel htmlFor="description">Description</InputLabel>
      <TextareaAutosize color="primary" id="description" minRows={3} />
    </FormControl>
  );
};

export default ExpenseDescription;
