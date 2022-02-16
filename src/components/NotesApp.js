import React from "react";
import Notes from "../Images/NoteTaking.jpg";

const NotesApp = () => {
  return (
    <div>
      <div className="w-full items-center px-12 flex flex-col-reverse md:flex-row justify-between">
        <div className="left text-center mt-8">
          <p className="text-3xl font-bold md:px-12">
            Ink it at right time on right place
          </p>
          <p className="mt-4 text-xl">Checkout Noteify Now!</p>
          <div className="space-x-4">
            <button className="mt-16 bg-[#0C24FD] text-white p-3 rounded-full font-semibold hover:bg-blue-700">
              Visit App
            </button>
            <button className="mt-4 mb-8 bg-[#0C24FD] text-white p-3 rounded-full font-semibold hover:bg-blue-700">
              Check Github for Code
            </button>
          </div>
        </div>
        <div className="right align-middle items-center text-center justify-center">
          <img
            src={Notes}
            className="relative h-fit mb-8  md:h-80 w-fit align-middle items-center text-center justify-center mt-8 md:px-12"
            alt="Notes App Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
