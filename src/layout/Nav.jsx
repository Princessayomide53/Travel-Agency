import Hamburger from "hamburger-react";
import React, { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <section>
      <nav>
        <div className="hidden sm:block">
      <div className="flex sm:flex-row flex-col justify-around sm:pt-3 z-50 "> 
        <h1 className="sm:text-4xl text-[#212832] font-semibold">Jadoo <span className="fill-[#F1A501] bg-inherit"></span></h1>
        <div className="z-10 ">
          <ul className="flex sm:space-x-36 z-50  font-normal sm:text-[15px] text-[#212832]">
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
        </ul></div>
        </div>
      </div>
      
      <div className="flex flex-col pt-2  z-50 sm:hidden"> 
      <div className="flex justify-between pr-5">
        <h1 className="text-4xl text-[#212832] font-semibold pl-5 h-[1px] z-10">Jadoo<span className=""></span></h1>
        <Hamburger  size={25} className="mr-5" direction="left" onToggle={() => setOpen(!open)}/>
        </div>
        {open &&
        <div className="z-10 bg-white h-screen">
          <ul className="flex flex-col space-y-14 z-50 pl-5 pt-7  font-normal text-base text-[#212832]">
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
        </ul></div>
} 

      </div>
      </nav>
      
    </section>
  );
}

export default Nav;
