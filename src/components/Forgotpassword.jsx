import React from 'react';
import forgotpass from "../assets/forgotpass.png"

function Forgotpassword() {
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:justify-around">
<div className="flex justify-center">
  <img src={forgotpass} alt="forgot password" className="w-[200px] h-[200px] sm:w-[580px] sm:h-[650px]"/>
</div>

<div>
  <h1 className="text-black sm:text-5xl text-2xl font-serif text-center pt-5 sm:pt-[85px] font-bold">Forgot Password</h1>
  <p className='text-gray-500 sm:text-sm text-xs pt-10'>Don't worry! It happens. Please enter the address assiociated with your account.</p>
  <form>
    <div></div>
  </form>
</div>
</div>
    </section>
  )
}

export default Forgotpassword