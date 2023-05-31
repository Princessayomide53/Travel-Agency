import React from 'react'

 function EmailVerification({open, close}) {  
  if (!open) return null;
  return (
    <>
    <div className='flex flex-col mt-0 justify-center z-10 items-center ml-0 fixed backdrop-blur-md w-full h-full inset-0'>
        <div className='bg-white w-[50%] h-[50%]'>
        <h2 className='text-white'>A Verification mail has been sent to this email that you registered with</h2>
        </div>
        </div>
    <button onClick={close}>Ok</button>
    </>
  )
}
export default EmailVerification;
