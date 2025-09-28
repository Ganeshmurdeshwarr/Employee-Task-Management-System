import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
  <div
  id="tasklist"
  className="flex justify-start overflow-x-auto px-2 items-center flex-nowrap gap-5 h-[55%] w-full mt-10 py-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
>
  {data.tasks.map((item, idx) => {
    if (item.newTask) return <NewTask key={idx} data={item} className="bg-red-500 text-white rounded-lg shadow-md px-4 py-3" />;
    if (item.completed) return <CompleteTask key={idx} data={item} className="bg-blue-500 text-white rounded-lg shadow-md px-4 py-3" />;
    if (item.active) return <AcceptTask key={idx} data={item} className="bg-yellow-400 text-white rounded-lg shadow-md px-4 py-3" />;
    if (item.failed) return <FailedTask key={idx} data={item} className="bg-green-500 text-white rounded-lg shadow-md px-4 py-3" />;
  })}
</div>



  );
};

export default TaskList;


