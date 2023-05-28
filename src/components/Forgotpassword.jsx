import React from "react";
import forgotpass from "../assets/forgotpass.png";
import { Link } from "react-router-dom";



function Forgotpassword() {
  return (
    <section>
      <div className="flex flex-col ">
        <div className="flex justify-center">
          <img
            src={forgotpass}
            alt="forgot password"
            className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]"
          />
        </div>

        <div className="flex items-center flex-col">
          <h1 className="text-black sm:text-5xl text-2xl font-serif text-center pt-5 sm:pt-[50px] font-bold">
            Forgot Password
          </h1>
          <p className="text-gray-500 sm:text-sm text-xs sm:pt-10 pt-5 sm:pl-0 sm:pr-0 pl-5 pr-5">
            Don't worry! It happens. Please enter the address assiociated with
            your account.
          </p>
          <form>
            <div className="flex space-x-7 pt-10">
              <p className="font-bold sm:text-3xl text-xl mt-[5px] sm:mt-0">
                @
              </p>
              <input
                type="text"
                placeholder="Email"
                className="border-b-2 border-black sm:w-96 w-56  rounded-md h-8 pl-3"
              />
            </div>
            <div className="flex justify-center pt-12 pb-2">
              <button className="bg-blue-700 rounded-xl sm:text-lg text-base font-semibold text-white w-full h-12">
               <Link to="/reset">Continue</Link> 
              </button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Forgotpassword;
