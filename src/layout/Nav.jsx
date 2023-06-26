import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section>
      <nav>
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
        <div className="hidden sm:block">
          <div className="flex pt-3 z-20 justify-between fixed w-full h-20 rounded-sm bg-gradient-to-r from-[#FFF1DA] to-white">
            <div className="flex relative">
            <h1 className="sm:text-5xl text-[#212832] font-semibold md:pl-12 sm:pl-28 xl:pl-20 z-10">
              Jadoo
            </h1>
           <div className="bg-[#F1A501] w-5 h-5 absolute xl:top-5 xl:left-[158px] lg:top-5 lg:left-[126px] md:top-5 md:left-[125px] rounded-full"></div>
            <div className="bg-[#F1A501] w-5 h-5 absolute xl:top-5 xl:left-[185px] lg:top-5 lg:left-[154px] md:top-5 md:left-[155px] rounded-full"></div> 
            </div>
            

            <div className="z-10 sm:pr-28 md:pr-12 xl:pr-24">
              <ul className="flex sm:space-x-20 z-50 sm:pt-3 font-Poppins font-normal lg:text-lg md:text-sm text-[14px] text-[#212832]">
              <li><Link to ="/destinations">Destinations </Link></li>
               <li><Link to ="/hotels">Hotels</Link></li>
               <li><Link to ="flights">Flights</Link></li>
               <li><Link to ="/bookings">Bookings</Link></li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        <div className="flex flex-col pt-2  z-50 sm:hidden">
          <div className="flex justify-between pr-5">
            <h1 className="text-4xl text-[#212832] font-semibold pl-5 h-[1px] z-10">
              Jadoo<span className=""></span>
            </h1>
            <Hamburger
              size={25}
              className="mr-5"
              direction="left"
              onToggle={() => setOpen(!open)}
            />
          </div>
          {open && (
            <div className="z-10 bg-white h-screen">
              <ul className="flex flex-col space-y-14 z-50 pl-5 pt-7  font-normal text-base text-[#212832]">
              <li><Link to ="/destinations">Destinations </Link></li>
               <li><Link to ="/hotels">Hotels</Link></li>
               <li><Link to ="flights">Flights</Link></li>
               <li><Link to ="/bookings">Bookings</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
}

export default Nav;
