import { createContext, useContext, useState, useEffect } from "react";
import { loginAction } from "../api/auth";
import Cookies from 'js-cookie'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      const token = Cookies.get("token");  
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Failed to get authentication token", err);
    }
  }, []);

  const login = async (data) => {
    return loginAction(data)
    .then(response => {
      // console.log(response);
      const token = response.data.token;
      Cookies.set("token", token, { secure: true, sameSite: "Strict" });
      setIsAuthenticated(true);
    })
    .catch(error => {
      // console.log(error);
      // console.log(error.response.data.message);
    })
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
