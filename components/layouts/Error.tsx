import { AlertCircleIcon, X } from "lucide-react";
import React from "react";

const Error = () => {
  return (
    <div className="p-3 flex items-center justify-between bg-[#fdeded] rounded">
      <div className="flex items-center gap-3">
        <AlertCircleIcon className="text-[#d74242] text-[1.5rem]" />
        <p className="text-[#d74242] text-[1rem]">
          Fail to fetching data. Please try again later.
        </p>
      </div>
      <X
        className="text-[#d74242] text-[1.8rem] 
        p-1 rounded-full hover:bg-[#d7424215] cursor-pointer active:scale-[0.9]"
      />
    </div>
  );
};

export default Error;
