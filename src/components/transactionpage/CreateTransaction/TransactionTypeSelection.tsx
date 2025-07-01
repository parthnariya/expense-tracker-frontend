import { Button, Stack } from '@mui/material';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

const TransactionTypeSelection = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="type"
      render={({ field }) => (
        <Stack direction="row" spacing={0.5} width="100%">
          <Button
            color={field.value === 'income' ? 'success' : 'inherit'}
            sx={{ display: 'flex', flex: 1, gap: 1 }}
            variant={field.value === 'income' ? 'contained' : 'outlined'}
            onClick={() => field.onChange('income')}
          >
            <TrendingUp size={18} />
            Income
          </Button>
          <Button
            color={field.value === 'expense' ? 'error' : 'inherit'}
            sx={{ display: 'flex', flex: 1, gap: 1 }}
            variant={field.value === 'expense' ? 'contained' : 'outlined'}
            onClick={() => field.onChange('expense')}
          >
            <TrendingDown size={18} />
            Expense
          </Button>
        </Stack>
      )}
    />
  );
};

export default TransactionTypeSelection;
