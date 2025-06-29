import React from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import Theme from "./Theme";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li>
        <NavLink to="/addEvent">Add Event</NavLink>
      </li>
      <li>
        <NavLink to="/myEvent">My Event</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-black/30 backdrop-blur-2xl dark:bg-white/30">
      <div className="navbar  w-11/12 p-0 mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown cursor-pointer">
            <div tabIndex={0} className="lg:hidden mr-3">
              <IoMenu size={18} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-36 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center gap-1">
              <img className="w-10 lg:w-11" src={logo} alt="Logo" />
              <p className="lg:flex hidden text-2xl font-bold text-white">
                All Events
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
            <Theme/>
          <Link to="/auth/login">
            <button className="btn-primary px-3 lg:px-6 btn">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
