"use client";
import { useState } from "react";
import { TextField, InputAdornment, MenuItem, Select } from "@mui/material";
import countries from "../../list/countries";
import textFieldStyle from "@/app/dashboard/styles/textFieldStyle";
import { formatIncompletePhoneNumber } from "libphonenumber-js";

const InputFieldPhone = ({disabled = false, required = false, label, value, setValue}) => {

  // List of Countries state
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.code === "PK")
  );

  // Phone Number State
  const [phoneNumber, setPhoneNumber] = useState(value || `+${selectedCountry.phone}`);

  // Handle Country Select
  const handleSelectCountry = (event) => {
    const country = countries.find((c) => c.code === event.target.value);
    setSelectedCountry(country);
    setPhoneNumber(`+${country.phone}`);
  };

  // Handle Phone Number
  const handlePhoneNumber = (e) => {
    let text = e.target.value;
    if (/^[0-9+\-\s]*$/.test(text)) {
      const countryCode = `+${selectedCountry.phone}`;
      if (!text.startsWith(countryCode)) {
        text = countryCode;
      }
      const formattedNumber = formatIncompletePhoneNumber(
        text,
        selectedCountry?.code
      );
      setPhoneNumber(formattedNumber);
      if(setValue){
        setValue(phoneNumber);
      }
    }
  };

  return (
    <TextField
      fullWidth
      required={required}
      disabled={disabled}
      variant="standard"
      label={label}
      placeholder="Enter phone number"
      value={phoneNumber}
      sx={textFieldStyle}
      onChange={handlePhoneNumber}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Select
              disabled={disabled}
              value={selectedCountry?.code}
              onChange={handleSelectCountry}
              variant="standard"
              sx={{
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  marginRight: "2px",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    width: "100%", 
                    height: "50%",
                    maxWidth: "300px",
                    borderRadius: '12px'
                  },
                },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
              }}
              renderValue={() => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    className="min-w-5 w-5"
                    src={`https://flagcdn.com/w40/${selectedCountry?.code.toLowerCase()}.png`}
                    alt=""
                  />
                </div>
              )}
            >
              {countries.map((country) => (
                <MenuItem
                  key={country.code}
                  value={country.code}
                  sx={{ minHeight: 30, fontSize: "0.875rem" }}
                >
                  <img
                    width="25"
                    height="14"
                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                    alt=""
                    style={{ marginRight: 8 }}
                  />
                  {country.label} (+{country.phone})
                </MenuItem>
              ))}
            </Select>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputFieldPhone;
