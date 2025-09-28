import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);


  return (
   <div className="bg-gradient-to-r from-gray-900 via-emerald-900 to-black p-5 rounded-2xl mt-5 shadow-lg">
  {/* Table Header */}
  <div className="bg-emerald-600/80 mb-3 py-2 px-4 flex justify-between rounded-lg text-white font-semibold">
    <h2 className="w-1/5">Employee Name</h2>
    <h3 className="w-1/5">New Task</h3>
    <h3 className="w-1/5">Active Task</h3>
    <h3 className="w-1/5">Completed Task</h3>
    <h3 className="w-1/5">Failed Task</h3>
  </div>

  {/* Table Rows */}
  <div>
    {userData.map((item) => (
      <div
        key={item.id}
        className="border border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded-lg hover:bg-gray-800 transition-all text-white"
      >
        <h2 className="w-1/5">{item.name}</h2>
        <h3 className="w-1/5 text-blue-400">{item.taskCount.newTask}</h3>
        <h3 className="w-1/5 text-yellow-300">{item.taskCount.active}</h3>
        <h3 className="w-1/5 text-green-400">{item.taskCount.completed}</h3>
        <h3 className="w-1/5 text-red-500">{item.taskCount.failed}</h3>
      </div>
    ))}
  </div>
</div>

  );
};

export default AllTask;
