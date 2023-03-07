import React from "react";
import hero from "./images/logo.png";

function Hero() {
  return (
    <div className='bg-[url("./images/ihccpic.jpg")] bg-no-repeat bg-cover h-[100vh] overflow-hidden'>
      <div>
        <ul className="flex w-full bg-[#1a5650] h-8 items-center justify-end text-yellow-400 gap-5 px-20 text-xs">
          <li className="cursor-pointer hover:text-yellow-500">Home</li>
          <li className="cursor-pointer hover:text-yellow-500">Contact</li>
          <li className="cursor-pointer hover:text-yellow-500">Articles</li>
          <li className="cursor-pointer hover:text-yellow-500">Member</li>
        </ul>
      </div>

      <div className="h-full bg-[#041c37c4] flex flex-col gap-10 text-white items-center justify-center px-20">
        <div className="h-[10%] flex justify-between items-center w-full mt-5">
          <div className="h-full overflow-hidden">
            <img src={hero} alt="" className="h-full" />
          </div>
          <ul className="flex gap-4">
            <li className="font-light">Home</li>
            <li className="font-light">Contact</li>
            <li className="font-light">About us</li>
          </ul>
        </div>
        <div className="h-[90%] flex gap-10 justify-center items-center">
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-5xl text-left">
              Welcome to <br></br>IHCC - Copenhagen
            </h1>
            <p className="text-left font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              qui nesciunt rerum aliquam praesentium aspernatur, fuga nihil
              maiores nulla dolorum.
            </p>
            <button className="w-fit mt-3  bg-churchGreen-100 p-3 rounded-full hover:bg-yellow-700 cursor-pointer">
              Become a Member
            </button>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center gap-7">
            <div className="h-1/2 bg-[#1a56507d] w-1/4 mb-[5rem]"></div>
            <div className="h-1/2 bg-[#1a56507d] w-1/4 rounded-tr-full mb-[-5rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
