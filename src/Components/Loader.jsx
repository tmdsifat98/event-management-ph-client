import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = ({h}) => {
  return (
    <div
      className={`flex items-center justify-center ${
        h ? "h-[calc(100vh-322px)]" : ""
      }`}
    >
      <ScaleLoader color="#646464" margin={3} radius={22} />
    </div>
  );
};

export default Loader;
