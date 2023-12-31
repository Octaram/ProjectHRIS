import React from "react";
import { Icon } from "@iconify/react";

const Result = ({ datas, checkInPopUp }) => {

  const handleClose = () => {
    checkInPopUp(false);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-20 bg-black/60">
      <div className="fixed flex flex-col p-3 justify-between top-1/2 transform -translate-y-1/2 bg-white px-8 w-[650px] h-[90%] rounded-lg">
        <div className="absolute right-0 top-0 -mr-2 -mt-2">
          <button
            onClick={handleClose}
            className="bg-black w-10 h-10 rounded-full flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:bg-gray-900 hover:shadow-lg"
          >
            <Icon icon="ion:close" color="white" width="17.44" />
          </button>
        </div>
        <div className="text-center">
          <h1 className="text-[#2F2F2F] font-semibold text-xl">Success Attendance</h1>
          <h1 className="text-[#ACACAC] font-normal text-xs">Select Your Check - In Type</h1>
        </div>
        <div className="flex items-center justify-center w-full h-2/3">
          {datas && (
            <img
              src={URL.createObjectURL(datas.filePhoto)}
              alt="Screenshot"
              className="rounded-lg w-[85%] object-cover"
            />
          )}
        </div>
        <div className="flex justify-between">
          <div className="text-primary">
            <h1>Time Attendance:</h1>
            <h1 className="font-semibold">{datas.times}</h1>
          </div>
          <div className="text-primary">
            <h1>Date:</h1>
            <span className="font-semibold">{datas.date}</span>
          </div>
          <div className="text-primary">
            <h1>Type:</h1>
            <h1 className="font-semibold">{datas.status}</h1>
          </div>
        </div>
        <div className="">
          <button
            onClick={handleClose}
            className="bg-purple hover:bg-purple-dark transition-colors duration-200 w-full h-10 text-white font-semibold rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
