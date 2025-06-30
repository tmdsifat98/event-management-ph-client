import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Lodgify | Error";
  }, []);
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <img
        className="h-96"
        src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?ga=GA1.1.1403165203.1749024381&semt=ais_items_boosted&w=740"
        alt=""
      />
      <Link to="/">
        <button className="flex items-center gap-2 btn btn-primary mt-4">
          <FaArrowLeft />
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
