import { FormControl } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DatePicker as MuiDatePicker,
  type DatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const DatePicker = (props: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl fullWidth size="small">
        <MuiDatePicker
          slotProps={{
            textField: {
              size: 'small',
            },
          }}
          {...props}
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default DatePicker;
