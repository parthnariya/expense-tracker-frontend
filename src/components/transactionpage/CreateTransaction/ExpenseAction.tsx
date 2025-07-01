import { Button, Stack } from '@mui/material';

const ExpenseAction = () => {
  return (
    <Stack direction="row" justifyContent="end" spacing={0.5} width="100%">
      <Button size="medium" variant="outlined">
        Cancel
      </Button>
      <Button size="medium" variant="contained">
        Save
      </Button>
    </Stack>
  );
};

export default ExpenseAction;
