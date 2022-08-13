//Importing Libraries
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

//Importing Components
import Home from "../pages/Home/Home";

const useAuth = () => {
  const { user } = useContext(AuthContext);
  return user && user.accountType === "admin";
};

const AdminProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Home />;
};

export default AdminProtectedRoutes;