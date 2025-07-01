import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const TransactionDescription = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="description"
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth size="small">
          <InputLabel htmlFor="description">Description</InputLabel>
          <OutlinedInput
            id="description"
            label="Description"
            minRows={3}
            multiline
            {...field}
          />
        </FormControl>
      )}
    />
  );
};

export default TransactionDescription;
