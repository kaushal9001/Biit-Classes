import React from "react";
import navCource from "../../assets/photos/nav-cource-img.png";
import { useState, useEffect } from "react";
import MasterClassStars from "../../assets/photos/Stargazing.gif";

const MenuPage = () => {
  const [isActive2, setIsActive2] = useState(false);
  const [showCoursesType, setShowCoursesType] = useState(false);
  const [OnlineCource, setOnlineCource] = useState(false);
  return (
    <div className="flex gap-0.5 flex-col w-120 sm:w-115 md:w-200 items-center justify-center  bg-white  py-5 ">
      <div className=" w-full h-20 flex justify-center items-center shadow-sm shadow-gray-500  rounded-md bg-black/10 hover:bg-black/20">
        {" "}
        <div className="flex w-50 items-center justify-center pb-2 border-3 rounded-3xl text-red-500 bg-gray-100  h-15  md:px-6 ">
          <div className=" text-xl md:text-3xl   ">Login</div>
        </div>
      </div>
      {/* <div className="flex flex-col w-full">
        <div className="border py-3 bg-white text-xl">Courses</div>
        <div className="border py-3 bg-white text-xl">Offline courses</div>
        <div className="border py-3 bg-white text-xl">
          IIT & IIM Online Programs
        </div>
        <div className="border py-3 bg-white text-xl">Masterclass</div>
      </div> */}
      <ul className={`flex gap-0.5 w-full flex-col  text-sm font-medium  `}>
        <li className="shadow-sm shadow-gray-500 h-15">
          <div
            onClick={() => setIsActive2(!isActive2)}
            // onClick={() => setShowCoursesType((prev) => !prev)}
            className={`flex  items-center w-full gap-2 md:px-15 px-40 py-1 h-full rounded-md cursor-pointer
                      transition-all duration-500 ease-in-out  text-neutral-900 bg-black/10 hover:bg-black/20 `}
          >
            <img
              src={navCource}
              alt=""
              className="flex justify-center items-center h-5 w-5"
            />
            Courses
          </div>
        </li>
        <li className="shadow-sm shadow-gray-500 h-15">
          <div
            className={` rounded-md bg-black/10 hover:bg-black/20 flex ps-40 md:ps-15 items-center h-full w-full text-neutral-900 cursor-pointer`}
          >
            Online Courses
          </div>
        </li>
        <li className="shadow-sm shadow-gray-500 h-15">
          {" "}
          <div
            className={` rounded-md bg-black/10 hover:bg-black/20 flex ps-40 md:ps-15 items-center h-full w-full text-neutral-900 cursor-pointer - transition-all duration-500 ease-in-out `}
          >
            Online Program
          </div>
        </li>
        <li className="shadow-sm shadow-gray-500 h-15">
          {" "}
          <div
            className={` rounded-md bg-black/10 hover:bg-black/20 flex ps-40 md:ps-15 items-center h-full w-full text-neutral-900 cursor-pointer `}
          >
            <img
              src={MasterClassStars}
              alt=""
              className="absolute  h-25 w-25"
            />
            Masterclass
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;
