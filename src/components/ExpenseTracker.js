import React from "react";
import Budget from "../Images/Budget Tracker.jpg";

const ExpenseTracker = () => {
  return (
    <div id="expense">
      <div className="w-full items-center px-12 flex flex-col-reverse md:flex-row justify-between bg-[#403C3C]">
        <div className="left text-center text-white mt-8">
          <p className="text-3xl font-bold md:px-12">
            Never forget your planned tasks
          </p>
          <p className="mt-4 text-xl">Checkout Tasks App Now!</p>
          <div className="space-x-4">
            <a
              href="https://budget-tracker-app-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="mt-16 bg-[#0C24FD] p-3 rounded-full font-semibold hover:bg-blue-700">
                Visit App
              </button>
            </a>
            <a
              href="https://github.com/Devrajsinh-Jhala/Budget-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <button className="mt-4 mb-8 bg-[#0C24FD] p-3 rounded-full font-semibold hover:bg-blue-700">
                Check Github for Code
              </button>
            </a>
          </div>
        </div>
        <div className="right align-middle items-center text-center justify-center">
          <img
            src={Budget}
            className="relative h-fit mb-8  md:h-80 w-fit align-middle items-center text-center justify-center mt-8 md:px-12"
            alt="Notes App Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
