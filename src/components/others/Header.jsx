import React, { useState } from "react";

const Header = ({data, changeUser}) => {

  function handleUserLogout(){
    localStorage.setItem("loggedInUser","")
changeUser('')
  }

  return (
    <div className="flex item-end justify-between">
      <h1 className="text-2xl font-semibold ">
        Hello <br /> <span className="text-3xl font-semibold">UserName </span>
      </h1>
      <button onClick={handleUserLogout} className="bg-red-500 text-white px-9 py-1 h-14 rounded-sm text-lg font-medium ">
        Log Out
      </button>
    </div>
  );
};

export default Header;
