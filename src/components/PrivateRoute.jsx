// import { Navigate, Outlet } from "react-router";
// import { useAuth } from "../context/AuthContext";

// const PrivateRoute = () => {
//   const { isAuthenticated } = useAuth();
//   // console.log(isAuthenticated);
  

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;


import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setCheckingAuth(false);
    } else {
      setCheckingAuth(false);
    }
  }, [isAuthenticated]);

  if (checkingAuth) {
    return <div>Loading...</div>; // Replace with a proper loader if needed
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

