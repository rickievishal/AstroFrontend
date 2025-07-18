import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerComp = ({ onDateChange }) => {
  const defaultDate = dayjs().add(3, 'day'); // Default to 3 days in future
  const [selectedDate, setSelectedDate] = React.useState(defaultDate);

  const disabledDates = ['2025-07-20', '2025-07-22', '2025-08-01'];

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    onDateChange?.(newValue);
  };

  const shouldDisableDate = (date) => {
    const isSunday = date.day() === 0;
    const isCustomDisabled = disabledDates.includes(date.format('YYYY-MM-DD'));
    return isSunday || isCustomDisabled;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select a date"

        value={selectedDate}
        onChange={handleDateChange}
        minDate={defaultDate} 
        shouldDisableDate={shouldDisableDate}
        slotProps={{
          textField: {
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComp;
