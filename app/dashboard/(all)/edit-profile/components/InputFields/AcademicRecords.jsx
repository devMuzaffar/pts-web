"use state";
import { useState } from "react";
import AcademicField from "./AcademicField";
import { MdAdd } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import { primary } from "@/app/dashboard/config/colors";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "@/app/dashboard/styles/uiStyle";

const AcademicRecords = () => {
  const [recordList, setRecordList] = useState([{
    id: Date.now(),
    degree: "",
    score: "",
  }]);
  const addNewItem = () => setRecordList([...recordList, {id: Date.now(), degree: "", score: ""}]);

  return (
    <div className="flex flex-col gap-2 py-2">
      {/* Title */}
      <div className="font-semibold text-slate-500">Academic Records</div>

      {/* Input Fields */}
      <div className="space-y-4">
        {recordList.map((item, index) => (
          <div key={index}>
            <AcademicField index={index} id={item.id} list={recordList} setList={setRecordList} />
          </div>
        ))}

        {/* Add Button */}
        <div className="flex justify-end items-center">
          <ThemeProvider theme={uiStyle}>
          <IconButton onClick={addNewItem}>
            <MdAdd className="text-primary" size={24}/>
          </IconButton>
          </ThemeProvider>
        </div>

      </div>
    </div>
  );
};

export default AcademicRecords;
