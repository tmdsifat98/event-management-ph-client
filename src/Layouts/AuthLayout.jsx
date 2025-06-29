import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default AuthLayout;
