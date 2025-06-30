import React from "react";

const NoData = ({ label, message }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-80"
        src="https://imgs.search.brave.com/KBJMtE3Fk1g9u2UKGxb2M0jKtuapdw9jPPx4RZFgJk4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbWFuLWhv/bGRpbmctbWFnbmlm/eWluZy1nbGFzcy13/aGlsZS1maW5kLWZv/bGRlci1pbGx1c3Ry/YXRpb24tZG93bmxv/YWQtaW4tc3ZnLXBu/Zy1naWYtZmlsZS1m/b3JtYXRzLS1zZWFy/Y2gtbm8tZGF0YS1m/b3VuZC1idXNpbmVz/cy1wYWNrLWlsbHVz/dHJhdGlvbnMtOTky/OTI5Ny5wbmc_Zj13/ZWJw"
        alt=""
      />
      <h3 className="text-lg text-gray-800 dark:text-gray-200">{message}</h3>
      {label && <button className="btn btn-primary">{label}</button>}
    </div>
  );
};

export default NoData;
