"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  selectFieldStyle,
  selectMenuProps,
} from "@/app/dashboard/styles/selectStyles";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "@/app/dashboard/styles/uiStyle";
import inputLabelStyle from "@/app/dashboard/styles/inputLabelStyle";

const SelectField = ({ label, value, setValue, list }) => {

  const handleChange = (event) => setValue(event.target.value);

  return (
    <ThemeProvider theme={uiStyle}>
      <FormControl variant="standard" fullWidth>
        <InputLabel sx={inputLabelStyle} id="demo-simple-select-standard-label">
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value || ""}
          label={label}
          sx={selectFieldStyle}
          onChange={handleChange}
          {...selectMenuProps}
        >
          {list &&
            list.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default SelectField;
