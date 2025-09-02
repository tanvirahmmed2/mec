import React, { createContext, useState } from "react";
import facultyData from "../Data/facultyData";
import deptDatas from "../Data/department"
import staffData from "../Data/staff";
import officersData from "../Data/officers";
import hostel_library from "../Data/hostel_library";
import { club_lab } from "../Data/club_lab";

export const CreateContext = createContext(null);








const CreateContextProvider = (props) => {
    const [faculty, setFaculty]= useState(facultyData)
    const [deptdatas, setDeptDatas]= useState(deptDatas)
    const [staff,setStaff] =useState(staffData)
    const [officer,setofficer] =useState(officersData)
    const [hoset_lib,setHostel_Lib] =useState(hostel_library)
    const [Club_Lab,setClub_lab] =useState(club_lab)
  

  const contextValue = {
    faculty,
    setFaculty,
    deptdatas,
    setDeptDatas,
    staff,setStaff,
    officer,setofficer,
    hoset_lib,setHostel_Lib,
    Club_Lab,setClub_lab,
  };

  return (
    <CreateContext.Provider value={contextValue}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default CreateContextProvider;