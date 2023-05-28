import React, {useState} from 'react';
import reset from "../assets/reset.png";
import { SlLock } from "react-icons/sl";

function Reset() {
  const [filled, setFilled] = useState(true);

  return (
  <article>
    <div className='flex flex-col'>
    <div className='flex  justify-center'><img src={reset} alt="" className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]"/></div>
    <div className="flex items-center flex-col">
          <h1 className="text-black sm:text-5xl text-2xl font-serif text-center pt-5 sm:pt-[40px] font-bold">
            Reset Password
          </h1>
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
            <div className="flex space-x-7 pt-14">
              <SlLock className="sm:text-3xl text-xl mt-[5px] sm:mt-0"/>
              <input
                type="password"
                placeholder="Password"
                className="border-b-2 border-black sm:w-96 w-56  rounded-md h-8 pl-3"
              />
            </div>
            <div className="flex justify-center pt-12 pb-2">
              <button disabled={filled} className="bg-blue-700 rounded-xl sm:text-lg text-base font-semibold text-white w-full h-12">
               Continue 
              </button>
              </div>
          </form>
    </div>
    </div>
    </article>
  )
}

export default Reset;