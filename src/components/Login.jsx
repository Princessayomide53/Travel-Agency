import React from 'react'
import travel from "../assets/travel.png"

function Login() {
  return (
    <div>
    <div className='flex flex-col sm:flex-row sm:justify-around'>
    <div className='flex justify-center'>
      <img src={travel} alt="Illustration2" className='w-[200px] h-[200px] sm:w-[580px] sm:h-[650px]'/>
    </div>
    <div><h1 className='text-black sm:text-5xl text-2xl font-serif text-center pt-5 sm:pt-[85px] font-bold'>Login</h1>
    <form>
      <div className='sm:space-y-16 pt-14 space-y-14 items-center flex flex-col pl-5 pr-5 sm:pl-0 sm:pr-0'>
    <div className='flex space-x-7'>
        <p className='font-bold sm:text-3xl text-xl mt-[5px] sm:mt-0'>@</p>
        <input type="text" placeholder="Email" className='border-b-2 border-black sm:w-96 w-56  rounded-md h-8 pl-3'/>
        </div>
        </div>
    </form></div>
    </div>

   
    </div>
  )
}
export default Login;