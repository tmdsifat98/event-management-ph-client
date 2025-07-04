import React, { useEffect, useState } from "react";
import { IoEye, IoEyeOff, IoLockOpenOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import signUpAnimation from "../../assets/signuplottie.json";
import Lottie from "lottie-react";
import useaxiosLocal from "../../hooks/useaxiosLocal";
import Swal from "sweetalert2";
import { MdMonochromePhotos, MdOutlineEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const axiosLocal = useaxiosLocal();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const validatePassword = (e) => {
    const value = e.target.value;
    let errorMsg = "";
    if (!/[a-z]/.test(value)) {
      errorMsg = "Must have a lowercase letter";
    } else if (!/[A-Z]/.test(value)) {
      errorMsg = "Must have an uppercase letter";
    } else if (value.length < 6) {
      errorMsg = "Length must be at least 6 characters";
    }
    setError(errorMsg);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    axiosLocal
      .post("/register", userData)
      .then((res) => {
        if (res.data.insertedId) {
          const savedUser = {
            name: userData.name,
            email: userData.email,
            photoURL: userData.photoURL,
          };
          localStorage.setItem("authUser", JSON.stringify(savedUser));

          navigate("/");
          setUser(savedUser);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "User register successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.response.data}`,
          icon: "error",
          draggable: true,
        });
      });
  };
  useEffect(() => {
    document.title = "All Event | Login";
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-24 items-center min-h-[calc(100vh-64px)]">
      <div className="z-10 w-11/12 backdrop-blur-sm p-8 rounded shadow-2xl md:max-w-md transition-colors duration-500">
        <h2 className="text-3xl font-bold font-playfair text-center  dark:text-white mb-6">
          Please Sign Up!
        </h2>

        <form className="space-y-2" onSubmit={handleSignUp}>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Name
            </label>
            <div className="w-full flex gap-2 justify-between items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none">
              <FaUserAlt size={13} />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="flex-1 border-0 outline-0"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Photo URL
            </label>
            <div className="w-full flex gap-2 justify-between items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none">
              <MdMonochromePhotos />
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your Photo URL"
                required
                className="flex-1 border-0 outline-0"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <div className="w-full flex gap-2 justify-between items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none">
              <MdOutlineEmail />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 border-0 outline-0"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <div className="w-full flex justify-between items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none">
              <IoLockOpenOutline />
              <input
                onChange={validatePassword}
                name="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
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
          <p className="text-red-600 dark:text-red-600 font-semibold text-sm">
            {error}
          </p>
          <div className="mt-5">
            <button className="w-full btn btn-primary">Sign Up</button>
          </div>
        </form>
        <p className="mt-4 dark:text-gray-200">
          Already have an account? Please{" "}
          <Link className="text-blue-700 hover:underline" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
      <div className="hidden md:block">
        <Lottie animationData={signUpAnimation} />
      </div>
    </div>
  );
};

export default SignUp;
