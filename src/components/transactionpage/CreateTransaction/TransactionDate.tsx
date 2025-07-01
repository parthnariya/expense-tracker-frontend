import { FormControl } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import DatePicker from '@/components/ui/DatePicker';

const TransactionDate = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="date"
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth required size="small">
          <DatePicker
            label="Date"
            slotProps={{
              textField: {
                required: true,
                size: 'small',
                error: !!fieldState.error,
              },
            }}
            {...field}
            value={field.value}
            onChange={(value) => field.onChange(value?.toISOString())}
          />
        </FormControl>
      )}
      rules={{ required: 'Date is required' }}
    />
  );
};

export default TransactionDate;
