import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  "Data Science / AI / ML",
  "Full Stack / Development",
  "Game Development / 3D / Animation",
  "App Development",
  "Cloud / Computing",
  "Designing",
  "Digital Marketing",
];

const courseData = {
  "Data Science / AI / ML": [
    {
      id: "data-science",
      title: "Data Science",
      duration: "1 Year",
      tag: "Popular",
    },
    {
      id: "data-science+gen-ai",
      title: "Data Science + Gen AI",
      duration: "1.2 Year",
      tag: "Bestseller",
    },
    {
      id: "artificial-intelligence",
      title: "Artificial Intelligence",
      duration: "8 Months",
      tag: "Bestseller",
    },
    {
      id: "artificial-intelligence+",
      title: "Artificial Intelligence+",
      duration: "1 Year",
      tag: "Bestseller",
    },
    // { id: "Data Analytics Course - Hinglish", duration: "8 months" },
    // { title: "Data Analytics Course - Hinglish", duration: "8 months" },
    // { id: "Data Analytics Course", duration: "6 months", tag: "Popular" },
    // { title: "Data Analytics Course", duration: "6 months", tag: "Popular" },
    // {
    //   id: "Data Analytics with Gen AI (Offline Batch)",
    //   title: "Data Analytics with Gen AI (Offline Batch)",
    //   duration: "6 months",
    //   tag: "Offline",
    // },
    // {
    //   id: "Data Science With Generative AI - Hinglish",
    //   title: "Data Science With Generative AI - Hinglish",
    //   duration: "8 months",
    // },
  ],
  "Full Stack / Development": [
    {
      id: "mern-stack-devlopment",
      title: " MERN Stack Devlopment",
      duration: " 7 Months",
      tag: "Bestseller",
    },
    {
      id: "mern-stack-devlopment+",
      title: " MERN Stack Devlopment+",
      duration: "1 Year",
      tag: "Bestseller",
    },

    {
      id: "3d-website-development",
      title: "3D Website Development",
      duration: " 1 Year",
    },
    {
      id: "full-stack-java-development",
      title: "Full Stack Java Development",
      duration: " 1 Year",
    },
    {
      id: "front-end-development",
      title: " Front End Development",
      duration: "  4 Months",
    },
    {
      id: "back-end-development",
      title: "Back End Development",
      duration: " 3 Months",
    },
  ],
  "Game Development / 3D / Animation": [
    {
      id: "game-development",
      title: "Game Development",
      duration: " 2 Years",
    },
    {
      id: "3d-modelling-&-animation",
      title: "3D Modelling & Animation",
      duration: "2 Years",
      tag: "Popular",
    },
    {
      id: "blender-master-class",
      title: "Blender Master Class",
      duration: "6 months",
      tag: "Offline",
    },
    {
      id: "max-and-maya",
      title: "Max and Maya",
      duration: "10 months",
    },
  ],
  "App Development": [
    {
      id: "android-app-development",
      title: "Android App Development",
      duration: " 6 Months",
    },
  ],
  "Cloud / Computing": [
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      duration: "6 months",
      tag: "Bestseller",
    },
  ],

  Designing: [
    {
      id: "ui-ux-designer ",
      title: "UI/UX Designer ",
      duration: "4 Months",
      tag: "Bestseller",
    },
  ],
  "Digital Marketing": [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      duration: "4 months",
      tag: "Bestseller",
    },

    {
      id: "digital-marketing+",
      title: "Digital Marketing+",
      duration: "6 months",
    },
  ],
  // Add other categories data as needed...
};

const CoursePage = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Data Science / AI / ML"
  );

  return (
    <>
      <div className="flex w-full h-146 rounded-xl bg-white">
        {/* Sidebar */}
        <div className="w-64  h-140 ">
          <ul className="space-y-2 p-4">
            {categories.map((cat) => (
              <li
                key={cat}
                onMouseEnter={() => setActiveCategory(cat)}
                className={`cursor-pointer px-3 py-2 rounded-md text-lg font-medium ${
                  activeCategory === cat
                    ? "bg-orange-50 text-orange-600"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Courses Section */}
        <div className="flex flex-col flex-1 justify-between overflow-y-auto bg-blue-50 relative ">
          <div className=" p-3   grid  grid-cols-2 gap-4 ">
            {courseData[activeCategory]?.map((course, idx) => (
              <Link
                to={`/coursespage/${course.id}`}
                key={idx}
                className="bg-white shadow-sm  xl:w-60  p-4 h-30 rounded-md  shadow-md transition-all duration-300 hover:shadow-xl relative "
              >
                <h3 className="text-base font-medium">{course.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{course.duration}</p>
                {course.tag && (
                  <span className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-tr rounded-bl">
                    {course.tag}
                  </span>
                )}
              </Link>
            ))}
          </div>
          <button className="col-span-2 w-full border my-10 h-10  rounded-md text-gray-700 hover:bg-gray-100">
            View All Courses
          </button>
        </div>

        {/* Masterclass Section */}
        <div className="w-80   p-4">
          <h3 className="text-blue-500 text-sm font-semibold mb-4">
            Masterclass
          </h3>
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm font-medium">
                Build Like Flipkart: Applied Data Science for Beginners
              </p>
              <p className="text-xs text-gray-500 mt-1">Sunday, 3 Aug, 2025</p>
            </div>
            <div className="p-3 bg-gray-50 rounded">
              <p className="text-sm font-medium">
                Building Dashboards with Power BI: A Data Analyst’s...
              </p>
              <p className="text-xs text-gray-500 mt-1">Sunday, 3 Aug, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
