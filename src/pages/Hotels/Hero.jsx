import React from 'react';
import hotel from "../../assets/hotel.png";
import Train_Booking from "../../assets/Train_Booking.png";
import Pegi from "../../assets/Pegi.png";
import Vector from "../../assets/Vector.png";

export default function Hero() {
  return (
    <div>
        <header className='flex justify-between p-[82px]'>
    <div>
      <h1 className='font-bold text-7xl mt-20'>Lets start the<br /> the search for <br />your dream hotel</h1>
      <p className='pt-10 text-lg'>Your dream hotel awaits! This stunning property <br /> features all the comfort and amenities you desire</p>
    <p className='font-bold text-lg pt-5 font-sans'>Our Patnership</p>
    <div className='flex space-x-10 pt-5'>
        <img src={Vector} alt="" className='w-20 h-7'/>
        <img src={Train_Booking} alt="" className='w-20 h-5'/>
        <img src={Pegi} alt="" className='w-16 h-5'/>
    </div>
    </div>
    <div>
        <img src={hotel} alt="" className='w-[550px] h-[650px]'/>
    </div>
    </header>
    </div>
  )
}
