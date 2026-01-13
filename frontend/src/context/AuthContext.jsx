import { createContext, useContext, useState } from "react";
import contactApi from "../utils/ContactApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // LOGIN
  const login = async (email,password) => {
    const res = await contactApi.post("/auth/login",{ email,password });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    setUser(res.data.user);
  };

  // SIGNUP
  const signup = async (name,email,password) => {
    await contactApi.post("/auth/register",{ name,email,password });
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=> useContext(AuthContext);
