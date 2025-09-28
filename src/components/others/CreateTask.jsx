import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [asignto, setAsignto] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmitBtn(e) {
    e.preventDefault();

    const newTask = {
      title: taskTitle,
      date,
      category,
      asignto,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Update employee tasks immutably
    const updatedData = userData.map(emp => {
      if (emp.name === asignto) {
        const updatedTasks = [...emp.tasks, newTask];
        const updatedTaskCount = { ...emp.taskCount, newTask: emp.taskCount.newTask + 1 };
        return { ...emp, tasks: updatedTasks, taskCount: updatedTaskCount };
      }
      return emp;
    });

    setUserData(updatedData);
    // Sync with localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));

    setTaskTitle("");
    setDate("");
    setCategory("");
    setAsignto("");
    setDescription("");
  }

  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 via-emerald-900 to-black rounded-2xl shadow-lg mt-5">
      <form onSubmit={handleSubmitBtn} className="flex flex-wrap gap-6 w-full">
        <div className="w-1/2 flex flex-col gap-4">
          <div>
            <h3 className="text-sm text-emerald-400 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-4/5 py-2 px-3 rounded-lg outline-none bg-gray-800 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-400"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <h3 className="text-sm text-emerald-400 mb-1">Date</h3>
            <input
            type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-4/5 py-2 px-3 rounded-lg outline-none bg-gray-800 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-400"
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div>
            <h3 className="text-sm text-emerald-400 mb-1">Assign to</h3>
            <input
              value={asignto}
              onChange={(e) => setAsignto(e.target.value)}
              className="w-4/5 py-2 px-3 rounded-lg outline-none bg-gray-800 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-400"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-emerald-400 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-4/5 py-2 px-3 rounded-lg outline-none bg-gray-800 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-400"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col gap-4">
          <h3 className="text-sm text-emerald-400 mb-1">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 py-2 px-3 rounded-lg outline-none bg-gray-800 text-white border border-emerald-500 focus:ring-2 focus:ring-emerald-400"
            placeholder="Task description..."
          />
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg w-full mt-2 font-semibold transition-all">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
