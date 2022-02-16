import React from "react";

const Home = () => {
  return (
    <div>
      <div className="m-8">
        <div className="title text-center font-mono font-extrabold text-3xl">
          Ink Everything at One Place
        </div>
        <div className="sub-title text-center text-xl mt-8">
          With ProdSystem you can manage your Tasks, Budget and Important Notes
          all at one place !
        </div>

        <div className="items-center justify-center text-center mt-8">
          <button className="bg-[#0C24FD] p-4 text-white font-mono font-bold rounded-full align-middle items-center text-center hover:bg-blue-700">
            View Github Link &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
