import React from "react";
import travel from "../assets/travel.png";
import { SlLock } from "react-icons/sl";

function Login() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="flex justify-center">
          <img
            src={travel}
            alt="Illustration2"
            className="w-[200px] h-[200px] sm:w-[580px] sm:h-[650px]"
          />
        </div>
        <div>
          <h1 className="text-black sm:text-5xl text-2xl font-serif text-center pt-5 sm:pt-[85px] font-bold">
            Login
          </h1>
          <form>
            <div className="sm:space-y-20 sm:pt-16 pt-10 space-y-14 items-center flex flex-col pl-5 pr-5 sm:pl-0 sm:pr-0">
              <div className="flex space-x-7">
                <p className="font-bold sm:text-3xl text-xl mt-[5px] sm:mt-0">
                  @
                </p>
                <input
                  type="text"
                  placeholder="Email"
                  className="border-b-2 border-black sm:w-96 w-56  rounded-md h-8 pl-3"
                />
              </div>
              <div className="flex space-x-7">
                <SlLock className="sm:text-3xl text-xl mt-[5px] sm:mt-0" />
                <input
                  type="text"
                  placeholder="Password"
                  className="border-b-2 border-black sm:w-96 w-56 rounded-md h-8 pl-3"
                />
              </div>
            </div>
            <div className="items-end justify-end sm:mt-16 mt-10 flex">
              <p className=" text-blue-600 text-xs sm:text-sm pr-14">Forgot Password?</p>
            </div>
            <div className="flex justify-center pt-7">
              <button className="bg-blue-700 rounded-2xl text-white px-14 py-2 sm:py-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
