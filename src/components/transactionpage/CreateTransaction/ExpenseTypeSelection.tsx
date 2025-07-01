import { Button, Stack } from '@mui/material';
import { TrendingDown, TrendingUp } from 'lucide-react';

const ExpenseTypeSelection = () => {
  return (
    <Stack direction="row" spacing={0.5} width="100%">
      <Button
        color="success"
        sx={{ display: 'flex', flex: 1, gap: 1 }}
        variant="contained"
      >
        <TrendingUp size={18} />
        Income
      </Button>
      <Button
        color="error"
        sx={{ display: 'flex', flex: 1, gap: 1 }}
        variant="outlined"
      >
        <TrendingDown size={18} />
        Expense
      </Button>
    </Stack>
  );
};

export default ExpenseTypeSelection;
