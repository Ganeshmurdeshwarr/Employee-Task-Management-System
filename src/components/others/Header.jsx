import React, { useState } from "react";

const Header = ({data, changeUser}) => {

  function handleUserLogout(){
    localStorage.setItem("loggedInUser","")
changeUser('')
  }

const userName = data?.name ?? "Anita Deshmukh";

  return (
<div className="flex items-end justify-between bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 p-6 rounded-xl shadow-lg">
  <h1 className="text-2xl font-semibold text-white">
    Hello <br /> 
    <span className="text-3xl font-bold text-white/90">{userName}</span>
  </h1>
  <button 
    onClick={handleUserLogout} 
    className="bg-red-500 hover:bg-red-600 transition-colors px-8 sm:py-2  h-14 rounded-lg text-lg font-semibold text-white shadow-md "
  >
    Log Out
  </button>
</div>




  );
};

export default Header;
