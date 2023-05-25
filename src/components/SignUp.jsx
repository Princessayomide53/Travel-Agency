import React from 'react';
import handshake from "../assets/handshake.png";
 import {GoOctoface} from "react-icons/Go"
 import {SlLock} from "react-icons/Sl"
 import {ImMobile2} from "react-icons/Im"

function SignUp() {
  return (
<section>
<div className='overflow-hidden flex sm:flex-row sm:justify-evenly flex-col'>
  <div className='flex justify-center'>
  <img src={handshake} alt="illustration"
   className='w-[50px] h-[50px] sm:w-[580px] sm:h-[650px]'/>
  </div>
    <div className='w-[90%] sm:w-0 mx-auto sm:m-0'>
      <h1 className='text-black text-5xl font-serif text-center pt-5 sm:pt-10 font-bold'>Sign Up</h1>
      <form>
      <div className='sm:space-y-16 pt-12 space-y-14 items-center flex flex-col pl-5 pr-5 sm:pl-0 sm:pr-0'>
        <div className='flex space-x-7'>
        <p className='font-bold sm:text-3xl text-base'>@</p>
        <input type="text" placeholder="Email" className='border-b-2 border-black sm:w-96 w-56 rounded-md h-8 pl-3'/>
        </div>
        <div className='flex space-x-7'><GoOctoface className='sm:text-3xl text-base'/>
        <input type="text" placeholder="Full Name" className='border-b-2 border-black sm:w-96 w-56 rounded-md h-8 pl-3'/></div>
        <div className='flex space-x-7'><SlLock className='sm:text-3xl text-base'/> 
        <input type="text" placeholder="Password" className='border-b-2 border-black sm:w-96 w-56 rounded-md h-8 pl-3'/></div>
        
        <div className='flex space-x-7 '>
          <ImMobile2 className='sm:text-3xl text-base'/>
          <input type="text" placeholder="Phone No" className='border-b-2 border-black sm:w-96 w-56 pl-3 rounded-md h-8 mb-3 sm:mb-0' />
        </div>
      <p className='text-gray-500 sm:text-sm text-xs font-sans'>By signing up, you agreed to our <span className='font-semibold text-blue-500'>Terms & Conditions and Privacy Policy</span></p>

      <div className='flex-row flex space-x-10 pb-3 sm:mb-0'> <button className='bg-blue-600 font-semibold sm:text-base text-sm rounded-2xl px-10 py-2 text-white '>Continue </button> 
      <p className='text-gray-500 sm:text-sm text-xs font-sans font-semibold mt-[10px]'>Joined us before? <span className='text-blue-600 font-semibold'>Login</span></p></div>
      </div>
      </form>
      </div>
      
      
</div>
</section>

  
  )
}

export default SignUp