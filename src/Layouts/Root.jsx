import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="dark:bg-gray-900">
      <header className="sticky top-0 z-[999]">
        <Navbar />
      </header>
      <Outlet />
      <footer className="bg-gray-500">
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
