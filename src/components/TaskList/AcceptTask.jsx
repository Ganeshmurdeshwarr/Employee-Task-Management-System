import React from "react";

const AcceptTask = ({data}) => {

    const {date, title, description, category}=data

  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl px-2 py-5 ">
      <div className="flex justify-between  items-center ">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded ">{category}</h3>
        <h3 className="text-sm">{date}</h3>
      </div>
      <div>
        <h2 className="mt-5 text-2xl font-semibold ">{title}</h2>
        <p className="text-sm  mt-2">
         {description}
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm ">Mark as Completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm ">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
