import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import Theme from "./Theme";
import AuthContext from "../Providers/AuthContext";
const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
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
          <Theme />
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full z-50">
                  <img
                    className="tooltip tooltip-bottom"
                    data-tip={user?.displayName}
                    alt={user?.name}
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-500 w-44 mt-2 p-2 shadow"
              >
                <button
                  onClick={() => {
                    localStorage.removeItem("authUser");
                    setUser(null);
                  }}
                  className="btn border-none btn-primary"
                >
                  Log Out
                </button>
              </ul>
            </div>
          ) : (
            <Link to="/auth/login">
              <button className="btn bg-[#44cf44] border-none lg:px-6 ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
