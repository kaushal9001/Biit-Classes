import React from "react";
import emailjs from "emailjs-com";

import { useForm } from "react-hook-form";
import { useRef, useState, useEffect } from "react";
import logo from "../../assets/photos/biit-logo.png";
import { FiSearch, FiBell } from "react-icons/fi";
import CoursesType from "../CoursesType/CoursesType";
import OnlineCources from "../OnlineCources/OnlineCources";
import { HiX, HiMenu, HiChevronDown } from "react-icons/hi";
import MasterClassStars from "../../assets/photos/Stargazing.gif";
import navCource from "../../assets/photos/nav-cource-img.png";
import { Link } from "react-router-dom";
// import emailjs from "emailjs-com";
import questionMarkMan from "../../assets/photos/man.webp";
const ContextUs = ({ showNav = true }) => {
  const [data1, setData1] = useState({
    title: "",
    name: "",
    email: "",
    background: "",
    courseType: "",
    mobile: "",
    selectDomain: "",
    message: "",
  });
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

  const [activeBg, setactiveBg] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [doneStep, setDoneStep] = useState(1);
  const [formData, setFormData] = useState({
    background: "",
    courseType: "",
    domain: "",
    name: "",
    mobile: "",
    Email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
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
      title: "Web Development",
      image: "https://i.pravatar.cc/50?img=2",
      bg: "bg-blue-200",
      borderC: "border-blue-500 border",
      bgColor1: "#BFDBFE",
      bgColor2: "#BFDBFEB2",
      bgColor3: "#b8cafd2d",
      active: false,
    },
    {
      title: "AI & ML",
      image: "https://i.pravatar.cc/50?img=6",
      bg: "bg-indigo-200",
      borderC: "border-indigo-500 border",
      bgColor1: "#C7D2FE",
      bgColor2: "#C7D2FEB2",
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
    reset,
  } = useForm();

  console.log(data1);
  const onSubmit = (data) => {
    setData1(data);
    // alert("Form Submitted!");
    const data1 = {
      title: "Student From  Submission",
      message: `📌 Student From Submission:

      - Name : ${data.name}
      - Email: ${data.Email}
      - Mobile : ${data.mobile}
      - Background : ${data.background}
      - Course : ${data.selectDomain}
      - Classe : ${data.courseType}
      `,

      // Form ka message field
      time: new Date().toLocaleString(),
      // Optional
    };
    emailjs
      .send("service_9cue9ol", "template_98dridl", data1, "GdYRv0Mahzo815au3")
      .then(() => {
        alert("✅ Form Submitted Successfully!");
        reset();
      })
      .catch((error) => {
        alert("❌ Error sending email: " + error.text);
      });
  };
  return (
    <div>
      <section className=" relative">
        {showNav && (
          <div className=" relative">
            <nav
              className={` overflow-hidden flex justify-between items-center fixed  px-5 lg:px-10 top-0 left-0 w-full  z-50 transition-all duration-300 ${
                scrolled
                  ? "bg-white shadow-md"
                  : "bg-gradient-to-r from-blue-950  to-purple-950"
              } ${open1 ? "bg-white shadow-md" : "bg-transparent"} ${
                open2 ? "bg-white shadow-md" : "bg-transparent"
              }`}
            >
              <div
                className={`flex flex-wrap absolute left-0 top-0  overflow-hidden w-full h-660 ${
                  scrolled ? "hidden" : ""
                }`}
              >
                {" "}
                {Array.from({ length: 1000 }).map((_, index) => (
                  <div className="w-16 h-15 border border-blue-900/20"></div>
                ))}
              </div>
              <div className="flex items-center gap-8">
                <Link
                  to={"/"}
                  className="flex justify-center items-center  text-purple-500 text-2xl  w-17 h-17 font-bold"
                >
                  <img
                    src={logo}
                    alt=""
                    className={`${
                      scrolled ? "text-neutral-900 " : "brightness-0 invert"
                    } ${open2 ? "brightness-100 invert-0" : " "}`}
                  />
                </Link>
              </div>

              <div>
                <Link to={"/contextus"}>
                  <div
                    className={`flex  justify-center items-center h-9 w-30 border-2 rounded-lg text-bold cursor-pointer hover:text-bleu-950 transition-all duration-100 ease-in-out ${
                      scrolled
                        ? "border-blue-900 text-blue-900 "
                        : "border-white text-white "
                    }`}
                  >
                    <p className="z-60">ENROLL NOW</p>
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
                  OnlineCource
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
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

              {/* <div className="lg:hidden flex items-center gap-4"></div> */}
              {showSearch && (
                <div className="absolute top-16 left-0 w-full px-5 py-2 bg-white shadow-md ">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border rounded-md px-4 py-2 focus:outline-none"
                  />
                </div>
              )}

              {/* <div className="flex gap-2 lg:hidden items-center">
                <button
                  onClick={() => setOpenC(true)}
                  className={`lg:hidden px-4 py-2  border rounded-xl flex items-center gap-2 ${
                    scrolled ? "text-neutral-900" : "text-neutral-900"
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

                                    <li>
                      <button className="bg-red-500 text-white py-2 px-4 rounded-md w-full">
                        Login
                      </button>
                    </li>
                  </ul>
                </div>
              </div> */}
            </nav>
          </div>
        )}
      </section>
      {/* <a
        href="https://wa.me/919044948306?text=Hello%20Kaushal%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 z-100 right-6 bg-green-500 hover:bg-green-600 text-white px-3 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-9 h-9 md:w-6 md:h-6"
        />
        <span className="hidden md:flex ">Chat on WhatsApp</span>
      </a> */}
      <div>
        <a
          href="https://wa.me/919044948306?text=Hello%20Kaushal%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 justify-center fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full  shadow-lg z-100 "
        >
          {/* Outer glow pulse */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75  animate-ping "></span>

          {/* WhatsApp icon */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="relative w-6 h-6"
          />
          <span className="hidden md:flex text-sm">Chat on WhatsApp</span>
        </a>
      </div>

      {/* ----------------------------------- */}
      {/* <Link to="/contextus"> */}
      <section className=" xl:px-20 pt-25 bg-gradient-to-r relative from-blue-950  to-purple-950 pb-10">
        <div className="flex flex-wrap absolute left-0 top-0  overflow-hidden w-full h-full  ">
          {" "}
          {Array.from({ length: 1000 }).map((_, index) => (
            <div className="w-15.5  sm:w-15 md:w-16 h-15 border border-blue-900/10 "></div>
          ))}
        </div>
        <div className=" xl:h-130 flex relative flex-col text-center lg:flex-row p-5 md:p-10 items-center rounded-2xl shadow-xl  shadow-black  bg-gray-500/50 py-10">
          <div className="flex relative justify-center  lg:h-120 w-full mb-10 lg:mb-0 lg:w-1/2 ">
            <div className="xl:pr-25  justify-center fle w-full ">
              {" "}
              <h1 className="text-4xl  w-full  font-bold text-black/80 py-2">
                Need Help?
              </h1>
              <p>Connect with us & know what's best for you.</p>
            </div>
            <img
              src={questionMarkMan}
              alt=""
              className="absolute object-cover hidden lg:block -left-10 -bottom-5 h-80 w-90 "
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
                className={`h-1 w-[8vw] xl:w-40 mx-2 md:mx-5 ${
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
                className={`h-1 w-[8vw] xl:w-40 mx-2 md:mx-5 ${
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
              className="bg-white shadow-md shadow-black p-2 sm:p-10 rounded-lg w-full xl:w-[600px]"
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
                    <option value="" className="text text-gray-500">
                      Select Background
                    </option>

                    <option value=" Student"> Student</option>
                    <option value=" Graduate">Graduate</option>
                    <option value="Working Professional">
                      Working Professional
                    </option>
                  </select>
                  <div className="text-start w-full">
                    {errors.background && (
                      <sman className="text-red-500">
                        {errors.background.message}
                      </sman>
                    )}
                  </div>
                  <h2 className="text-xl text-gray-700 font-semibold mt-4 mb-4">
                    What type of classes mode are you interested in?
                  </h2>
                  <select
                    {...register("courseType", {
                      required: "courseType is required",
                    })}
                    className="w-full p-2  border rounded"
                  >
                    <option value="" className="text-gray-500">
                      Select Course Type
                    </option>
                    <option value="Online Classes">Online Classes</option>
                    <option value="Offline Classes">Offline Classes</option>
                  </select>
                  <div className="text-start w-full">
                    {errors.courseType && (
                      <span className="text-red-500 text-sm">
                        {errors.courseType.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    {" "}
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-blue-900 hover:bg-blue-950 transition duration-300 text-white px-10 py-2 rounded"
                    >
                      Next
                    </button>
                  </div>{" "}
                </div>
              )}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl text-gray-700 font-semibold mb-4">
                    Which Course interests you the most?
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
                    <option value="" className="text-gray-500">
                      Select Course
                    </option>
                    <option value=" Data Science">Data Science</option>
                    <option value="Data Science + Gen AI">
                      Data Science + Gen AI
                    </option>
                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>
                    <option value="Artificial Intelligence+">
                      Artificial Intelligence+
                    </option>
                    <option value="MERN Stack Devlopment">
                      MERN Stack Devlopment
                    </option>
                    <option value="MERN Stack Devlopment+">
                      MERN Stack Devlopment+
                    </option>
                    <option value="3D Website Development">
                      3D Website Development
                    </option>
                    <option value="Full Stack Java Development">
                      Full Stack Java Development
                    </option>
                    <option value=" Front End Development">
                      Front End Development
                    </option>
                    <option value=" Back End Development">
                      Back End Development
                    </option>
                    <option value="Game Development">Game Development</option>
                    <option value="3D Modelling & Animation">
                      3D Modelling & Animation
                    </option>
                    <option value="Blender Master Class">
                      Blender Master Class
                    </option>
                    <option value="Android App Development">
                      Android App Development
                    </option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Digital Marketing+">
                      Digital Marketing+
                    </option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="BBA">BBA</option>
                    <option value="MBA">MBA</option>
                    <option value="MA">MA</option>
                    <option value="BCOM">BCOM</option>
                    <option value="MCOM">MCOM</option>
                  </select>
                  <div className="text-start w-full">
                    {errors.selectDomain && (
                      <span className="text-red-500 text-sm">
                        {errors.selectDomain.message}
                      </span>
                    )}
                  </div>
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
                      className="bg-blue-900 hover:bg-blue-950 transition duration-300 text-white px-10 py-2  rounded"
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
                    className="w-full p-2  border rounded"
                  />
                  <div className="w-full  text-start">
                    {errors.name && (
                      <span className="text-red-500   text-sm">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className=" mt-4">
                    <div className="flex w-full ">
                      <p className="flex items-center px-2 bg-gray-100 border rounded-l">
                        +91
                      </p>
                      <input
                        {...register("mobile", {
                          required: "mobile no. is required",
                        })}
                        type="tel"
                        name="mobile"
                        minLength={10}
                        maxLength={10}
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full p-2 border-t border-b border-r rounded-r"
                      />
                    </div>
                    <div className="text-start w-full">
                      {" "}
                      {errors.mobile && (
                        <span className="text-red-500 text-sm">
                          {errors.mobile.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <input
                    {...register("Email", {
                      required: "Email is required",
                    })}
                    type="enpm rumail"
                    name="Email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full p-2 mt-4 border rounded"
                  />
                  <div className="text-start w-full">
                    {errors.Email && (
                      <span className="text-red-500 text-sm">
                        {errors.Email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between mt-5">
                    <button
                      onClick={handlePrev}
                      className="bg-gray-300 text-black px-10 py-2 rounded"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-900 hover:bg-blue-950 transition duration-300 text-white px-10 py-2 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      {/* </Link> */}
    </div>
  );
};

const StepIndicator = ({ step, currentStep, label }) => (
  <div className="flex items-center  gap-2">
    <div
      className={`w-5 h-5 sm:w-8 sm:h-8 flex justify-center items-center rounded-full 
         ${
           currentStep >= step
             ? "bg-red-500/70 text-white"
             : "bg-white border-gray-400"
         }`}
    >
      {/* {currentStep > step ? "✓" : step} */}
      {currentStep > step ? (
        <div className="h-full w-full bg-green-500/70 rounded-full flex justify-center items-center">
          ✓
        </div>
      ) : (
        step
      )}
    </div>
    <span
    // className={`text-sm ${
    //   currentStep >= step ? " font-semibold text-green-500" : "text-gray-500"
    // }`}
    >
      {currentStep == step ? (
        <div className="text-red-500">{label}</div>
      ) : (
        <div className="text-gray-500">{label}</div>
      )}
      {/* {label} */}
    </span>
  </div>
);

export default ContextUs;
