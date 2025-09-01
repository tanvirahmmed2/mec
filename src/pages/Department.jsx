import { useParams } from "react-router-dom";
import deptDatas from "../Data/department";
import DeptFaculty from "./DeptFaculty";

const Department = () => {
  const { title } = useParams();
  const department = deptDatas.find((dept) => dept.title === title);

  if (!department) return <p className="text-center text-red-500 mt-10">Department not found.</p>;

  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 p-6 bg-gray-50">

      {department.banner && (
        <img
          src={department.banner}
          alt={`${department.name} banner`}
          className="w-full lg:w-4/5 rounded-lg shadow-lg"
        />
      )}

      <h1 className="text-4xl font-bold text-center text-gray-800 mt-4">{department.name}</h1>

      <p className="max-w-4xl text-gray-700 text-justify mt-4">{department.long_details}</p>

      <DeptFaculty title={department.title} />

      {department.lab_details && (
        <p className="max-w-4xl text-gray-700 text-justify mt-4">{department.lab_details}</p>
      )}

      <div className="w-full flex flex-col lg:flex-row gap-8 mt-6">

        {department.clubs && (
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-center mb-4">Clubs</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {department.clubs.map((club, index) => (
                <li key={index}>{club}</li>
              ))}
            </ul>
          </div>
        )}

        {department.lab_facilities && (
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-center mb-4">Lab Facilities</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {department.lab_facilities.map((lab, index) => (
                <li key={index}>{lab}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  );
};

export default Department;
