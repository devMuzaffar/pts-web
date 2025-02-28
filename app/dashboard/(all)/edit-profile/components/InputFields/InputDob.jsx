import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import textFieldStyle from "@/app/dashboard/styles/textFieldStyle";
import { ThemeProvider } from '@mui/material/styles';
import datePickerTheme from "@/app/dashboard/styles/datePickerTheme";

const InputDob = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    const formattedDate = newValue.format('DD-MM-YYYY');
    console.log(formattedDate);
  };

  return (
    <ThemeProvider theme={datePickerTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        openTo="year"
        label="Date of Birth"
        views={["day", "month", "year"]}
        format="DD-MM-YYYY"
        slotProps={{ textField: { variant: "standard", fullWidth: true, sx: textFieldStyle } }}
      />
    </LocalizationProvider>
    </ThemeProvider>
  );
};

export default InputDob;
