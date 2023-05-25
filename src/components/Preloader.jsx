import React from 'react'

function Preloader() {
  return (
    <div className='bg-white w-full h-screen fixed top-0 left-0 right-0 bottom-0 grid z-10'>
        
        <div style={{display: Preloader ? "grid" : "none"}}>
            <h1 className='font-bold font-serif text-6xl animate-ping flex items-center justify-center from-neutral-500'>Jadoo</h1>
        </div>

    </div>
  )
}

export default Preloader