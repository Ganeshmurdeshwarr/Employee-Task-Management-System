import React from "react";

const TaskListNumbers = () => {
  return (
    <div className=" flex justify-between screen mt-10 gap-5">
      <div className="bg-red-600 py-6 px-9- p-2 rounded-xl w-[25%] ">
        <h2 className="text-3xl font-semibold ">0</h2>
        <h3 className="text-xl front-medium">New task</h3>
      </div>
      <div className="bg-blue-600 py-6 px-9- p-2 rounded-xl w-[25%]  ">
        <h2 className="text-3xl font-semibold ">0</h2>
        <h3 className="text-xl front-medium">New task</h3>
      </div>
      <div className="bg-yellow-600 py-6 px-9- p-2 rounded-xl w-[25%]  ">
        <h2 className="text-3xl font-semibold ">0</h2>
        <h3 className="text-xl front-medium">New task</h3>
      </div>
      <div className="bg-green-600 py-6 px-9- p-2 rounded-xl w-[25%]  ">
        <h2 className="text-3xl font-semibold ">0</h2>
        <h3 className="text-xl front-medium">New task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
