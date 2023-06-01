import React from 'react';
import group from '../assets/group.png';
import wifi from '../assets/wifi.png';
import plane from '../assets/plane.png';
import events from '../assets/events.png';
import custom from '../assets/custom.png';

function Categories() {
  return (
    <section>
    <div className='sm:mt-5 mt-10'>
        <div className=''>
            <p className='text-[#5E6282] text-center uppercase font-Poppins text-[11px]'>Category</p>
            <h1 className='text-[#14183E] text-center font-Volkhov text-xl mt-2'>We Offer Best Services</h1>
            <div className='flex justify-end -mt-14'><img src={group} alt="" className='w-20 sm:w-32'/></div>
        </div>

        <div className=''>
            <div className='grid md:grid-cols-2 sm:flex  sm:justify-evenly mb-2'>
                <div className='bg-white lg:w-44 md:w-44 h-56 rounded-xl drop-shadow-lg shadow-2xl shadow-white border-[#5E6282] border-2'>
                    <img src={wifi} alt="" />
                </div>
                <div className='bg-white lg:w-44 md:w-44 h-56 rounded-xl drop-shadow-lg shadow-2xl shadow-white border-[#5E6282] border-2'><img src={plane} alt="" /></div>
                <div className='bg-white lg:w-44 md:w-44 h-56 rounded-xl drop-shadow-lg shadow-2xl shadow-white border-[#5E6282] border-2'><img src={events} alt="" /></div>
                <div className='bg-white lg:w-44 md:w-44 h-56 rounded-xl drop-shadow-lg shadow-2xl shadow-white border-[#5E6282] border-2'><img src={custom} alt="" /></div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Categories