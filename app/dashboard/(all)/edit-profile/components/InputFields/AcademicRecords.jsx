"use client";
import { useEffect, useState } from "react";
import AcademicField from "./AcademicField";
import { MdAdd } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "@/app/dashboard/styles/uiStyle";

// Initial State 
const initialRecord = {
    degree: "",
    percentage: "",
}

const AcademicRecords = ({ degrees, setDegrees }) => {

  // Record List State
  const [recordList, setRecordList] = useState(
    degrees || [initialRecord]
  );

  // Update Parent's State List upon Changes in Record List
  useEffect(() => {
    // Loop - Remove id field - Remove Empty Degree & Percentage
    if (setDegrees) {
      setDegrees(
        recordList
          .map((item) => ({ degree: item.degree, percentage: item.percentage }))
          .filter((item) => item.degree && item.percentage)
      );
    }
  }, [recordList]);

  // Add New Item
  const addNewItem = () =>
    setRecordList([
      ...recordList,
      initialRecord,
    ]);

  return (
    <div className="flex flex-col gap-2 py-2">
      {/* Title */}
      <div className="font-semibold text-slate-500">Academic Records</div>

      {/* Input Fields Block List */}
      <div className="space-y-4">
        {recordList.map((_, index) => (
          <div key={index+1}>
            <AcademicField
              index={index}
              list={recordList}
              setList={setRecordList}
            />
          </div>
        ))}

        {/* Add New Record Button */}
        <div className="flex justify-end items-center">
          <ThemeProvider theme={uiStyle}>
            <IconButton onClick={addNewItem}>
              <MdAdd className="text-primary" size={24} />
            </IconButton>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default AcademicRecords;
