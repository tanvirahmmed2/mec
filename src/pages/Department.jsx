import { useParams } from "react-router-dom";
import deptDatas from "../Data/department";
import DeptFaculty from "./DeptFaculty";

const Department = () => {
  const { title } = useParams();
  const department = deptDatas.find((dept) => dept.title === title);

  if (!department) return null; 

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center gap-6">
      <img src={department.banner} alt={`${department.name} banner`} />
      <h1 className="text-3xl font-semibold text-center">{department.name}</h1>
      <p>{department.long_details}</p>

      <DeptFaculty title={department.title} />

      <p>{department.lab_details}</p>
      <div className="w-full flex flex-col items-start justify-center gap-6 lg:flex-row">
        
        <div className="w-full flex flex-col items-start lg:items-end justify-start gap-2 p-4">
          <h1 className="text-3xl font-semibold text-center">Clubs</h1>
          {department.clubs.map((club, index) => (
            <p key={index}>{club}</p>
          ))}
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-2 p-4">
          <h1 className="text-3xl font-semibold text-center">Lab facilities</h1>
          {department.lab_facilities.map((lab, index) => (
            <p key={index}>{lab}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Department;
