import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-black">
      <div className="border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.5)] rounded-2xl p-12 w-[420px]">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-emerald-400 mb-3">
          Employee Task Management System
        </h1>
        <p className="text-center text-gray-400 mb-8 text-sm">
          Please log in to continue
        </p>

        {/* Login Form */}
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-800/60 border border-emerald-500/40 py-4 px-5 text-lg text-white placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-800/60 border border-emerald-500/40 py-4 px-5 text-lg text-white placeholder:text-gray-400 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:opacity-90 transition-all py-3 rounded-lg text-lg font-bold text-white shadow-lg">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
