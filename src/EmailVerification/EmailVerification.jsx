import React from 'react'

 function EmailVerification({open, close}) {  
  if (!open) return null;
  return (
    <>
    <div></div>
    <button onClose={close}></button>
    </>
  )
}
export default EmailVerification;
