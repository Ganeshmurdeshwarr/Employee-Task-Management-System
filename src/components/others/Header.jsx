import React from "react";

const Header = () => {
  return (
    <div className="flex item-end justify-between">
      <h1 className="text-2xl font-semibold ">
        Hello <br /> <span className="text-3xl font-semibold">Sarthak </span>
      </h1>
      <button className="bg-red-500 text-white px-9 py-1 h-14 rounded-sm text-lg font-medium ">
        Log Out
      </button>
    </div>
  );
};

export default Header;
