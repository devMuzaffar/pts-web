"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import countries from "../../list/countries";

const InputFieldPhone = () => {
  // Render Option
  const renderOption = (props, option) => {
    const { key, ...optionProps } = props;
    return (
      <Box
        key={key}
        component="li"
        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
        {...optionProps}
      >
        <img
          loading="lazy"
          width="20"
          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
          alt=""
        />
        {option.label} ({option.code}) +{option.phone}
      </Box>
    );
  };

  // Render Input
  const renderInput = (params) => (
    <TextField
      {...params}
      label="Choose a country"
      variant="standard"
      slotProps={{
        htmlInput: {
          ...params.inputProps,
          autoComplete: "new-password", // disable autocomplete and autofill
        },
      }}
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <img
              width="20"
              srcSet={`https://flagcdn.com/w40/${params.inputProps.value.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${params.inputProps.value.toLowerCase()}.png`}
              alt="Country Flag"
            />
          </InputAdornment>
        ),
      }}
    />
  );

  return (
    <Autocomplete
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={renderOption}
      renderInput={renderInput}
    />
  );
};

export default InputFieldPhone;
