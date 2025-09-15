import React from "react";
import { Link } from "react-router-dom";
import CoursesType from "../CoursesType/CoursesType";
import OnlineCources from "../OnlineCources/OnlineCources";
import logo from "../../assets/photos/biit-logo.png";
import { HiX, HiMenu, HiChevronDown } from "react-icons/hi";
import { useState, useEffect } from "react";
import ContextUs from "../ContextUs/ContextUs";
import dataScienceImg from "../../assets/images/data-science-img.jpg";
import dataScienceAiImg from "../../assets/images/data-science-ai-img.jpg";
import artificialIntelligence from "../../assets/images/artificial-intelligence.jpg";
import artificialIntelligence2 from "../../assets/images/artificial-intelligence+.jpg";
import mernStackDevelopment from "../../assets/images/mern-stack-development.jpg";
import mernStackDevelopment2 from "../../assets/images/mern-stack+.jpg";
import WebsiteDevelopment3D from "../../assets/images/3D-Website-Development.jpg";
import FullStackJavaDevelopment from "../../assets/images/Full-Stack-Java-Development.jpg";
import FrontEndDevelopment from "../../assets/images/Front-End-Development.jpg";
// import backEndDevelopment from "../../assets/images/Front-End-Development.jpg";
import gameDevlopment from "../../assets/images/game-devlopment.jpg";
import Modelling3DAnimation from "../../assets/images/3D-Modelling-&-Animation.jpg";
import BlenderMaster from "../../assets/images/BlenderMaster.jpg";
import MaxMaya from "../../assets/images/Max-&-Maya.jpg";
import AndroidAppDevelopment from "../../assets/images/Android-App-Development.jpg";
import CloudComputing from "../../assets/images/Cloud-Computing.jpg";
import UIUXDesigner from "../../assets/images/UI-UX-Designer.jpg";
import DigitalMarketing from "../../assets/images/Digital-Marketing.jpg";
import DigitalMarketing1 from "../../assets/images/Digital-Marketing+.jpg";
import { MdOutlineAccessTime } from "react-icons/md";
import mduRohtakImg from "../../assets/images/MDU-img.jpg";
import sikkimManipalUniversityimg from "../../assets/images/sikkim-manipal-university-img.webp";
import manipalUniversityimg from "../../assets/images/manipal-university-img.jpg";
import IIMTCollage from "../../assets/images/IIMT-Collage-img.jpg";
import IPJCollage from "../../assets/images/ipj-college-img.webp";
import { IoCalendar } from "react-icons/io5";

const AllCoursePage = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openC, setOpenC] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCoursesType, setShowCoursesType] = useState(false);
  const [OnlineCource, setOnlineCource] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
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

  const allCourses = {
    "Data Science": [
      {
        id: "data-science",
        title: "Data Science",
        tag: "Beginner",
        duration: "1 Year",
        img: dataScienceImg,
        // enrolled: "1200",
        // price: "₹4999",
      },
      {
        id: "data-science+gen-ai",
        title: "Data Science + Gen AI",
        tag: "Advanced",
        img: dataScienceAiImg,
        duration: "1.2 Year",
        // enrolled: "850",
        // price: "₹8999",
      },
    ],

    "Full Stack / Development": [
      {
        id: "mern-stack-devlopment",
        title: " MERN Stack Devlopment",
        tag: "Intermediate",
        img: mernStackDevelopment,
        duration: "7 Months",
        // enrolled: "2000",
        // price: "₹5999",
      },
      {
        id: "mern-stack-devlopment+",
        title: "MERN Stack Devlopment+",
        tag: "Advanced",
        img: mernStackDevelopment2,
        duration: "1 Year",
        // enrolled: "1500",
        // price: "₹9999",
      },
      {
        id: "full-stack-java-development",
        title: "Full Stack Java Development",
        tag: "Advanced",
        img: FullStackJavaDevelopment,
        duration: "1 Year",
        // enrolled: "1500",
        // price: "₹9999",
      },
      {
        id: "3d-website-development",
        title: "3D Website Development",
        tag: "Advanced",
        img: WebsiteDevelopment3D,
        duration: "1 Year",
        // enrolled: "1500",
        // price: "₹9999",
      },
      {
        id: "front-end-development",
        title: "Front End Development",
        tag: "Advanced",
        img: FrontEndDevelopment,
        duration: "4 Months",
        // enrolled: "1500",
        // price: "₹9999",
      },
      {
        id: "back-end-development",
        title: "Back End Development",
        tag: "Advanced",
        // img: backEndDevelopment,
        duration: "3 Months",
        // enrolled: "1500",
        // price: "₹9999",
      },
    ],

    "Game Development / 3D / Animation": [
      {
        id: "game-development",
        title: "Game Development",
        tag: "Beginner",
        img: gameDevlopment,
        duration: "2 Year",
        // enrolled: "1100",
        // price: "₹6999",
      },
      {
        id: "3d-modelling-&-animation",
        title: "3D Modelling & Animation",
        tag: "Advanced",
        img: Modelling3DAnimation,
        duration: "2 Year",
        // enrolled: "700",
        // price: "₹11999",
      },
      {
        id: "blender-master-class",
        title: "Blender Master Class",
        tag: "Advanced",
        img: BlenderMaster,
        duration: "6 Months",
        // enrolled: "700",
        // price: "₹11999",
      },
      {
        id: "max-and-maya",
        title: "Max and Maya",
        tag: "Advanced",
        img: MaxMaya,
        duration: "10 Months",
        // enrolled: "700",
        // price: "₹11999",
      },
    ],
    "App Development": [
      {
        id: "android-app-development",
        title: "Android App Development",
        tag: "Beginner",
        img: AndroidAppDevelopment,
        duration: "6 Months",
        // enrolled: "1100",
        // price: "₹6999",
      },
    ],
    "Digital Marketing": [
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        tag: "Beginner",
        img: DigitalMarketing,
        duration: "4 Months",
        // enrolled: "1100",
        // price: "₹6999",
      },
      {
        id: "digital-marketing+",
        title: "Digital Marketing+",
        tag: "Advanced",
        img: DigitalMarketing1,
        duration: "6 Months",
        // enrolled: "700",
        // price: "₹11999",
      },
    ],
    "AI & ML": [
      {
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        tag: "Beginner",
        img: artificialIntelligence,
        duration: "8 Months",
        // enrolled: "1100",
        // price: "₹6999",
      },
      {
        id: "artificial-intelligence+",
        title: "Artificial Intelligence+",
        tag: "Advanced",
        img: artificialIntelligence2,
        duration: "1 Year",
        // enrolled: "700",
        // price: "₹11999",
      },
    ],
    "Cloud / Computing": [
      {
        id: "cloud-computing",
        title: "Cloud Computing",
        tag: "Beginner",
        img: CloudComputing,
        duration: "6 Months",
        // enrolled: "1100",
        // price: "₹6999",
      },
    ],
    Designing: [
      {
        id: "ui-ux-designer",
        title: "UI/UX Designer",
        tag: "Beginner",
        img: UIUXDesigner,
        duration: "4 Months",
        // enrolled: "1100",
        // price: "₹6999",
      },
    ],
  };
  const [selectedCategory2, setSelectedCategory2] = useState("All");
  const courses2 = [
    {
      name: "BCA",
      courses2Details: [
        {
          title: "BCA By MDU Rohtak",
          school: "MDU Rohtak",
          img: mduRohtakImg,

          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCA Sikkm Manipal University",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCA Manipal University Jaipur",
          school: "Manipal University Jaipur",

          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },
    {
      name: "MCA",
      courses2Details: [
        {
          title: "MCA By MDU Rohtak",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCA Sikkm Manipal University",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,

          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCA Manipal University Jaipur",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },
    {
      name: "BBA",
      courses2Details: [
        {
          title: "BBA By MDU Rohtak",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BBA Sikkm Manipal University",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BBA Manipal University Jaipur",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },
    {
      name: "MBA",
      courses2Details: [
        {
          title: "MBA By MDU Rohtak",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MBA Sikkm Manipal University",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MBA Manipal University Jaipur",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },

    {
      name: "MA",
      courses2Details: [
        {
          title: "MA By MDU Rohtak",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MA Sikkm Manipal University",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MA Manipal University Jaipur",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },

    {
      name: "BCOM",
      courses2Details: [
        {
          title: "BCOM By MDU Rohtak",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCOM Sikkm Manipal University",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCOM Manipal University Jaipur",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },
    {
      name: "MCOM",
      courses2Details: [
        {
          title: "MCOM By MDU Rohtak",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCOM Sikkm Manipal University",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCOM Manipal University Jaipur",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },

    // {
    //   name: "Sikkm Manipal University",
    //   courses2Details: [
    //     {
    //       title: "BCA ",
    //       school: "Sikkm Manipal University",
    //       img: sikkimManipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MCA ",
    //       school: "Sikkm Manipal University",
    //       img: sikkimManipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "BBA ",
    //       school: "Sikkm Manipal University",
    //       img: sikkimManipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MBA ",
    //       school: "Sikkm Manipal University",
    //       img: sikkimManipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MA ",
    //       school: "Sikkm Manipal University",
    //       img: sikkimManipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "BCOM ",
    //       school: "Sikkm Manipal University",
    //       img: sikkimManipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MCOM ",
    //       school: "Sikkm Manipal University",
    //       img: sikkimManipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //   ],
    // },
    // {
    //   name: "Manipal University Jaipur",
    //   courses2Details: [
    //     {
    //       title: "BCA ",
    //       school: "Manipal University Jaipur",
    //       img: manipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MCA ",
    //       school: "Manipal University Jaipur",
    //       img: manipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "BBA ",
    //       school: "Manipal University Jaipur",
    //       img: manipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MBA ",
    //       school: "Manipal University Jaipur",
    //       img: manipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MA ",
    //       school: "Manipal University Jaipur",
    //       img: manipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "BCOM ",
    //       school: "Manipal University Jaipur",
    //       img: manipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MCOM ",
    //       school: "Manipal University Jaipur",
    //       img: manipalUniversityimg,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //   ],
    // },
    // {
    //   name: "IIMT Collage",
    //   courses2Details: [
    //     {
    //       title: "BCA ",
    //       school: "IIMT Collage",
    //       img: IIMTCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MCA ",
    //       school: "IIMT Collage",
    //       img: IIMTCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "BBA ",
    //       school: "IIMT Collage",
    //       img: IIMTCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MBA ",
    //       school: "IIMT Collage",
    //       img: IIMTCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MA ",
    //       school: "IIMT Collage",
    //       img: IIMTCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "BCOM ",
    //       school: "IIMT Collage",
    //       img: IIMTCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MCOM ",
    //       school: "IIMT Collage",
    //       img: IIMTCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //   ],
    // },
    // {
    //   name: "IPJ Collage ",
    //   courses2Details: [
    //     {
    //       title: "BCA ",
    //       school: "IPJ Collage",
    //       img: IPJCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MCA ",
    //       school: "IPJ Collage",
    //       img: IPJCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "BBA ",
    //       school: "IPJ Collage",
    //       img: IPJCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MBA ",
    //       school: "IPJ Collage",
    //       img: IPJCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MA ",
    //       school: "IPJ Collage",
    //       img: IPJCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "BCOM ",
    //       school: "IPJ Collage",
    //       img: IPJCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //     {
    //       title: "MCOM ",
    //       school: "IPJ Collage",
    //       img: IPJCollage,
    //       admition: "Admission Closes on - 31'st Aug, 25",
    //     },
    //   ],
    // },
  ];
  const [selectedCategory, setSelectedCategory] = useState("Data Science");
  const [selectedAllCoursesType, setSelectedAllCoursesType] = useState(
    "Professional Courses"
  );
  console.log(selectedAllCoursesType);

  const coursesButton = [
    {
      name: "Professional Courses",
    },
    {
      name: "Graduation",
    },
  ];

  return (
    <div className="bg-blue-100/50">
      {/* <div className=" relative">
        <nav
          className={`  flex justify-between items-center fixed px-5 lg:px-10 top-0 left-0 w-full  z-50 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-white shadow-md"
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
                    : "text-white brightness-100 invert-0"
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
                    : "border-blue-900 text-blue-900 "
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

          {showSearch && (
            <div className="absolute top-16 left-0 w-full px-5 py-2 bg-white shadow-md ">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          )}
        </nav>
      </div> */}
      <div
        className="h-100 px-4 md:px-20 mb-15 overflow-hidden flex flex-col items-center justify-center relative bg-gradient-to-r from-blue-950  to-purple-950 text-white  text-center 
         shadow-lg 
      "
      >
        <div className="flex flex-wrap absolute  top-0  overflow-hidden w-full h-660   ">
          {" "}
          {Array.from({ length: 1000 }).map((_, index) => (
            <div className="w-15.5  sm:w-15 md:w-16 h-15 border border-blue-900/20"></div>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold z-20">
          Discover Our Courses
        </h1>
        <p className="mt-2  md:text-lg opacity-90 z-20">
          Learn from industry experts and boost your career with mentor-led
          programs.
        </p>
      </div>

      <div className="px-4 md:px-20 mt-5">
        {" "}
        <div className="flex justify-center items-center flex-col md:flex-row gap-5 md:gap-20 w-full ">
          {coursesButton.map((coursesButton, i) => (
            <button
              key={i}
              onClick={() => setSelectedAllCoursesType(coursesButton.name)}
              className=" cursor-pointer  bg-blue-950 text-white shadow-black shadow-md hover:shadow-lg transition decoration-500 w-full md:w-[50%]  rounded-2xl text-3xl px-5 py-5"
            >
              {coursesButton.name}
            </button>
          ))}
        </div>
        <section
          className={`mt-5 ${
            selectedAllCoursesType === "Professional Courses"
              ? "block"
              : "hidden"
          }`}
        >
          {Object.entries(allCourses).map(([category, courses], idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-4xl  w-full  font-semibold mb-4 border-blue-900 text-blue-950 border-b p-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-start scroll-smooth no-scrollbar items-center  p-4 gap-6  h-full">
                {allCourses[category].map((course, index) => (
                  <Link
                    to={`/CoursesPage/${course.id}`}
                    key={index}
                    className="bg-white  no-scrollbar relative shadow-blue-900 shadow-md p-3 rounded-lg "
                  >
                    <img
                      src={course.img}
                      alt=""
                      className="h-60  w-full shadow-blue-900 shadow-md hover:shadow-lg rounded-2xl"
                    />
                    <span className="text-sm absolute top-7 left-7 bg-purple-100 text-purple-700 px-2 py-1 rounded-full inline-block mb-2">
                      {course.tag}
                    </span>
                    <h4 className="text-lg  h-15 font-semibold mt-5 mb-2">
                      {course.title}
                    </h4>
                    <div className=" flex gap-3 border-t pt-3 border-black/30 ">
                      <p className="flex gap-1 justify-center items-center text-gray-600 text-sm md:text-lg">
                        <MdOutlineAccessTime className="h-5 w-5" />
                        {course.duration}
                      </p>
                      {/* <p className="flex gap-1 justify-center items-center text-gray-600 text-sm">
                        <HiUsers className="h-5 w-5" />
                        {course.enrolled}
                      </p> */}
                    </div>
                    <p className="text-sm font-medium mt-2 text-blue-600">
                      {course.price}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}{" "}
        </section>
        <section
          className={`mt-5 ${
            selectedAllCoursesType === "Graduation" ? "block" : "hidden"
          }`}
        >
          {courses2
            .filter((cel) => {
              if (selectedCategory2 === "All") {
                return true;
              }
              return cel.name === selectedCategory2;
            })
            .map((course2, i) => (
              <div key={i} className="mb-12">
                {/* College Name */}
                <h3 className="text-4xl  w-full  font-semibold mb-4 border-blue-900 text-blue-950 border-b p-2">
                  {course2.name}
                </h3>

                {/* Cards of this College */}
                <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-6">
                  {course2.courses2Details.map((course, index) => (
                    <div
                      key={index}
                      className="bg-white  relative shadow-black/50 shadow-sm hover:shadow-md rounded-lg"
                    >
                      <img
                        src={course.img}
                        alt={course.title}
                        className="h-55 w-full rounded-t-lg"
                      />
                      <h4 className="text-lg md:text-2xl px-4 h-15 font-semibold mt-2 mb-2">
                        {course.title}
                      </h4>

                      <div className="flex gap-3 border-b pb-2 pt-3 border-black/30">
                        <p className="flex gap-1 px-4 justify-center items-center text-gray-600 text-sm md:text-lg">
                          {course.school}
                        </p>
                      </div>

                      <p className="flex justify-start gap-2 items-center text-sm lg:text-lg  py-2 px-4 font-medium text-black">
                        <IoCalendar className="text-black/80" />
                        {course.admition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </section>
      </div>
      <ContextUs showNav={true} />
    </div>
  );
};

export default AllCoursePage;
