"use client";
import { useState } from "react";
import SelectField from "./SelectField";
import textFieldStyle from "@/app/dashboard/styles/textFieldStyle";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { InputAdornment } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
const degreeList = [
  "O Levels",
  "A Levels",
  "Matric",
  "Intermediate",
  "Graduation",
];

const AcademicField = ({ index, id, list, setList }) => {
  const MuiTextField = styled(TextField)(textFieldStyle);
  const [degree, setDegree] = useState("");
  const removeCurrentItem = () =>
    setList(list.filter((item) => item.id !== id));

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {/* Select */}
      <SelectField
        label={"Degree"}
        value={degree}
        setValue={setDegree}
        list={degreeList}
      />

      {/* Input Field */}
      <MuiTextField
        fullWidth
        error={false}
        label="CGPA / Grade / Percentage"
        defaultValue=""
        variant="standard"
        placeholder="3.4 / A / 90%"
        InputProps={{
          endAdornment: index !== 0 && (
            <InputAdornment position="end">
              <IconButton className="!p-3" onClick={removeCurrentItem}>
                <MdDeleteOutline size={24} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default AcademicField;
