import React from "react";
import { Link } from "react-scroll";

const Dropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div
      className={
        isOpen
          ? `grid grid-rows-4 text-white text-center items-center bg-[#403C3C]`
          : `hidden`
      }
      onClick={toggleDropdown}
    >
      <Link smooth={true} offset={-70} duration={500} to={"/"} className="p-4">
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
  );
};

export default Dropdown;
