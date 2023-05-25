import React from 'react';
import Signup from "../assets/Signup.png";
import {MdAlternateEmail} from "react-icons/Md"
 import {GoOctoface} from "react-icons/Go"
 import {SlLock} from "react-icons/Sl"
 import {ImMobile2} from "react-icons/Im"

function SignUp() {
  return (
<section>
<div className=' flex sm:flex-row sm:justify-evenly flex-col'>
  <div className='flex justify-center'>
  <img src={Signup} alt="illustration"
   className='w-[400px] h-[400px] sm:w-[550px] sm:h-[620px]'/>
  </div>
    <div>
      <h1 className='text-black text-5xl font-serif text-center pt-5 sm:pt-10 font-bold'>Sign Up</h1>
      <form>
      <div className='sm:space-y-20 pt-12 space-y-14 items-center flex flex-col '>
        <div className='flex space-x-7'>
        <MdAlternateEmail size={30}/>
        <input type="text" placeholder="Email" className='border-b-2 border-black sm:w-96 w-80 rounded-md h-8 pl-3'/>
        </div>
        <div className='flex space-x-7'><GoOctoface size={30}/>
        <input type="text" placeholder="Full Name" className='border-b-2 border-black sm:w-96 w-80  rounded-md h-8 pl-3'/></div>
        <div className='flex space-x-7'><SlLock size={30}/> 
        <input type="text" placeholder="Password" className='border-b-2 border-black sm:w-96 w-80 rounded-md h-8 pl-3'/></div>
        
        <div className='flex space-x-7 '>
          <ImMobile2 size={30}/>
          <input type="text" placeholder="Phone No" className='border-b-2 border-black sm:w-96 w-80 pl-3 rounded-md h-8 mb-3 sm:mb-0' />
        </div>
        <p className='text-gray-500 text-sm font-mono'>By signing up, you agreed to our <span className='text-blue-500'>Terms & Conditions and Privacy Policy</span></p>
      </div>
      </form>
      </div>
      
      
</div>
</section>

  
  )
}

export default SignUp