import React from "react";
import ContextUs from "../ContextUs/ContextUs";

const Gallery = () => {
  const AllImg = [
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },

    { img: "" },
    { img: "" },
    { img: "" },
  ];

  return (
    <div className=" bg-blue-100/50">
      <div
        className="h-100 mb-15 px-4 md:px-20 overflow-hidden flex flex-col items-center justify-center relative bg-gradient-to-r from-blue-950 to-purple-950 text-white  text-center 
        shadow-lg 
        "
      >
        <div className="flex flex-wrap absolute  top-0  overflow-hidden w-full h-660   ">
          {" "}
          {Array.from({ length: 1000 }).map((_, index) => (
            <div
              key={index}
              className="w-15.5  sm:w-15 md:w-16 h-15  border border-blue-900/20"
            ></div>
          ))}
        </div>
        <h1 className=" text-3xl md:text-4xl font-bold z-20">Gallery</h1>
        <p className="mt-2 md:text-lg opacity-90 z-20">
          Explore memories from events, celebrations, and student journeys.
        </p>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 px-4 md:px-20">
        {AllImg.map(() => (
          <div className="border h-70 sm:h-90 md:h-80 rounded-2xl shadow-blue-950 shadow-md "></div>
        ))}{" "}
      </div>
      <ContextUs showNav={true} />
    </div>
  );
};

export default Gallery;
