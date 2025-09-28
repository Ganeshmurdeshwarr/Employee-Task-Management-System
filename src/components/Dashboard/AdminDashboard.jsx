import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className="w-screen min-h-screen p-10 bg-gradient-to-br from-gray-900 via-emerald-900 to-black">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
