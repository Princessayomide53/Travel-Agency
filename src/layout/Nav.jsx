import Hamburger from "hamburger-react";
import React, { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <nav>
        <div className="hidden sm:block">
          <div className="flex sm:flex-row flex-col sm:pt-3 z-50 sm:justify-between">
            <div>
            <h1 className="sm:text-5xl text-[#212832] font-semibold md:pl-12 sm:pl-28 xl:pl-20">
              Jadoo
            </h1>
            {/* <div className="bg-green-500 w-5 h-5 flex"></div>
            <div className="bg-green-500 w-5 h-5"></div> */}
            </div>
            

            <div className="z-10 sm:pr-28 md:pr-12 xl:pr-24">
              <ul className="flex sm:space-x-20 z-50 sm:pt-3 font-Poppins font-normal sm:text-lg text-[14px] text-[#212832]">
                <li>Destinations</li>
                <li>Hotels</li>
                <li>Flights</li>
                <li>Bookings</li>
              </ul>
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
                <li>Destinations</li>
                <li>Hotels</li>
                <li>Flights</li>
                <li>Bookings</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
}

export default Nav;
