"use client";
import { useState } from "react";
import SelectField from "./SelectField";
import textFieldStyle from "@/app/dashboard/styles/textFieldStyle";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
const degreeList = [
  "O Levels",
  "A Levels",
  "Matric",
  "Intermediate",
  "Graduation",
];

const AcademicField = ({ index, setList, list }) => {
  // Degree & Percentage Select State
  const [degree, setDegree] = useState(list[index]?.degree || "");
  const [percentage, setPercentage] = useState(list[index]?.percentage || "");

  // Remove Current Record
  const removeCurrentItem = () =>
    setList((prevList) => prevList.filter((item, i) => i !== index));

  // Handle Degree Change
  const handleDegreeChange = (newDegree) => {
    setDegree(newDegree);
    setList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, degree: newDegree } : item
      )
    );
  };

  // Handle Percentage Change
  const handlePercentageChange = (e) => {
    const newPercentage = e.target.value;
    setPercentage(newPercentage);
    setList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, percentage: newPercentage } : item
      )
    );
  };

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {/* Select */}
      <SelectField
        label={"Degree"}
        value={degree}
        setValue={handleDegreeChange}
        list={degreeList}
      />

      {/* Input Field */}
      <TextField
        fullWidth
        sx={textFieldStyle}
        value={percentage}
        onChange={handlePercentageChange}
        label="CGPA / Grade / Percentage"
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
