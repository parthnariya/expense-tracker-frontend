import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const ExpenseTitle = () => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="title"
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth required size="small">
          <InputLabel htmlFor="title">Title</InputLabel>
          <OutlinedInput id="title" label="Title" {...field} />
        </FormControl>
      )}
      rules={{ required: 'Title is required' }}
    />
  );
};

export default ExpenseTitle;
