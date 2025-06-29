import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import loginAnimation from "../../assets/loginLotie.json";
import Lottie from "lottie-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const axiosSecure = useAxiosSecure();
  const { setUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    axiosSecure
      .post("/login", user)
      .then((res) => {
        if (res.data.message === "Login successful.") {
          localStorage.setItem("authUser", JSON.stringify(res.data.user));
          setUser(res.data.user);
          navigate(location?.state || "/");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        if (err.response.data === "Invalid credentials") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Please input a valid email",
          });
        } else if (err.response.data === "Invalid password") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Invalid password",
          });
        }
      });
  };
  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-20 items-center min-h-[calc(100vh-64px)]">
      <div className="z-10 w-11/12 backdrop-blur-sm p-8 rounded shadow-2xl md:max-w-md transition-colors duration-500">
        <h2 className="text-3xl font-bold font-playfair text-center  dark:text-white mb-6">
          Please Log in!
        </h2>

        <form className="space-y-2" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none "
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <div className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none">
              <input
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="flex-1 border-0 outline-0"
                required
              />
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoEyeOff size={19} /> : <IoEye size={19} />}
              </button>
            </div>
          </div>
          <div className="mt-5">
            <button className="w-full btn btn-primary">Sign Up</button>
          </div>
        </form>
        <p className="mt-4 dark:text-gray-200">
          Don't have any account? Please{" "}
          <Link className="text-blue-700 hover:underline" to="/auth/signup">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="hidden md:block">
        <Lottie animationData={loginAnimation} />
      </div>
    </div>
  );
};

export default Login;
