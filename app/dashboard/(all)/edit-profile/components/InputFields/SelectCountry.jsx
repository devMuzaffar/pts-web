"use client";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  selectFieldStyle,
  selectMenuProps,
} from "@/app/dashboard/styles/selectStyles";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "@/app/dashboard/styles/uiStyle";
import inputLabelStyle from "@/app/dashboard/styles/inputLabelStyle";
import { Country, City } from "country-state-city";
import { useMemo, useState } from "react";
const countryLabel = "Your Country";
const cityLabel = "Your City";

const SelectCountry = ({ country, setCountry, city, setCity }) => {
  // Countries List
  const countries = useMemo(() => Country.getAllCountries(), []);

  // Cities List
  const [cities, setCities] = useState(City.getCitiesOfCountry("PK"));

  const handleChangeCountry = (e) => {
    const selectedCountry = e.target.value;
    const countryCode = countries.find(
      (c) => c.name === selectedCountry
    )?.isoCode;
    if (countryCode) {
      setCities(City.getCitiesOfCountry(countryCode));
      setCountry(e.target.value);
      setCity("");
    }
  };

  const handleChangeCity = (e) => setCity(e.target.value);

  return (
    <div className="space-y-4">
      <ThemeProvider theme={uiStyle}>
        {/* Country */}
        <FormControl variant="standard" fullWidth>
          <InputLabel
            sx={inputLabelStyle}
            id="demo-simple-select-standard-label"
          >
            {countryLabel}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={country ? country : null}
            label={countryLabel}
            sx={selectFieldStyle}
            onChange={handleChangeCountry}
            {...selectMenuProps}
          >
            {countries &&
              countries.map(({ name, isoCode }) => (
                <MenuItem key={isoCode} value={name}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        {/* City */}
        <FormControl variant="standard" fullWidth>
          <InputLabel
            sx={inputLabelStyle}
            id="demo-simple-select-standard-label"
          >
            {cityLabel}
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={city || ""}
            label={cityLabel}
            sx={selectFieldStyle}
            onChange={handleChangeCity}
            {...selectMenuProps}
          >
            {cities &&
              cities.map(({ name }, index) => (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
};

export default SelectCountry;
