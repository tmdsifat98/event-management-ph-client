import React from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import Theme from "./Theme";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const { user, setUser } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li>
        <NavLink to="/addEvents">Add Event</NavLink>
      </li>
      <li>
        <NavLink to="/myEvent">My Event</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    localStorage.removeItem("authUser");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logged out successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="bg-black/30 dark:bg-white/10 backdrop-blur-sm ">
      <div className="navbar w-11/12 p-0 mx-auto text-white">
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
                className="menu menu-sm dropdown-content bg-white w-44 mt-2 p-2 shadow rounded"
              >
                <p className="text-center my-3 text-black">{user.name}</p>
                <button
                  onClick={() => {
                    handleLogOut();
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
              <button className="btn btn-primary border-none lg:px-6 ">
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
