import React from "react";
import Prodsystem from "../Images/Prodsystem.png";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3 px-10 bg-[#403C3C] ">
      <img
        src={Prodsystem}
        alt="Logo"
        className="h-10 w-20 cursor-pointer md:hidden"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" text-white h-6 w-6 cursor-pointer md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div className="pr-8 md:block hidden text-white md:mx-auto">
        <Link
          smooth={true}
          offset={-70}
          duration={500}
          to={"/"}
          className="p-4"
        >
          Home
        </Link>
        <Link
          smooth={true}
          offset={-70}
          duration={500}
          to={"task"}
          className="p-4"
        >
          Task-It
        </Link>
        <Link
          smooth={true}
          offset={-70}
          duration={500}
          to={"notes"}
          className="p-4"
        >
          Notes App
        </Link>
        <Link
          smooth={true}
          offset={-70}
          duration={500}
          to="expense"
          className="p-4"
        >
          Expense Tracker
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
