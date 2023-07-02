import React from 'react';
import img1 from "../../assets/img1.png"
import Img2 from "../../assets/Img2.png"

export default function Dream() {
  return (
    <article className='pt-5'>
        <div className='flex justify-evenly'>
            <div>
                <h1 className='font-bold text-4xl pb-5'>Discover your Dream<br /> Hotel with us</h1>
            <p className='text-lg'>We are pleased to offer hotels listings services and provide various <br /> options and packages to assist you in finding your dream hotel</p>
            <div className='grid grid-cols-2 pt-8 gap-7'>
            <div>
                <h1 className='text-[#1B00EA] text-4xl font-bold'>200k+</h1>
                <p className='text-sm'>Happy customer<br /> with our services</p>
            </div>
            <div>
                <h1 className='text-[#1B00EA] text-4xl font-bold'>225k+</h1>
                <p className='text-sm'>The best hotels<br /> we provide</p>

            </div>
            <div>
                <h1 className='text-[#1B00EA] text-4xl font-bold'>316k+</h1>
                <p className='text-sm'>Companies affiliated<br /> with us</p>

            </div>
            <div>
                <h1 className='text-[#1B00EA] text-4xl font-bold'>413k+</h1>
                <p className='text-sm'>Sucessful bookings</p>

            </div>
            </div>
            </div> 
            <div className='relative'>
                <img src={Img2} alt="" className='w-[370px] h-[500px]'/>
                <img src={img1} alt="" className='absolute top-[230px] right-48 w-[270px] h-[380px]'/>
            </div>
        </div>
    </article>
  )
}
