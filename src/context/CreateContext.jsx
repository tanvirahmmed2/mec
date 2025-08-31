import React, { createContext, useState } from "react";
import Teachers from "../Data/Teachers";
import deptDatas from "../Data/department"

export const CreateContext = createContext(null);








const CreateContextProvider = (props) => {
    const [teachers, setTeachers]= useState(Teachers)
    const [deptdatas, setDeptDatas]= useState(deptDatas)
  

  const contextValue = {
    teachers,
    setTeachers,
    deptdatas,
  };

  return (
    <CreateContext.Provider value={contextValue}>
      {props.children}
    </CreateContext.Provider>
  );
};

export default CreateContextProvider;