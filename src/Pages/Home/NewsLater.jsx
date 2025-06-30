import React, { useState } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import Swal from "sweetalert2";

const NewsLater = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email address!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "You have successfully subscribed to our newsletter.",
    });

    setEmail("");
  };

  return (
    <div className="bg-gray-400 dark:bg-gray-800 w-11/12 md:w-3/4 lg:w-2/5 mx-auto rounded-lg my-10 text-black dark:text-gray-200 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-2 font-playfair mt-7">
        Subscribe to our Newsletter
      </h2>
      <p className="mb-4">Stay updated with the latest events and news!</p>
      <form onSubmit={handleSubscribe} className="w-full max-w-md mb-6 px-2 md:px-0">
        <div className="bg-white rounded items-center px-0 w-full flex gap-2 justify-between pl-2 text-black">
          <MdOutlineEmail size={23} />
          <input
            type="email"
            placeholder="Enter your email"
            className=" text-black w-full py-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary border-none flex items-center justify-center px-1 md:px-4"
          >
            Subscribe <BiLogoTelegram />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLater;
