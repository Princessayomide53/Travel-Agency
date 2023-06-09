import React from "react";
// import group1 from "../assets/group1.png";
// import group2 from "../assets/group2.png";
// import group3 from "../assets/group3.png";
import Trip from "../Data/Trip";
import greece from "../assets/greece.png";
import leaf from "../assets/leaf.png";
import map from "../assets/map.png";
import send from "../assets/send.png";
import building from "../assets/building.png";


function Ease() {
  return (
    <>
      <div className="pt-28 flex sm:flex-row sm:justify-around lg:space-x-28 xl:space-x-80 flex-col items-center">
        <div className="">
          <p className="text-[#5E6282] lg:text-xl md:text-base text-lg font-Poppins">
            Easy and Fast
          </p>
          <h1 className="font-Volkhov lg:text-5xl text-2xl md:text-3xl text-[#14183E] font-bold">
            Book Your Next Trip
            <br /> In 3 Easy Steps
          </h1>
       
        <div className="flex flex-col ">
          {Trip.Card.map((data, id) => (
            <div key={id} className="flex space-x-10 py-5 sm:mt-0 mt-2">
              <img src={data.imgUrl} alt=""  className="lg:w-16 lg:h-16 md:w-12 md:h-12 w-7 h-7"/>
              <div className="-mt-">
                <p className="text-[#080809] lg:text-xl md:text-base font-bold text-sm">{data.title}</p>
                <p className="text-[#080809] w-48 text-sm lg:w-80 md:w-56 lg:mt-2 md:mt-1 md:text-xs text-[10px]">{data.content}</p>
              </div>
              </div>
              
          ))}
          <div>         
          </div>
          </div>

        </div>
        <div className="bg-white w-[220px] h-64 mt-10 shadow-2xl md:h-64 md:w-[210px] shadow-blue-600 sm:drop-shadow-xl sm:backdrop-blur-lg rounded-xl lg:w-[270px] lg:h-72 lg:mt-36 md:mt-28">
              <div className="flex justify-center pt-3">
              <img src={greece} alt="" className="lg:w-60 lg:h-32 md:w-40 md:h-18 w-40 h-20"/>
              </div>
              <p className="sm:mt-3  text-base sm:pl-5 font-bold font-Poppins text-[#080809] mt-3 pl-7">Trip to greece</p>
              <p className="sm:mt-2 text-xs lg:text-sm md:text-xs text-[#84829A] sm:pl-5 pl-7 mt-3">14-29 June | by Robbin Joseph</p>
              <div className="flex sm:mt-3 space-x-7 sm:pl-5  pl-7 mt-5">
                <img src={leaf} alt="" className="w-7 h-7"/>
                <img src={map} alt="" className="w-7 h-7"/>
                <img src={send} alt="" className="w-7 h-7"/>
              </div>
                <div className="lg:mt-5 sm:pl-5 pl-7 md:mt-7 mt-7 flex space-x-5"><img src={building} alt="" className="w-3 h-3" />
                <p className="lg:text-sm md:text-xs text-xs text-[#84829A] -mt-1">24 people going</p>
                </div>
            </div>
      </div>
    </>
  );
}

export default Ease;
