import React, { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("glow_user"));
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("glow_user", JSON.stringify(user));
      api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    } else {
      localStorage.removeItem("glow_user");
      delete api.defaults.headers.common["Authorization"];
    }
  }, [user]);

  const login = async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    const payload = {
      token: res.data.token,
      info: res.data.user, // ✅ matches backend
    };
    setUser(payload);
    return payload;
  };

  const register = async (name, email, password) => {
    await api.post("/auth/register", { name, email, password });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("glow_user");
    delete api.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
