import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext({ employees: [], admin: [] });

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Only set initial localStorage if it doesn't exist
    const existing = localStorage.getItem("employees");
    if (!existing) setLocalStorage();

    const { employees } = getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
