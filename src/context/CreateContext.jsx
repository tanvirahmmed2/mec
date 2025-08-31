import React, { createContext, useState } from "react";
import Faculty from "../Data/Faculty";
import deptDatas from "../Data/department"

export const CreateContext = createContext(null);








const CreateContextProvider = (props) => {
    const [faculty, setFaculty]= useState(Faculty)
    const [deptdatas, setDeptDatas]= useState(deptDatas)
  

  const contextValue = {
    faculty,
    setFaculty,
    deptdatas,
    setDeptDatas,
  };

  return (
    <CreateContext.Provider value={contextValue}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default CreateContextProvider;