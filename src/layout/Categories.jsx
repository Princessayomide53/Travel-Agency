import React from "react";
import group from "../assets/group.png";
import wifi from "../assets/wifi.png";
import plane from "../assets/plane.png";
import events from "../assets/events.png";
import custom from "../assets/custom.png";
// import decore2 from "../assets/decore2.png";
import Card from "../Data/Data";
import { IoIosSend } from "react-icons/io";

function Categories() {
  return (
    <section>
      <div className="sm:mt-10 mt-10">
        <div className="">
          <p className="text-[#5E6282] font-bold text-center uppercase font-Poppins text-[11px] sm:text-base">
            Category
          </p>
          <h1 className="text-[#14183E] text-center font-Volkhov text-xl sm:text-5xl  font-bold mt-3">
            We Offer Best Services
          </h1>
          <div className="flex justify-end -mt-14">
            <img src={group} alt="" className="w-20 sm:w-32" />
          </div>
        </div>

        <div className="">
          <div className="grid md:grid-cols-2 grid-cols-1 place-items-center md:place-items-center gap-10 lg:flex lg:gap-1 lg:justify-around xl:justify-center xl:space-x-44 mb-2">
            <div className="bg-white  lg:w-44 md:w-44 sm:h-56 w-48 h-48 rounded-xl drop-shadow-lg shadow-2xl shadow-white">
              <div className="flex justify-center">
                <img
                  src={wifi}
                  alt=""
                  className="sm:w-14 sm:h-12 sm:mt-7 mt-7 w-12 h-10"
                />
              </div>
              <p className="pt-5 font-semibold sm:text-sm text-xs text-[#1E1D4C]  text-center">
                Calculated weather
              </p>
              <p className="text-center sm:text-sm text-xs text-[#5E6282] pt-3">
                Built Wicket longer
                <br /> admire do barton
                <br /> vanity itself do in it.
              </p>
            </div>
            <div className="bg-white lg:w-44 md:w-44 sm:h-56 w-48 h-48 rounded-xl drop-shadow-lg shadow-2xl shadow-white">
              <div className="flex justify-center">
                <img
                  src={plane}
                  alt=""
                  className="sm:w-28 sm:h-20 sm:mt-1 w-24 h-20"
                />
              </div>

              <p className="pt-2  font-bold text-[#1E1D4C] sm:text-sm text-xs text-center">
                Best Flights
              </p>
              <p className="text-center sm:text-sm text-xs text-[#5E6282] pt-3">
                Engrossed listening.
                <br /> Park gate sell they <br />
                west hard for the
              </p>
            </div>
            <div className="bg-white lg:w-44 md:w-44 sm:h-56 w-48 h-48 rounded-xl drop-shadow-lg shadow-2xl shadow-white">
              <div className="flex justify-center">
                <img
                  src={events}
                  alt=""
                  className="sm:w-14 sm:h-12 mt-7 sm:mt-7 w-12 h-10"
                />
              </div>

              <p className="pt-5  font-bold text-[#1E1D4C] sm:text-sm text-xs text-center">
                Local Events
              </p>
              <p className="text-center sm:text-sm text-xs text-[#5E6282] pt-3">
                Barton vanity itself do
                <br /> in it. Preferd to men it
                <br /> engrossed listening.{" "}
              </p>
            </div>
            <div className="bg-white  lg:w-44 md:w-44 sm:h-56 w-48 h-48 rounded-xl drop-shadow-lg shadow-2xl shadow-white">
              <div className="flex justify-center">
                <img
                  src={custom}
                  alt=""
                  className="sm:w-12 sm:h-12 mt-7 sm:mt-7 w-10 h-12"
                />
              </div>
              <p className="pt-4 font-bold text-[#1E1D4C] sm:text-sm text-xs text-center">
                Customization
              </p>
              <p className="text-center sm:text-sm text-xs text-[#5E6282] pt-3">
                We deliver outsourced
                <br /> aviation services for <br />
                military customers
              </p>
            </div>
          </div>
        </div>

        <div className="sm:mt-28 mt-20">
          <p className="text-[#5E6282] text-center font-semibold uppercase font-Poppins text-[11px] sm:text-lg">
            Top Selling
          </p>
          <h1 className="font-Volkhov text-3xl sm:text-5xl text-[#14183E] font-bold text-center mt-2">
            Top Destination
          </h1>
        </div>
        <div className="flex sm:flex-row space-y-14 sm:space-y-0 flex-col items-center md:justify-evenly lg:justify-evenly xl:justify-around sm:mt-20 mt-16 relative z-20">
          {Card.Image.map((data, id) => ( 
            <div className="hover:drop-shadow-xl hover:shadow-2xl" key={id}>
              
            <div  className="z-50 flex items-center justify-evenly ">
            <center>
              <img
                src={data.imgUrl}
                alt=""
                className="lg:w-[280px]  w-52 md:w-48"
              />
              </center>
              </div>
              
              <div className="bg-white lg:w-[281px] ml-0 rounded-b-xl pb-1 md:top-[265px] xl:top-[383px] md:w-[200px] w-[193px] -mt-14 absolute lg:top-[400px] z-50" >
              <div className="flex justify-between sm:py-2 sm:px-2  px-2 py-2 font-Poppins text-base lg:text-lg">
                <p>{data.title}</p>
                <p>{data.money}</p>
              </div>
                <div className="sm:mt-3 flex mt-3 space-x-4 px-2 sm:px-0 sm:space-x-2 sm:pl-2">
                  <IoIosSend />
                  <p className="text-base lg:text-lg font-Poppins sm:-mt-1 -mt-[2px]">{data.days}</p>
                </div>
              </div>
              </div>
          ))}
          
        </div>
        {/* <div className="flex justify-end sm:-mt-60 lg:pr-5 xl:pr-20">
            <img src={decore2} alt="" className="sm:w-10 h-32" />
          </div> */}
      </div>
    </section>
  );
}

export default Categories;
