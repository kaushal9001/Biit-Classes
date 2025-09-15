// src/Component/Navbar/Navbar.jsx
"use client";
import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { useState, useEffect } from "react"; // <-- useEffect & useState import kar do
import CoursesType from "../CoursesType/CoursesType";
import OnlineCources from "../OnlineCources/OnlineCources";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MasterClassStars from "../../assets/photos/Stargazing.gif";
import logo from "../../assets/photos/biit-logo.png";
import navCource from "../../assets/photos/nav-cource-img.png";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import MenuPage from "../MenuPage/MenuPage";
import { HiX, HiMenu, HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCoursesType, setShowCoursesType] = useState(false);
  const [OnlineCource, setOnlineCource] = useState(false);
  const [hovering, setHovering] = useState(false); // Hover state
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggle = () => setOpen((p) => !p);
  // useEffect(() => {
  //   if (toggle1) {
  //     setToggle1(false);
  //   } else {
  //     setToggle1(true);
  //   }
  // }, [toggle1]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [openC, setOpenC] = useState(false);
  const [active, setActive] = useState(null);
  const [nestedActive, setNestedActive] = useState(null);

  const toggleDropdown = (index) => {
    setActive(active === index ? null : index);
  };
  const toggleNested = (j) => {
    setNestedActive(nestedActive === j ? null : j);
  };

  const sections = [
    {
      title: "Courses",
      items: [
        {
          name: " Data Science / AI / ML",
          subItems: [
            { name: "Data Science", id: "data-science" },
            {
              name: "Data Science + Gen AI",
              id: "data-science+gen-ai",
            },
            { name: "Artificial Intelligence", id: "artificial-intelligence" },
            {
              name: "Artificial Intelligence+",
              id: "artificial-intelligence+",
            },
          ],
        },

        {
          name: "Full Stack / Development",
          subItems: [
            { name: "MERN Stack Devlopment", id: "mern-stack-devlopment" },
            {
              name: "MERN Stack Devlopment+",
              id: "mern-stack-devlopment+",
            },
            {
              name: "3D Website Development",
              id: "3d-website-development",
            },
            {
              name: "Full Stack Java Development",
              id: "full-stack-java-development",
            },
            {
              name: "Front End Development",
              id: "front-end-development",
            },
            {
              name: "Back End Development",
              id: "back-end-development",
            },
          ],
        },

        {
          name: "Game Development / 3D / Animation",
          subItems: [
            { name: "Game Development", id: "game-development" },
            {
              name: "3D Modelling & Animation",
              id: "3d-modelling-&-animation",
            },
            {
              name: "Blender Master Class",
              id: "blender-master-class",
            },
            {
              name: "Max and Maya",
              id: "max-and-maya",
            },
          ],
        },
        {
          name: "App Development",
          subItems: [
            { name: "Android App Development", id: "android-app-development" },
          ],
        },
        {
          name: "Cloud / Computing",
          subItems: [{ name: "Cloud Computing", id: "cloud-computing" }],
        },
        {
          name: "Designing",
          subItems: [{ name: "UI/UX Designer", id: "ui-ux-designer" }],
        },

        {
          name: "Digital Marketing",
          subItems: [
            { name: "Digital Marketing", id: "digital-marketing" },
            {
              name: "Digital Marketing+",
              id: "digital-marketing+",
            },
          ],
        },
      ],
    },

    {
      title: "Offline Courses",
      items: [
        { name: "Full Stack Development with AI", id: "" },
        { name: "Data Analytics with Gen AI", id: "" },
      ],
    },
    {
      title: "IIT & IIM Online Programs",
      items: [
        { name: "Data Science", id: "" },
        { name: "Digital Marketing", id: "" },
        { name: "AI & ML", id: "" },
        { name: "Product Management", id: "" },
      ],
    },
    {
      title: "Masterclass",
      items: [
        { name: "AI Masterclass", id: "" },
        { name: "Cloud", id: "" },
        { name: "Cyber Security", id: "" },
        { name: "Leadership", id: "" },
        { name: "Finance", id: "" },
      ],
    },
  ];

  return (
    <div className=" relative">
      <nav
        className={`  flex justify-between items-center fixed px-5 lg:px-10 top-0 left-0 w-full  z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        } ${open1 ? "bg-white shadow-md" : "bg-transparent"} ${
          open2 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Left Side */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            to={"/"}
            className="flex justify-center items-center  text-purple-500 text-2xl  w-17 h-17 font-bold"
          >
            <img
              src={logo}
              alt=""
              className={`${
                scrolled
                  ? "text-neutral-900 "
                  : "text-white brightness-0 invert"
              } ${open2 ? "brightness-100 invert-0" : " "}`}
            />
          </Link>

          {/* Nav Links */}
          <ul
            className={` hidden lg:flex lg:gap-3 xl:gap-6 text-sm font-medium  `}
          >
            <li
              onMouseEnter={() => setShowCoursesType(true)}
              onMouseLeave={() => setShowCoursesType(false)}
              // onClick={() => setShowCoursesType((prev) => !prev)}
              className={`flex justify-center items-center gap-2  px-6 py-1 h-10 rounded-md cursor-pointer
                transition-all duration-500 ease-in-out ${
                  scrolled
                    ? "text-blue-950 bg-black/10 hover:bg-black/20"
                    : "text-white bg-gray-900/30 hover:bg-gray-900/30   "
                }`}
            >
              <img
                src={navCource}
                alt=""
                className="flex justify-center items-center h-5 w-5"
              />
              Courses
            </li>
            {/* <li
              onMouseEnter={() => setOnlineCource(true)}
              onMouseLeave={() => setOnlineCource(false)}
              className={`hover:text-gray-400 flex justify-center items-center h-10 w-30  cursor-pointer ${
                scrolled ? "text-blue-950" : "text-white"
              }`}
            >
              Online Courses
            </li> */}
            <li
              className={`hover:text-gray-400 flex justify-center items-center h-10 w-30 cursor-pointer ${
                scrolled ? "text-blue-950" : "text-white"
              }`}
            >
              <img
                src={MasterClassStars}
                alt=""
                className="absolute  h-25 w-25"
              />
              Masterclass
            </li>
            <Link to={"/gallerypage"}>
              <li
                className={`flex justify-center items-center h-10 w-30 
                border-b border-transparent

                transition-all duration-500 ease-in-out ${
                  scrolled
                    ? "text-blue-950 hover:border-b-blue-900"
                    : "text-white hover:border-b-neutral-100"
                }`}
              >
                Gallery
              </li>
            </Link>
            <Link to={"/allcoursepage"}>
              {" "}
              <li
                className={`flex justify-center items-center h-10 w-30 
                border-b border-transparent

                transition-all duration-500 ease-in-out ${
                  scrolled
                    ? "text-blue-950 hover:border-b-blue-900"
                    : "text-white hover:border-b-neutral-100"
                }`}
              >
                All Courses
              </li>
            </Link>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Search Input */}
          <Link to={"/contextus"}>
            <div
              className={` hidden lg:flex justify-center items-center h-9 w-30 border-2 rounded-lg text-bold cursor-pointer  transition-all duration-100 ease-in-out ${
                scrolled
                  ? "border-blue-900 text-blue-900 "
                  : "border-white text-white "
              }`}
            >
              ENROLL NOW
            </div>
          </Link>
          {/* Notification */}
          {/* <FiBell className="text-gray-400 hover:text-white text-lg cursor-pointer" /> */}

          {/* Profile Image */}
          {/* <img
            src="https://i.pravatar.cc/40?img=3"
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          /> */}
        </div>
        <div
          className={` absolute top-15  z-40 overflow-hidden transition-all duration-500 ease-in-out  ${
            showCoursesType ? "max-h-[585px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            onMouseEnter={() => setShowCoursesType(true)}
            onMouseLeave={() => setShowCoursesType(false)}
            className="mx-20 "
          >
            <CoursesType />
          </div>
        </div>
        <div
          className={` absolute top-15 left-75 z-40 overflow-hidden rounded-xl transition-all duration-500 ease-in-out ${
            OnlineCource ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            onMouseEnter={() => setOnlineCource(true)}
            onMouseLeave={() => setOnlineCource(false)}
            className="h-full  "
          >
            <OnlineCources />
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4"></div>
        {showSearch && (
          <div className="absolute top-16 left-0 w-full px-5 py-2 bg-white shadow-md ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        )}

        <div className="flex gap-2 lg:hidden items-center">
          {/* <button
            onClick={() => {
              setShowSearch(!showSearch), setOpen2(!open2);
            }}
            className={`text-2xl flex md:hidden ${
              scrolled ? "text-neutral-900" : "text-neutral-100"
            } ${open2 ? "text-neutral-900" : "text-neutral-100"} ${
              open1 ? "hidden" : ""
            }`}
          >
            <FiSearch />
          </button> */}
          {/* 🔘 Toggle Button */}
          <button
            onClick={() => setOpenC(true)}
            className={`lg:hidden px-4 py-2  border rounded-xl flex items-center gap-2 ${
              scrolled ? "text-neutral-900" : "text-neutral-100"
            } ${open2 ? "text-neutral-900" : "text-neutral-100"}`}
          >
            <HiMenu /> Menu
          </button>

          {/* 🟢 Sidebar Menu */}
          <div
            className={`lg:hidden fixed top-0 right-0 h-full w-full overflow-y-auto bg-white shadow-md transition-transform duration-500 z-50 ${
              openC ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header with Close Button */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h2 className="font-bold text-lg">Menu</h2>
              <button onClick={() => setOpenC(false)}>
                <HiX className="text-2xl" />
              </button>
            </div>

            {/* Menu List */}
            <ul className="flex flex-col gap-4 mt-4 px-4 text-lg font-medium">
              {sections.map((section, i) => (
                <li key={i}>
                  <button
                    onClick={() => toggleDropdown(i)}
                    className="flex items-center text-black justify-between w-full py-2"
                  >
                    {section.title}
                    <HiChevronDown
                      className={`transition-transform duration-300 ${
                        active === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {active === i && (
                    <ul className="mt-2 grid grid-cols-1 gap-2 border-t pt-3 text-base text-gray-800">
                      {section.items.map((item, j) => (
                        <li key={j}>
                          {item.subItems ? (
                            <>
                              {/* Nested Toggle */}
                              <button
                                onClick={() => toggleNested(j)}
                                className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
                              >
                                {item.name}
                              </button>

                              {nestedActive === j && (
                                <ul className="ml-4 mt-2 border-l pl-3  text-gray-500 text-sm flex flex-col gap-2">
                                  {item.subItems.map((sub, k) => (
                                    <li key={k}>
                                      <Link
                                        to={`/coursespage/${sub.id}`}
                                        href="#"
                                        className="block rounded p-2 hover:bg-gray-200"
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <a
                              href="#"
                              className="block rounded-md p-2 hover:bg-gray-100"
                            >
                              {item.name}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <Link to={"/allcoursepage"}>
                <li>All Courses</li>
              </Link>
              <Link to={"/gallerypage"}>
                <li>All Gallery</li>
              </Link>

              {/* Login Button */}
              <li>
                <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
