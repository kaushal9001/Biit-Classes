import React from "react";
import { Link } from "react-router-dom";

const OnlineCources = () => {
  const courses = [
    { title: "Full Stack Development with AI" },
    { title: "Data Analytics with Gen AI" },
    // Aap aur bhi courses add kar sakte ho
  ];
  return (
    <div>
      {" "}
      <div className="w-80 h-50 flex justify-center  pt-5 px-5 bg-white">
        <Link to={"/coursespage"} className="flex gap-2 flex-col w-[400px]">
          {courses.map((course, index) => (
            <div
              key={index}
              className=" rounded-md p-2 inset-shadow-sm cursor-pointer shadow-lg text-gray-800"
            >
              {course.title}
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default OnlineCources;
