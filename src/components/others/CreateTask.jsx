import React, { useContext, useState } from "react";
import NewTask from "../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [asignto, setAsignto] = useState("");
  const [description, setDescription] = useState("");

  const [newTask, setNewTask] = useState({});
  console.log(userData);

  function handleSubmitBtn(e) {
    e.preventDefault();
    setNewTask({
      taskTitle,
      date,
      category,
      asignto,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });


    const data = userData;
    data.forEach((elem) => {
      if (asignto == elem.name) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
      }
    });

setUserData(data)

    setTaskTitle("");
    setDate("");
    setCategory("");
    setAsignto("");
    setDescription("");
  }

  return (
    <div className=" p-5 bg-[#1c1c1c] mt-5 rounded ">
      <form
        onSubmit={(e) => {
          handleSubmitBtn(e);
        }}
        className="flex flex-wrap w-full items-start justify-between "
      >
        <div className="w-1/2">
          <div>
            <h3
              onChange={(e) => setTask(e)}
              className="text-sm text-gray-300 mb-0.5"
            >
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              value={asignto}
              onChange={(e) => setAsignto(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div></div>
          <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="design, dev, etc"
          />
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
