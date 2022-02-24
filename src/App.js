import React, { useState, useEffect } from "react";
import "./App.css";
import TaskIt from "./components/TaskIt";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotesApp from "./components/NotesApp";
import ExpenseTracker from "./components/ExpenseTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("resize");
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <Router>
      <Navbar toggleDropdown={toggleDropdown} />
      <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskIt />} />
        <Route path="/notes" element={<NotesApp />} />
        <Route path="/expense" element={<ExpenseTracker />} />
      </Routes>
      {/* 
      <Home />
      <TaskIt />
      <NotesApp />
      <ExpenseTracker /> */}
    </Router>
  );
}

export default App;
