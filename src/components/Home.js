import React from "react";
import ExpenseTracker from "./ExpenseTracker";
import NotesApp from "./NotesApp";
import TaskIt from "./TaskIt";
import { animateScroll as scroll } from "react-scroll";
import { scrollToBottom } from "react-scroll/modules/mixins/animate-scroll";

const Home = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  return (
    <div id="home">
      <div className="m-8">
        <div className="title text-center font-mono font-extrabold text-3xl">
          Ink Everything at One Place
        </div>
        <div className="sub-title text-center text-xl mt-8">
          With ProdSystem you can manage your Tasks, Budget and Important Notes
          all at one place !
        </div>

        <div className="items-center justify-center text-center mt-8 space-x-4">
          <a
            href="https://github.com/Devrajsinh-Jhala/ProdSystem"
            target={"_blank"}
          >
            <button className="bg-[#0C24FD] p-4 text-white font-mono font-bold rounded-full align-middle items-center text-center hover:bg-blue-700">
              View Github &#8594;
            </button>
          </a>

          <button
            onClick={() => scrollToBottom()}
            className="bg-[#0C24FD] p-4 text-white font-mono font-bold rounded-full align-middle items-center text-center hover:bg-blue-700"
          >
            Connect &#8595;
          </button>
        </div>
      </div>
      <TaskIt />
      <NotesApp />
      <ExpenseTracker />
    </div>
  );
};

export default Home;
