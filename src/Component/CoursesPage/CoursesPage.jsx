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
import { useForm } from "react-hook-form";
import Template from "../template-1/Template";
import Navbar from "../Navbar/Navbar";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { HiX, HiMenu, HiChevronDown } from "react-icons/hi";
import ContextUs from "../ContextUs/ContextUs";

const CoursesPage = () => {
  const [showCoursesType, setShowCoursesType] = useState(false);
  const [OnlineCource, setOnlineCource] = useState(false);
  const [hovering, setHovering] = useState(false); // Hover state
  const [clicked, setClicked] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [doneStep, setDoneStep] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
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

  // const [showSearch, setShowSearch] = useState(false);
  const [formData, setFormData] = useState({
    background: "",
    courseType: "",
    domain: "",
    name: "",
    mobile: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
    // if (currentStep < 3) setCurrentStep(currentStep + 1);
    // if (doneStep < 3) setDoneStep(doneStep + 1);
    // trigger("background");
    let fieldsToValidate = [];

    if (currentStep === 1) {
      fieldsToValidate = ["background", "courseType"];
    } else if (currentStep === 2) {
      fieldsToValidate = ["selectDomain"];
    }

    // trigger only current step fields
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    if (doneStep > 1) setDoneStep(doneStep - 1);
  };

  // const handleSubmit = () => {
  //   console.log(formData);
  //   alert("Form Submitted!");
  // };

  const [categories, setCategories] = useState([
    {
      title: "Data Science & Analytics",
      image: "https://i.pravatar.cc/50?img=1",
      bg: "bg-purple-200",
      borderC: "border-purple-500 border text-gray-700",
      bgColor1: "#E9D5FF",
      bgColor2: "#E9D5FFB2",
      bgColor3: "#fabefc23",
      active: true,
    },
    {
      title: "Software Development",
      image: "https://i.pravatar.cc/50?img=2",
      bg: "bg-blue-200",
      borderC: "border-blue-500 border",
      bgColor1: "#BFDBFE",
      bgColor2: "#BFDBFEB2",
      bgColor3: "#b8cafd2d",
      active: false,
    },
    {
      title: "Digital Marketing",
      image: "https://i.pravatar.cc/50?img=3",
      bg: "bg-yellow-200",
      borderC: "border-yellow-500 border",
      bgColor1: "#f8ef87ff",
      bgColor2: "#fdf48ccc",
      bgColor3: "#f2faa92d",
      active: false,
    },
    {
      title: "Banking & Finance",
      image: "https://i.pravatar.cc/50?img=4",
      bg: "bg-green-200",
      borderC: "border-green-500 border",
      bgColor1: "#BBF7D0",
      bgColor2: "#BBF7D0B2",
      bgColor3: "#befdb82d",
      active: false,
    },
    {
      title: "Programming Courses",
      image: "https://i.pravatar.cc/50?img=5",
      bg: "bg-red-200",
      borderC: "border-red-500 border",
      bgColor1: "#FECACA",
      bgColor2: "#FECACAB2",
      bgColor3: "#fdb8d22d",
      active: false,
    },
    {
      title: "Cybersecurity Courses",
      image: "https://i.pravatar.cc/50?img=6",
      bg: "bg-indigo-200",
      borderC: "border-indigo-500 border",
      bgColor1: "#C7D2FE",
      bgColor2: "#C7D2FEB2",
      bgColor3: "#b8cafd2d",
      active: false,
    },
  ]);

  // OnClick Handler
  const handleCategoryClick = (index) => {
    const updatedCategories = categories.map((cat, i) => ({
      ...cat,
      active: i === index, // Only clicked one is active, rest are false
    }));
    setCategories(updatedCategories);
  };
  const {
    register,
    trigger,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted!");
  };
  const [scrolled, setScrolled] = useState(false);
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
  return (
    <>
      {/* <Navbar /> */}
      {/* <nav
        className={`  flex justify-between items-center fixed px-5 lg:px-10 top-0 left-0 w-full  z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-8">
          <Link
            to={"/"}
            className="flex justify-center items-center  text-purple-500 text-2xl  w-17 h-17 font-bold"
          >
            <img
              src={logo}
              alt=""
              className={`${scrolled ? "text-neutral-900 " : "text-white "}`}
            />
          </Link>

          <ul
            className={` hidden lg:flex lg:gap-3 xl:gap-6 text-sm font-medium  `}
          >
            <li
              onMouseEnter={() => setShowCoursesType(true)}
              onMouseLeave={() => setShowCoursesType(false)}
              className={`flex justify-center items-center gap-2 text-neutral-900 px-6 py-1 h-10 rounded-md cursor-pointer
                transition-all duration-500 ease-in-out ${
                  scrolled
                    ? "text-neutral-900 bg-black/10 hover:bg-black/20"
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
            <li
              onMouseEnter={() => setOnlineCource(true)}
              onMouseLeave={() => setOnlineCource(false)}
              className={`hover:text-gray-400 flex justify-center items-center h-10 w-30 text-neutral-900 cursor-pointer ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              Online Courses
            </li>
            <li
              className={`flex justify-center items-center h-10 w-30 text-neutral-900 cursor-pointer
                border-b border-transparent
                
                transition-all duration-500 ease-in-out ${
                  scrolled
                    ? "text-neutral-900 hover:border-b-neutral-900"
                    : "text-white hover:border-b-neutral-100"
                }`}
            >
              Online Program
            </li>
            <li
              className={`hover:text-gray-400 flex justify-center items-center h-10 w-30 text-neutral-900 cursor-pointer ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              <img
                src={MasterClassStars}
                alt=""
                className="absolute  h-25 w-25"
              />
              Masterclass
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden sm:flex">
            <input
              type="text"
              placeholder="Search"
              className={`text-sm text-black placeholder-gray-400 rounded-md px-10 py-1 h-10 w-100 lg:w-50 xl:w-80 border focus:outline-none ${
                scrolled ? "text-black bg-gray-100" : "text-white bg-black/20"
              }`}
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div
            className={` hidden lg:flex justify-center items-center h-9 w-20 border-2 rounded-lg text-bold cursor-pointer hover:text-red-600 transition-all duration-100 ease-in-out ${
              scrolled
                ? "border-red-400 text-red-400 "
                : "border-red-500 text-red-500 "
            }`}
          >
            Login
          </div>
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
          className={` absolute top-15 left-85 z-40 overflow-hidden rounded-xl transition-all duration-500 ease-in-out ${
            OnlineCource ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            onMouseEnter={() => setOnlineCource(true)}
            onMouseLeave={() => setOnlineCource(false)}
            className="h-full border "
          >
            <OnlineCources />
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-2xl text-white flex md:hidden"
          >
            <FiSearch />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-white lg:hidden"
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        {showSearch && (
          <div className="absolute top-16 left-0 w-full px-5 py-2 bg-white shadow-md ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        )}

        <div
          className={`lg:hidden fixed top-0 mt-17 right-0 h-full w-64 bg-white shadow-md transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6 mt-5 px-6 text-lg font-medium">
            <li onClick={() => setOpen(false)}>Courses</li>
            <li onClick={() => setOpen(false)}>Online Courses</li>
            <li onClick={() => setOpen(false)}>Online Program</li>
            <li onClick={() => setOpen(false)}>Masterclass</li>
            <li>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* <nav
        className={`  flex justify-between items-center fixed px-5 lg:px-10 top-0 left-0 w-full  z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        } ${open1 ? "bg-white shadow-md" : "bg-transparent"} ${
          open2 ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-8">
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
              }`}
            />
          </Link>

          <ul
            className={` hidden lg:flex lg:gap-3 xl:gap-6 text-sm font-medium  `}
          >
            <li
              onMouseEnter={() => setShowCoursesType(true)}
              onMouseLeave={() => setShowCoursesType(false)}
              className={`flex justify-center items-center gap-2 text-neutral-900 px-6 py-1 h-10 rounded-md cursor-pointer
                transition-all duration-500 ease-in-out ${
                  scrolled
                    ? "text-neutral-900 bg-black/10 hover:bg-black/20"
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
            <li
              onMouseEnter={() => setOnlineCource(true)}
              onMouseLeave={() => setOnlineCource(false)}
              className={`hover:text-gray-400 flex justify-center items-center h-10 w-30 text-neutral-900 cursor-pointer ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              Online Courses
            </li>
            <li
              className={`flex justify-center items-center h-10 w-30 text-neutral-900 cursor-pointer
                border-b border-transparent
                
                transition-all duration-500 ease-in-out ${
                  scrolled
                    ? "text-neutral-900 hover:border-b-neutral-900"
                    : "text-white hover:border-b-neutral-100"
                }`}
            >
              Online Program
            </li>
            <li
              className={`hover:text-gray-400 flex justify-center items-center h-10 w-30 text-neutral-900 cursor-pointer ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              <img
                src={MasterClassStars}
                alt=""
                className="absolute  h-25 w-25"
              />
              Masterclass
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden sm:flex">
            <input
              type="text"
              placeholder="Search"
              className={`text-sm text-black placeholder-gray-400 rounded-md px-10 py-1 h-10 w-100 lg:w-50 xl:w-80 border focus:outline-none ${
                scrolled ? "text-black bg-gray-100" : "text-white bg-black/20"
              }`}
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div
            className={` hidden lg:flex justify-center items-center h-9 w-20 border-2 rounded-lg text-bold cursor-pointer hover:text-red-600 transition-all duration-100 ease-in-out ${
              scrolled
                ? "border-red-400 text-red-400 "
                : "border-red-500 text-red-500 "
            }`}
          >
            Login
          </div>
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
          className={` absolute top-15 left-85 z-40 overflow-hidden rounded-xl transition-all duration-500 ease-in-out ${
            OnlineCource ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            onMouseEnter={() => setOnlineCource(true)}
            onMouseLeave={() => setOnlineCource(false)}
            className="h-full border "
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
          <button
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
          </button>

          <button
            onClick={() => setOpenC(true)}
            className={`lg:hidden px-4 py-2  border rounded-xl flex items-center gap-2 ${
              scrolled ? "text-neutral-900" : "text-neutral-100"
            } ${open2 ? "text-neutral-900" : "text-neutral-100"}`}
          >
            <HiMenu /> Menu
          </button>

          <div
            className={`lg:hidden fixed top-0 right-0 h-full w-full overflow-y-auto bg-white shadow-md transition-transform duration-500 z-50 ${
              openC ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h2 className="font-bold text-lg">Menu</h2>
              <button onClick={() => setOpenC(false)}>
                <HiX className="text-2xl" />
              </button>
            </div>

            <ul className="flex flex-col gap-4 mt-4 px-4 text-lg font-medium">
              {sections.map((section, i) => (
                <li key={i}>
                  <button
                    onClick={() => toggleDropdown(i)}
                    className="flex items-center justify-between w-full py-2"
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
                              <button
                                onClick={() => toggleNested(j)}
                                className="flex items-center justify-between w-full p-2 rounded hover:bg-gray-100"
                              >
                                {item.name}
                              </button>

                              {nestedActive === j && (
                                <ul className="ml-4 mt-2 border-l pl-3 text-gray-500 text-sm flex flex-col gap-2">
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

              <li>
                <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className=" relative">
        <nav
          className={`  flex justify-between gap-full  items-center fixed px-5 lg:px-10 top-0 left-0 w-full  z-50 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-transparent"
          } ${open1 ? "bg-white shadow-md" : "bg-transparent"} ${
            open2 ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          {/* Left Side */}
          <div className="flex items-center ">
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
          </div>

          <div>
            <Link to={"/contextus"}>
              <div
                className={`flex justify-center items-center h-9 w-30 border-2 rounded-lg text-bold cursor-pointer hover:text-bleu-950 transition-all duration-100 ease-in-out ${
                  scrolled
                    ? "border-blue-900 text-blue-900 "
                    : "border-white text-white "
                }`}
              >
                ENROLL NOW
              </div>
            </Link>
          </div>
          <div
            className={` absolute top-15  z-40 overflow-hidden transition-all duration-500 ease-in-out  ${
              showCoursesType
                ? "max-h-[585px] opacity-100"
                : "max-h-0 opacity-0"
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
            className={` absolute top-15 left-85 z-40 overflow-hidden rounded-xl transition-all duration-500 ease-in-out ${
              OnlineCource ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              onMouseEnter={() => setOnlineCource(true)}
              onMouseLeave={() => setOnlineCource(false)}
              className="h-full border "
            >
              <OnlineCources />
            </div>
          </div>

          <div className="hidden  items-center gap-4"></div>
          {showSearch && (
            <div className="absolute top-16 left-0 w-full px-5 py-2 bg-white shadow-md ">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          )}

          {/* <div className="flex gap-2 lg:hidden items-center"> */}
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
          {/* <button
              onClick={() => setOpenC(true)}
              className={`lg:hidden px-4 py-2  border rounded-xl flex items-center gap-2 ${
                scrolled ? "text-neutral-900" : "text-neutral-100"
              } ${open2 ? "text-neutral-900" : "text-neutral-100"}`}
            >
              <HiMenu /> Menu
            </button> */}

          {/* 🟢 Sidebar Menu */}
          {/* <div
              className={`lg:hidden fixed top-0 right-0 h-full w-full overflow-y-auto bg-white shadow-md transition-transform duration-500 z-50 ${
                openC ? "translate-x-0" : "translate-x-full"
              }`}
            > */}
          {/* Header with Close Button */}
          {/* <div className="flex justify-between items-center px-4 py-3 border-b">
                <h2 className="font-bold text-lg">Menu</h2>
                <button onClick={() => setOpenC(false)}>
                  <HiX className="text-2xl" />
                </button>
              </div> */}

          {/* Menu List */}
          {/* <ul className="flex flex-col gap-4 mt-4 px-4 text-lg font-medium">
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
                              <> */}
          {/* Nested Toggle */}
          {/* <button
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
                ))} */}

          {/* Login Button */}
          {/* <li>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
                    Login
                  </button>
                </li>
              </ul> */}
          {/* </div>
          </div> */}
        </nav>
      </div>
      <Template />

      {/* <section className="relative xl:px-20 pt-10 ">
        <div className=" xl:h-130 flex  flex-col text-center lg:flex-row p-5 md:p-10 items-center bg-red-500/10 py-10">
          <div className="flex  justify-center border h-120 w-full mb-10 lg:mb-0 lg:w-1/2">
            <div className="xl:pr-25  justify-center fle w-full border">
              {" "}
              <h1 className="text-4xl  w-full border font-bold text-black/80 py-2">
                Need Help?
              </h1>
              <p>Connect with us & know what's best for you.</p>
            </div>
            <img
              src=""
              alt=""
              className="absolute top-50 xl:bottom-0 h-80 w-90 "
            />
          </div>
          <div className="flex  flex-col items-center mb-10 w-full xl:p-2 ">
            <div className="flex  text-[10px] items-center mb-10">
              <StepIndicator
                step={1}
                currentStep={currentStep}
                doneStep={doneStep}
                label="About"
                className=""
              />
              <div
                className={`h-1 w-[5vw] xl:w-40 mx-5 ${
                  currentStep > 1 ? "bg-gray-300" : "bg-gray-300"
                } `}
              ></div>
              <StepIndicator
                step={2}
                currentStep={currentStep}
                doneStep={doneStep}
                label="Preferences"
              />
              <div
                className={`h-1 w-[5vw] xl:w-40 mx-5 ${
                  currentStep > 2 ? "bg-gray-300" : "bg-gray-300"
                }`}
              ></div>
              <StepIndicator
                step={3}
                currentStep={currentStep}
                doneStep={doneStep}
                label="Details"
              />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-2 sm:p-10 rounded-lg w-full xl:w-[600px]"
            >
              {currentStep === 1 && (
                <div>
                  <h2 className="text-xl text-gray-700 font-semibold mb-4">
                    Tell us about your background
                  </h2>
                  <select
                    name="background"
                    {...register("background", {
                      required: "bacground is required",
                    })}
                    value={formData.background}
                    onChange={handleChange}
                    className="w-full p-2  border rounded"
                  >
                    <option value="" className="text">
                      Select Background
                    </option>
                    <option value="School Student">School Student</option>
                    <option value=" Collage Student">Collage Student</option>
                    <option value=" Graduate/Not Working">
                      Graduate/Not Working
                    </option>
                    <option value="Working Professional">
                      Working Professional
                    </option>
                  </select>
                  {errors.background && (
                    <sman className="text-red-500">
                      {errors.background.message}
                    </sman>
                  )}
                  <h2 className="text-xl text-gray-700 font-semibold mt-4 mb-4">
                    What type of course are you interested in?
                  </h2>
                  <select
                    {...register("courseType", {
                      required: "courseType is required",
                    })}
                    className="w-full p-2  border rounded"
                  >
                    <option value="">Select Course Type</option>
                    <option value="Full Time">Upskilling Course</option>
                    <option value="Part Time">Online Degree</option>
                  </select>
                  {errors.courseType && (
                    <span className="text-red-500 text-sm">
                      {errors.courseType.message}
                    </span>
                  )}
                  <div className="mt-4">
                    {" "}
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-red-400 text-white px-10 py-2 rounded"
                    >
                      Next
                    </button>
                  </div>{" "}
                </div>
              )}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl text-gray-700 font-semibold mb-4">
                    Which domain interests you the most?
                  </h2>
                  <select
                    name="selectDomain"
                    value={formData.selectDomain}
                    onChange={handleChange}
                    className="w-full p-2  border rounded"
                    {...register("selectDomain", {
                      required: "SelectDomain is required",
                    })}
                  >
                    <option value="">Select Domain</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="UI/UX Design">
                      Digital Marketing With AI
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                  {errors.selectDomain && (
                    <span className="text-red-500 text-sm">
                      {errors.selectDomain.message}
                    </span>
                  )}
                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="bg-gray-300 text-black px-10 py-2 rounded"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-red-400 text-white px-10 py-2  rounded"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-xl text-gray-700 font-semibold mb-4">
                    Enter Your Details
                  </h2>
                  <input
                    {...register("name", {
                      required: "name is required",
                    })}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                  <div className="flex mb-4">
                    <p className="flex items-center px-2 bg-gray-100 border rounded-l">
                      +91
                    </p>
                    <input
                      {...register("mobile", {
                        required: "mobile no. is required",
                      })}
                      type="text"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full p-2 border-t border-b border-r rounded-r"
                    />
                    {errors.mobile && (
                      <span className="text-red-500 text-sm">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={handlePrev}
                      className="bg-gray-300 text-black px-10 py-2 rounded"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-red-400 text-white px-10 py-2 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section> */}
      <ContextUs showNav={false} />
    </>
  );
};
// const StepIndicator = ({ step, currentStep, label }) => (
//   <div className="flex items-center gap-2">
//     <div
//       className={`w-5 h-5 sm:w-8 sm:h-8 flex justify-center items-center rounded-full border ${
//         currentStep >= step
//           ? "bg-red-500/70 text-white"
//           : "bg-white border-gray-400"
//       }`}
//     >
//       {/* {currentStep > step ? "✓" : step} */}
//       {currentStep > step ? (
//         <div className="h-full w-full bg-green-500/70 rounded-full flex justify-center items-center">
//           ✓
//         </div>
//       ) : (
//         step
//       )}
//     </div>
//     <span
//     // className={`text-sm ${
//     //   currentStep >= step ? " font-semibold text-green-500" : "text-gray-500"
//     // }`}
//     >
//       {currentStep == step ? (
//         <div className="text-red-500">{label}</div>
//       ) : (
//         <div className="text-gray-500">{label}</div>
//       )}
//       {/* {label} */}
//     </span>
//   </div>
// );

export default CoursesPage;
