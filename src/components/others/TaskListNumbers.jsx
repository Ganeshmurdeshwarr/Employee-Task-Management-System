import React from "react";

const TaskListNumbers = ({ data }) => {
  if (!data || !data.taskCount) return null; // safety check

  return (
   <div className="flex justify-between mt-10 gap-5 flex-wrap">
  <div className="bg-red-500 hover:bg-red-600 transition-all py-6 px-6 sm:px-8 rounded-lg w-full sm:w-[23%] shadow text-white">
    <h2 className="text-3xl font-bold">{data.taskCount.newTask}</h2>
    <h3 className="text-lg font-medium mt-1">New Task</h3>
  </div>
  <div className="bg-blue-500 hover:bg-blue-600 transition-all py-6 px-6 sm:px-8 rounded-lg w-full sm:w-[23%] shadow text-white">
    <h2 className="text-3xl font-bold">{data.taskCount.completed}</h2>
    <h3 className="text-lg font-medium mt-1">Completed Task</h3>
  </div>
  <div className="bg-yellow-400 hover:bg-yellow-500 transition-all py-6 px-6 sm:px-8 rounded-lg w-full sm:w-[23%] shadow text-white">
    <h2 className="text-3xl font-bold">{data.taskCount.active}</h2>
    <h3 className="text-lg font-medium mt-1">Accepted Task</h3>
  </div>
  <div className="bg-green-500 hover:bg-green-600 transition-all py-6 px-6 sm:px-8 rounded-lg w-full sm:w-[23%] shadow text-white">
    <h2 className="text-3xl font-bold">{data.taskCount.failed}</h2>
    <h3 className="text-lg font-medium mt-1">Failed Task</h3>
  </div>
</div>

  );
};

export default TaskListNumbers;
