import React from "react";
import { useRef, useState, useEffect } from "react";
import "../HomePage/HomePage.css";
import Navbar from "../../Component/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { BsStars } from "react-icons/bs";
import { IoCalendar } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import PersonalizedLearningImg from "../../assets/photos/PersonalizedLearningImg.png";
import CareerAssistanceImg from "../../assets/photos/CareerAssistanceImg.png";
import InteractiveSessionsImg from "../../assets/photos/InteractiveSessionsImg.png";
import { MdWork } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import logo from "../../assets/photos/biit-logo.png";
import studentR from "../../assets/photos/student-r.png";
import { HiUsers } from "react-icons/hi";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import arrow from "../../assets/photos/arrow.gif";
import BGFlowGradient from "../../assets/photos/BGFlowGradient_30kb.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import questionMarkMan from "../../assets/photos/man.webp";
import { Link } from "react-router-dom";
import ContextUs from "../ContextUs/ContextUs";
import dataScienceButton from "../../assets/photos/data-science-button-img.jpeg";
import FullStackDevelopmentButton from "../../assets/photos/Full-Stack-Development-button-img.jpeg";
import DigitalMarketingButton from "../../assets/photos/Digital-Marketing-Button-img.jpeg";
import GameDevelopment3DAnimationButton from "../../assets/photos/Game-Development-3D-Animation-button-img.webp";
import AppDevelopmentBotton from "../../assets/photos/App-Development-Botton-img.webp";
import AIMLBotton from "../../assets/photos/AI-&-ML-Botton img.jpg";
import CloudComputingButton from "../../assets/photos/Cloud-Computing-Button-img.webp";
import uiuxbutton from "../../assets/photos/ui-ux-button-img.webp";
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
import mduRohtakImg from "../../assets/images/MDU-img.jpg";
import sikkimManipalUniversityimg from "../../assets/images/sikkim-manipal-university-img.webp";
import manipalUniversityimg from "../../assets/images/manipal-university-img.jpg";
import IIMTCollage from "../../assets/images/IIMT-Collage-img.jpg";
import IPJCollage from "../../assets/images/ipj-college-img.webp";

import Ibm from "../../assets/images/download-removebg-preview4.png";
import Ey from "../../assets/images/download-removebg-preview5.png";
import TigerAnalytics from "../../assets/images/download-removebg-preview6.png";
import Diageo from "../../assets/images/download-removebg-preview7.png";
import Flipkart from "../../assets/images/download-removebg-preview8.png";
import Deepak from "../../assets/images/download-removebg-preview9.png";
import Kpmg from "../../assets/images/download-removebg-preview10.png";
import Manipalhospital from "../../assets/images/download-removebg-preview11.png";
import Accenture from "../../assets/images/download-removebg-preview12.png";
import Aakaar from "../../assets/images/download-removebg-preview13.png";
import Loyalyticsai from "../../assets/images/download-removebg-preview14.png";
import Stablemony from "../../assets/images/download-removebg-preview15.png";
import Genpact from "../../assets/images/download-removebg-preview16.png";
import Unext from "../../assets/images/download-removebg-preview17.png";
import Mathco from "../../assets/images/download-removebg-preview18.png";
import Ltimindtree from "../../assets/images/download-removebg-preview19.png";
import Cognizant from "../../assets/images/download-removebg-preview20.png";
import Delhivery from "../../assets/images/download-removebg-preview21.png";
import masterclasshuman from "../../assets/photos/masterclass_human_web.webp";

import RamjeetSir from "../../assets/images/Ramjeet Sir.jpg";
import RajeshSir from "../../assets/images/Rajesh Sir.jpg";
import JasmeherSir from "../../assets/images/Jasmeher Sir.jpg";
import SwatiMam from "../../assets/images/swati mam.jpg";
import shashanksir from "../../assets/images/shashank-sir.jpg";
import sirmam from "../../assets/images/sir-mam.png";
// const cCategories = [
//   "All",
//   "MBA",
//   "BBA",
//   "BCA",
//   "MCA",
//   "MA",
//   "BA",
//   "BSc",
//   "MSc",
// ];
const cCategories = {
  DcCategories: ["All", "BCA", "MCA", "BBA", "MBA", "MA", "BCOM", "MCOM"],
  IcCategories: [
    "All",
    "MDU Rohtak",
    "Sikkm Manipal University",
    "Manipal University Jaipur",
    "IIMT Collage",
    "IPJ Collage ",
    // "BBA",
    // "BCA",
    // "MCA",
    // "MA",
    // "BA",
    // "BSc",
    // "MSc",
  ],
};

const cCategories2 = ["All", "BCA", "MCA", "BBA", "MBA", "MA", "BCOM", "MCOM"];
const degInsi = ["View By Degree", "View By Institute"];
// const [selectedcCategories, setSelectedcCategories] = useState("All");

const features = [
  {
    title: "Personalized Learning",
    desc: "Discover a personalized path with hands-on practical projects.",
    icon: PersonalizedLearningImg,
  },
  {
    title: "Career Assistance",
    desc: "Get guidance and support for your career growth.",
    icon: CareerAssistanceImg,
  },
  {
    title: "Interactive Sessions",
    desc: "Engage in live interactive learning sessions.",
    icon: InteractiveSessionsImg,
  },
];

const HomePage = () => {
  const testimonials = [
    {
      feedback:
        "When I started the MERN Stack course, I had no prior coding experience and was honestly quite nervous. But the trainers broke down each concept in such a clear and approachable way that it quickly became easier to grasp. Instead of just focusing on theory, we got hands-on experience by building real-world projects like blog applications and portfolio websites. The mentors were incredibly supportive—even during late-night debugging sessions. This course truly gave me the confidence to proudly call myself a developer.",
      name: "Aryan jarial",
      role: "Data Analyst, Petpooja",
      image: studentR,
    },
    {
      feedback:
        "I had a fantastic experience at BIIT Classes! The faculty is highly knowledgeable and supportive. The teaching methodology is clear and practical, especially in courses like Python, Java, and Data Analytics. The hands-on approach really helped me gain confidence. Highly recommended for anyone looking to upskill in tech!",
      name: "Vanshika Chauhan",
      role: "Web Developer, CodeSoft",
      image: studentR,
    },
    {
      feedback:
        "If you're a self-motivated BCA/MCA student seeking practical, project-based learning in a well-structured environment—and you don’t mind occasional schedule shifts—BIIT Classes is a solid choice in Uttam Nagar. The experienced faculty and smart-class setup offer definite advantages, especially over purely theoretical coaching centers.",
      name: "Riya Sangwan",
      role: "ML Engineer, XYZ Corp",
      image: studentR,
    },
    {
      feedback:
        "BIIT Classes truly stands out for MCA/BCA coaching. Their structured curriculum, interactive teaching, and regular doubt sessions make learning smooth and effective. A reliable choice for serious computer science students.!!",
      name: "Ayush Joshi",
      role: "ML Engineer, XYZ Corp",
      image: studentR,
    },
    {
      feedback:
        "I have had a great experience with the BCA classes so far. The curriculum is well-structured and covers all the important subjects like programming languages (C, C++, Java, Python), database management, networking, web development, and computer fundamentals. The faculty is knowledgeable, supportive, and always ready to help with doubts, both during and after class.",
      name: "Karandeep Singh",
      role: "ML Engineer, XYZ Corp",
      image: studentR,
    },
    {
      feedback:
        "I have joined here for the Java professional training. they provide the best solution with the practical oriented class. I am very thankful to biit classes. Now I am working as a Java developer in the MNC company.",
      name: "Kaushal Verma",
      role: "ML Engineer, XYZ Corp",
      image: studentR,
    },
    {
      feedback:
        "If you're thinking about joining a tech course, Biit Classes is a solid choice. The way they teach languages is simple and clear — perfect for beginners. I really liked the environment and the way concepts are explained",
      name: "Madhur",
      role: "ML Engineer, XYZ Corp",
      image: studentR,
    },
    {
      feedback:
        "BIIT Classes is the best coaching center for BCA and MCA students. Their programming language sessions are crystal clear, and the teachers are very supportive. What makes them stand out even more is their training in 3D web development using THREE.js, which adds a creative and modern edge to the learning process",
      name: "Rohan Rai",
      role: "ML Engineer, XYZ Corp",
      image: studentR,
    },
    {
      feedback:
        "This institute offers a well-organized curriculum for both BCA and MCA students. The faculty members are highly knowledgeable, supportive, and always ready to clear doubts, whether related to academics or career guidance. The classroom environment is student-friendly and interactive, and the management is professional and responsive.",
      name: "Siya Jindal",
      role: "ML Engineer, XYZ Corp",
      image: studentR,
      // star: {<MdOutlineStarPurple500 />},
    },
  ];

  const scrollRef = useRef(null);
  const [cards, setCards] = useState([...testimonials]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (scrollRef.current) {
  //       if (
  //         scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
  //         scrollRef.current.scrollWidth
  //       ) {
  //         // Reset to start when reach end
  //         scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
  //       } else {
  //         scrollRef.current.scrollBy({ left: 1, behavior: "smooth" }); // speed
  //       }
  //     }
  //   }, 20); // speed control (lower = faster)

  //   return () => clearInterval(interval);
  // }, []);

  const handleScrollEnd = () => {
    const c = scrollRef.current;
    if (!c) return;

    const maxScroll = c.scrollWidth - c.clientWidth;

    // 👉 If user reaches end, append testimonials again
    if (c.scrollLeft >= maxScroll - 50) {
      setCards((prev) => [...prev, ...testimonials]);
    }

    // if (c.scrollLeft <= 50) {
    //   setCards((prev) => [...testimonials, ...prev]);

    //   // 🪄 Trick: jump scroll position ahead by 1 set (so user doesn’t see a jump)
    //   requestAnimationFrame(() => {
    //     c.scrollLeft += testimonials.length * 320; // cardWidth
    //   });
    // }
  };

  const scroll = (dir) => {
    const c = scrollRef.current;
    if (!c) return;
    const step = 320; // ek card ki width approx
    c.scrollBy({ left: dir === "right" ? step : -step, behavior: "smooth" });

    // check if end reached
    setTimeout(handleScrollEnd, 400);
  };
  // const scroll = (direction) => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({
  //       left: direction === "left" ? -500 : 500,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const [activeTab, setActiveTab] = useState("All");
  const [active2Tab, setActive2Tab] = useState("All");
  const [activedeg, setActivedeg] = useState(degInsi[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const categoriess =
    activedeg === "View By Degree"
      ? cCategories.DcCategories
      : cCategories.IcCategories;
  useEffect(() => {
    setActiveTab("All");
  }, [activedeg]);

  const cardData = [
    {
      name: "Rashid Ahmad",
      job: "First Job",
      course: "Decode Python With DSA Course",
      image: "https://i.pravatar.cc/100?img=5",
      company: "Flipkart",
      tag: "Programming Courses",
    },
    {
      name: "Anjali Sharma",
      job: "Placed at Infosys",
      course: "Java + DSA Course",
      image: "https://i.pravatar.cc/100?img=10",
      company: "Amazon",
      tag: "Tech Courses",
    },
    {
      name: "Anjali Sharma",
      job: "Placed at Infosys",
      course: "Java + DSA Course",
      image: "https://i.pravatar.cc/100?img=10",
      company: "Amazon",
      tag: "Tech Courses",
    },
    {
      name: "Anjali Sharma",
      job: "Placed at Infosys",
      course: "Java + DSA Course",
      image: "https://i.pravatar.cc/100?img=10",
      company: "Amazon",
      tag: "Tech Courses",
    },
    {
      name: "Anjali Sharma",
      job: "Placed at Infosys",
      course: "Java + DSA Course",
      image: "https://i.pravatar.cc/100?img=10",
      company: "Amazon",
      tag: "Tech Courses",
    },
    {
      name: "Anjali Sharma",
      job: "Placed at Infosys",
      course: "Java + DSA Course",
      image: "https://i.pravatar.cc/100?img=10",
      company: "Amazon",
      tag: "Tech Courses",
    },
    {
      name: "Anjali Sharma",
      job: "Placed at Infosys",
      course: "Java + DSA Course",
      image: "https://i.pravatar.cc/100?img=10",
      company: "Amazon",
      tag: "Tech Courses",
    },
    {
      name: "Anjali Sharma",
      job: "Placed at Infosys",
      course: "Java + DSA Course",
      image: "https://i.pravatar.cc/100?img=10",
      company: "Amazon",
      tag: "Tech Courses",
    },
  ];

  // const courses = [
  //   {
  //     title: "Data Science With Generative AI Course",
  //     duration: "6 months",
  //     enrolled: "500+ Enrolled",
  //     tag: "Bestseller",
  //     price: "₹26,999/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics Course - Hinglish",
  //     duration: "8 months",
  //     enrolled: "1000+ Enrolled",
  //     tag: "Skills",
  //     price: "₹8,000/-",
  //     language: "Hinglish",
  //   },
  //   {
  //     title: "Data Analytics Course",
  //     duration: "6 months",
  //     enrolled: "500+ Enrolled",
  //     tag: "Popular",
  //     price: "₹26,999/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics Course",
  //     duration: "6 months",
  //     enrolled: "500+ Enrolled",
  //     tag: "Popular",
  //     price: "₹26,999/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics with Gen AI (Offline Batch)",
  //     duration: "6 months",
  //     enrolled: "98 Enrolled",
  //     tag: "Offline",
  //     price: "₹45,000/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics with Gen AI (Offline Batch)",
  //     duration: "6 months",
  //     enrolled: "98 Enrolled",
  //     tag: "Offline",
  //     price: "₹45,000/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics with Gen AI (Offline Batch)",
  //     duration: "6 months",
  //     enrolled: "98 Enrolled",
  //     tag: "Offline",
  //     price: "₹45,000/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics with Gen AI (Offline Batch)",
  //     duration: "6 months",
  //     enrolled: "98 Enrolled",
  //     tag: "Offline",
  //     price: "₹45,000/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics with Gen AI (Offline Batch)",
  //     duration: "6 months",
  //     enrolled: "98 Enrolled",
  //     tag: "Offline",
  //     price: "₹45,000/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics with Gen AI (Offline Batch)",
  //     duration: "6 months",
  //     enrolled: "98 Enrolled",
  //     tag: "Offline",
  //     price: "₹45,000/-",
  //     language: "English",
  //   },
  //   {
  //     title: "Data Analytics with Gen AI (Offline Batch)",
  //     duration: "6 months",
  //     enrolled: "98 Enrolled",
  //     tag: "Offline",
  //     price: "₹45,000/-",
  //     language: "English",
  //   },
  // ];

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

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("Data Science");

  const handleCategoryClick2 = (cat) => {
    setSelectedCategory(cat.title); // category ka title select hoga
  };
  // const [categories, setCategories] = useState([
  //   {
  //     title: "Data Science & Analytics",
  //     image: "https://i.pravatar.cc/50?img=1",
  //     bg: "bg-purple-200",
  //     bg2: "from-purple-200 from-10% via-white via-30%  to-white to-90%",
  //     borderC: " border-purple-500 border text-gray-700",
  //     bgColor1: "#E9D5FF", // purple-200
  //     bgColor2: "#E9D5FFB2", // semi-transparent
  //     bgColor3: "#fabefc23",
  //     active: true,
  //   },
  //   {
  //     title: "Software Development",
  //     image: "https://i.pravatar.cc/50?img=2",
  //     bg: "bg-blue-200",
  //     bg2: "from-blue-200 from-10% via-white via-30%  to-white to-90%",
  //     hover: "from-blue-200 from-100% via-white via-30%  to-white to-90%",
  //     borderC: "border-blue-500 border",
  //     bgColor1: "#BFDBFE", // blue-200
  //     bgColor2: "#BFDBFEB2",
  //     bgColor3: "#b8cafd2d",
  //   },
  //   {
  //     title: "Digital Marketing",
  //     image: "https://i.pravatar.cc/50?img=3",
  //     bg: "bg-yellow-200",
  //     bg2: "from-yellow-200 from-10% via-white via-30%  to-white to-90%",
  //     borderC: "border-yellow-500 border",
  //     bgColor1: "#f8ef87ff", // yellow-200
  //     bgColor2: "#fdf48ccc",
  //     bgColor3: "#f2faa92d",
  //   },
  //   {
  //     title: "Banking & Finance",
  //     image: "https://i.pravatar.cc/50?img=4",
  //     bg: "bg-green-200",
  //     bg2: "from-green-200 from-10% via-white via-30%  to-white to-90%",
  //     borderC: "border-green-500 border",
  //     bgColor1: "#BBF7D0", // green-200
  //     bgColor2: "#BBF7D0B2",
  //     bgColor3: "#befdb82d",
  //   },
  //   {
  //     title: "Programming Courses",
  //     image: "https://i.pravatar.cc/50?img=5",
  //     bg: "bg-red-200",
  //     bg2: "from-red-200 from-10% via-white via-30%  to-white to-90%",
  //     borderC: "border-red-500 border",
  //     bgColor1: "#FECACA", // red-200
  //     bgColor2: "#FECACAB2",
  //     bgColor3: "#fdb8d22d",
  //   },
  //   {
  //     title: "Cybersecurity Courses",
  //     image: "https://i.pravatar.cc/50?img=6",
  //     bg: "bg-indigo-200",
  //     bg2: "from-indigo-200 from-10% via-white via-30%  to-white to-90%",
  //     borderC: "border-indigo-500 border",
  //     bgColor1: "#C7D2FE", // indigo-200
  //     bgColor2: "#C7D2FEB2",
  //     bgColor3: "#b8cafd2d",
  //   },
  // ]);

  // const handleCategoryClick = (index) => {
  //   const updatedCategories = categories.map((cat, i) => ({
  //     ...cat,
  //     active: i === index, // Set active true for clicked index, false for others
  //   }));
  //   setCategories(updatedCategories);
  // };
  // const courses2 = {
  //   MCA: [
  //     {
  //       title: "Data Science With Generative AI Course",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //     {
  //       title: "Data Analytics Course - Hinglish",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //     {
  //       title: "Data Analytics Course",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //     {
  //       title: "Data Analytics Course",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //   ],
  //   BBA: [
  //     {
  //       title: "Data Analytics with Gen AI (Offline Batch)",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //     {
  //       title: "Data Analytics with Gen AI (Offline Batch)",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //     {
  //       title: "Data Analytics with Gen AI (Offline Batch)",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //     {
  //       title: "Data Analytics with Gen AI (Offline Batch)",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //   ],
  //   MBA: [
  //     {
  //       title: "Data Analytics with Gen AI (Offline Batch)",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //     {
  //       title: "Data Analytics with Gen AI (Offline Batch)",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //     {
  //       title: "Data Analytics with Gen AI (Offline Batch)",
  //       school: "School University",
  //       admition: "Admission Closes on - 31'st Aug, 25",
  //     },
  //   ],
  // };

  const [selectedCategory2, setSelectedCategory2] = useState("All");
  const courses2 = [
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
    {
      name: "MDU Rohtak",
      courses2Details: [
        {
          title: "BCA",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCA",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BBA",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MBA",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MA",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCOM",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCOM",
          school: "MDU Rohtak",
          img: mduRohtakImg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },
    {
      name: "Sikkm Manipal University",
      courses2Details: [
        {
          title: "BCA ",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCA ",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BBA ",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MBA ",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MA ",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCOM ",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCOM ",
          school: "Sikkm Manipal University",
          img: sikkimManipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },
    {
      name: "Manipal University Jaipur",
      courses2Details: [
        {
          title: "BCA ",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCA ",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BBA ",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MBA ",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MA ",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCOM ",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCOM ",
          school: "Manipal University Jaipur",
          img: manipalUniversityimg,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },
    {
      name: "IIMT Collage",
      courses2Details: [
        {
          title: "BCA ",
          school: "IIMT Collage",
          img: IIMTCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCA ",
          school: "IIMT Collage",
          img: IIMTCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BBA ",
          school: "IIMT Collage",
          img: IIMTCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MBA ",
          school: "IIMT Collage",
          img: IIMTCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MA ",
          school: "IIMT Collage",
          img: IIMTCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCOM ",
          school: "IIMT Collage",
          img: IIMTCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCOM ",
          school: "IIMT Collage",
          img: IIMTCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },
    {
      name: "IPJ Collage ",
      courses2Details: [
        {
          title: "BCA ",
          school: "IPJ Collage",
          img: IPJCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCA ",
          school: "IPJ Collage",
          img: IPJCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BBA ",
          school: "IPJ Collage",
          img: IPJCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MBA ",
          school: "IPJ Collage",
          img: IPJCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MA ",
          school: "IPJ Collage",
          img: IPJCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "BCOM ",
          school: "IPJ Collage",
          img: IPJCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
        {
          title: "MCOM ",
          school: "IPJ Collage",
          img: IPJCollage,
          admition: "Admission Closes on - 31'st Aug, 25",
        },
      ],
    },

    // MCA: [
    //   {
    //     title: "Data Science With Generative AI Course",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    //   {
    //     title: "Data Analytics Course - Hinglish",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    //   {
    //     title: "Data Analytics Course",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    //   {
    //     title: "Data Analytics Course",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    // ],
    // BBA: [
    //   {
    //     title: "Data Analytics with Gen AI (Offline Batch)",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    //   {
    //     title: "Data Analytics with Gen AI (Offline Batch)",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    //   {
    //     title: "Data Analytics with Gen AI (Offline Batch)",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    //   {
    //     title: "Data Analytics with Gen AI (Offline Batch)",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    // ],
    // MBA: [
    //   {
    //     title: "Data Analytics with Gen AI (Offline Batch)",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    //   {
    //     title: "Data Analytics with Gen AI (Offline Batch)",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    //   {
    //     title: "Data Analytics with Gen AI (Offline Batch)",
    //     school: "School University",
    //     admition: "Admission Closes on - 31'st Aug, 25",
    //   },
    // ],
  ];

  const courses3 = [
    // {
    //   title: "Foundations of Stock Trading",
    //   school: "School University",
    //   admition: "Admission Closes on - 31'st Aug, 25",
    //   tag: "Free",
    //   duration: "6 months",
    //   enrolled: "98 Enrolled",
    // },
    // {
    //   title: "Foundations of Stock Trading",
    //   school: "School University",
    //   admition: "Admission Closes on - 31'st Aug, 25",
    //   tag: "Free",
    //   duration: "6 months",
    //   enrolled: "98 Enrolled",
    // },

    {
      name: "MCA",
      courses2Details: [
        {
          title: "Foundations of Stock Trading",
          school: "School University",
          admition: "Admission Closes on - 31'st Aug, 25",
          tag: "Free",
          duration: "6 months",
          enrolled: "98 Enrolled",
        },
      ],
    },
    {
      name: "BCA",
      courses2Details: [],
    },
    {
      name: "MBA",
      courses2Details: [],
    },

    {
      name: "BBA",
      courses2Details: [],
    },
    {
      name: "MA",
      courses2Details: [],
    },
    {
      name: "BA",
      courses2Details: [],
    },
    {
      name: "BSc",
      courses2Details: [],
    },
    {
      name: "MSc",
      courses2Details: [],
    },
  ];

  const mentors = [
    {
      name: "Ramjeet Sir",
      role: "CEO, Execube Digital | Fractional CMO",
      company: "SKILLS",
      exp: "9+ Years",
      teach: "12+ Years",
      desc: "Priyash Nigam is a digital marketing strategist with over 9 years of experience in performance marketing.",
      image: RamjeetSir, // replace with actual image
    },
    {
      name: "Rajesh Sir",
      role: "Senior Data Scientist",
      company: "PHYSICS WALLAH",
      exp: "4+ Years",
      teach: "4+ Years",
      desc: "AI M.Tech | IIT Hyderabad | Data Structures | Problem Solving | Programming Languages...",
      image: RajeshSir, // replace with actual image
    },
    {
      name: "Jasmeher Sir",
      role: "Full Stack Developer",
      company: "Google",
      exp: "4+ Years",
      teach: "7+ Years",
      desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      image: JasmeherSir, // replace with actual image
    },
    {
      name: "Swati Mam",
      role: "Full Stack Developer",
      company: "Google",
      exp: "4+ Years",
      teach: "7+ Years",
      desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      image: SwatiMam, // replace with actual image
    },
    {
      name: "Shashank Sir",
      role: "Full Stack Developer",
      company: "Google",
      exp: "4+ Years",
      teach: "7+ Years",
      desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      image: shashanksir, // replace with actual image
    },
    {
      name: "Vinod Sir",
      role: "Full Stack Developer",
      company: "Google",
      exp: "4+ Years",
      teach: "7+ Years",
      desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      image: sirmam, // replace with actual image
    },

    // Add more mentors as needed
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
      title: "Data Science",
      image: dataScienceButton,
      bg: "bg-purple-200",
      borderC: "border-purple-500 border text-gray-700",
      bgColor1: "#E9D5FF",
      bgColor2: "#E9D5FFB2",
      bgColor3: "#fabefc23",
      active: true,
    },
    {
      title: "Full Stack / Development",
      image: FullStackDevelopmentButton,
      bg: "bg-blue-200",
      borderC: "border-blue-500 border",
      bgColor1: "#BFDBFE",
      bgColor2: "#BFDBFEB2",
      bgColor3: "#b8cafd2d",
      active: false,
    },

    {
      title: "Game Development / 3D / Animation",
      image: GameDevelopment3DAnimationButton,
      bg: "bg-green-200",
      borderC: "border-green-500 border",
      bgColor1: "#BBF7D0",
      bgColor2: "#BBF7D0B2",
      bgColor3: "#befdb82d",
      active: false,
    },
    {
      title: "App Development",
      image: AppDevelopmentBotton,
      bg: "bg-red-200",
      borderC: "border-red-500 border",
      bgColor1: "#FECACA",
      bgColor2: "#FECACAB2",
      bgColor3: "#fdb8d22d",
      active: false,
    },
    {
      title: "Digital Marketing",
      image: DigitalMarketingButton,
      bg: "bg-yellow-200",
      borderC: "border-yellow-500 border",
      bgColor1: "#f8ef87ff",
      bgColor2: "#fdf48ccc",
      bgColor3: "#f2faa92d",
      active: false,
    },
    {
      title: "AI & ML",
      image: AIMLBotton,
      bg: "bg-indigo-200",
      borderC: "border-indigo-500 border",
      bgColor1: "#C7D2FE",
      bgColor2: "#C7D2FEB2",
      bgColor3: "#b8cafd2d",
      active: false,
    },
    {
      title: "Cloud / Computing",
      image: CloudComputingButton,
      bg: "bg-red-200",
      borderC: "border-red-500 border",
      bgColor1: "#E9D5FF",
      bgColor2: "#E9D5FFB2",
      bgColor3: "#fabefc23",
      active: false,
    },
    {
      title: "Designing",
      image: uiuxbutton,
      bg: "bg-red-200",
      borderC: "border-red-500 border",
      bgColor1: "#BBF7D0",
      bgColor2: "#BBF7D0B2",
      bgColor3: "#befdb82d",
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

  // console.log;

  return (
    <>
      <Navbar />

      <div className="hero-section bg-gradient-to-t from-blue-950 relative to-blue-950 w-full min-h-screen overflow-hidden ">
        <div className="flex flex-wrap absolute left-0 top-0   overflow-hidden w-full h-660   ">
          {" "}
          {Array.from({ length: 1000 }).map((_, index) => (
            <div className="w-15.5  sm:w-15 md:w-16 h-15 border border-blue-900/20"></div>
          ))}
        </div>
        <img
          src={BGFlowGradient}
          alt=""
          className="absolute -top-130 md:-top-30 object-cover left-0 w-full h-full blink blink2 "
        />
        <section className="flex flex-col justify-center px-5 py-20 md:pt-40 relative items-center gap-3  w-full z-20 ">
          <div className=" mt-8 relative">
            <h1
              className="text-2xl  md:text-5xl text-white/80 font-bold relative inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Learn Skills That Matter
              <div
                className={`hidden md:flex justify-center items-center w-75 md:w-140 lg:w-140   absolute top-0 md:-left-3 lg:-left-5 transition-all duration-500 ${
                  isHovered ? "gap-240 lg:gap-290" : "gap-0"
                }`}
              >
                <div className="flex h-10 flex-col gap-8  relative">
                  {[
                    "Data Science + Gen AI",
                    "Digital Marketing & With AI",
                    "Programming Courses",
                    "Artificial Intelligence",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className={`flex items-center pointer-events-none justify-center absolute md:text-xs  lg:text-lg md:min-w-40 lg:min-w-60 h-10 p-2 rounded-lg transition-all duration-500 ${
                        isHovered
                          ? "opacity-100 "
                          : "opacity-0 top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2"
                      } ${
                        index === 0
                          ? "md:left-30 lg:left-10 md:-top-25 lg:-top-15 -rotate-15 bg-fuchsia-700/50"
                          : index === 1
                          ? "md:left-27 lg:left-5  md:-top-10 lg:top-4 -rotate-8 md:w-46 lg:w-65 bg-yellow-400/70"
                          : index === 2
                          ? "md:left-33 lg:left-15 top-25 rotate-5 bg-orange-600/50"
                          : "md:left-25 lg:left-0 top-40 rotate-10 bg-pink-500/50"
                      }`}
                    >
                      {text}
                    </div>
                  ))}
                </div>

                <div className="relative">
                  {[
                    "Software Development..  ",
                    "Android App Development",
                    "3D Modelling & Animation",
                  ].map((text, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center pointer-events-none  absolute md:text-xs  lg:text-lg md:min-w-45 lg:min-w-62 h-10 p-2 rounded-lg transition-all duration-500 ${
                        isHovered
                          ? "opacity-100"
                          : "opacity-0 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"
                      } ${
                        index === 0
                          ? "md:right-26 lg:right-0 -top-15 rotate-15 bg-blue-700/50"
                          : index === 1
                          ? "md:right-26 lg:right-10 md:top-12 lg:top-4 rotate-15 xl:rotate-8 bg-green-700/90"
                          : "md:right-30 lg:right-5 md:top-30 lg:top-25 -rotate-3 bg-red-500/70"
                      }`}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </h1>
          </div>
          <p className="text-xs sm:text-lg text-gray-400 font-medium md:font-bold">
            Gain real-world job ready skills for the future.
          </p>
          <Link to={"/contextus"}>
            {" "}
            <button className="border text-white mt-6 border-blue-300/20  bg-blue-800 shadow-black shadow-md hover:bg-blue-600/70 py-2 px-8 md:px-10 md:py-3 rounded transition-all duration-500 ease-in-out">
              Get Started
            </button>
          </Link>
          <section className="h-65 w-full z-50 mt-30">
            <div className="flex justify-start   scroll-track items-center overflow-auto  p-4 gap-6  h-full">
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className="flex-col  relative  bg-blue-100/50 shadow-md shadow-black/70 text-white rounded-xl min-w-50 md:min-w-85 h-full  transition-transform duration-300 "
                >
                  <div className="absolute top-3 right-3 text-white text-sm font-semibold ">
                    <img
                      src=""
                      alt=""
                      className="h-8 md:h-10 w-20 md:w-30 border "
                    />
                  </div>
                  <div className="flex justify-start ps-4 mt-3 mb-4 ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded object-cover"
                    />
                  </div>
                  <h2 className="text-xl ps-4 mt-2 font-bold text-start">
                    {item.name}
                  </h2>
                  <p className=" text-sm ps-4 mt-2 font-semibold text-gray-200">
                    {item.job}
                  </p>
                  <p className=" text-sm ps-4 mt-2  text-gray-700">
                    {item.course}
                  </p>
                  <div className="absolute bottom-0 w-full">
                    <div className="flex items-center justify-center bg-orange-500 text-white text-sm py-1 px-2 rounded-bl-lg rounded-br-lg">
                      🖥️ {item.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
        <section className=" pb-16 px-6 text-white ">
          <div className="flex flex-wrap justify-center gap-6 mb-12 z-20 ">
            {[
              { value: "20+", label: "Courses on the Platform" },
              { value: "10+", label: "Mentors from the Industry" },
              { value: "100+", label: "Students placed successfully" },
              { value: "55%", label: "Average Salary Hike" },
            ].map((stat, i) => (
              <div
                key={i}
                className=" z-10 w-45 h-20 md:w-64 md:h-32 flex mb-6 flex-col justify-center items-center bg-gray-600/50 hover:bg-gray-600/20 shadow-gray-900 shadow-md transition-all duration-300  border border-white/20 rounded-md"
              >
                <h2 className="text-4xl md:text-5xl font-bold">{stat.value}</h2>
                <p className="text-xs md:text-sm mt-2 text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap  justify-center items-center gap-x-4 gap-y-5 md:gap-8 ">
            <div className="text-center w-full mb-8  z-30 ">
              <h3 className="text-xl md:text-5xl  font-semibold text-white/80   ">
                Our Recruiters
              </h3>
            </div>
            {[
              Ibm,
              Ey,
              TigerAnalytics,
              Diageo,
              Flipkart,
              Deepak,
              Kpmg,
              Manipalhospital,
              Accenture,
              Aakaar,
              Loyalyticsai,
              Stablemony,
              // Genpact,
              // Unext,
              // Mathco,
              // Ltimindtree,
              Cognizant,
              Delhivery,
            ].map((company, i) => (
              <div
                key={i}
                className="flex z-30 rounded-2xl bg-blue-100/50  justify-center items-center h-10 w-35 p-2 md:h-20 md:w-50 shadow-md shadow-black   "
              >
                <img
                  src={company}
                  alt="img"
                  className="h-full
                w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>{" "}
      </div>

      <section className="flex flex-col  w-full justify-center  py-20 px-4 md:px-20 bg-blue-100/50 ">
        <div className="flex flex-col  items-center justify-center ">
          <p className="border flex gap-2 justify-center items-center text-gray-900 border-blue-500  bg-blue-500/50 rounded-3xl  p-1 w-50 text-center mb-10">
            <BsStars className="h-5 w-5 text-blue-800 rotate-90" /> Explore Our
            Courses
          </p>
          <h2 className="text-5xl text-neutral-800 p-2  font-bold  mb-6">
            Mentor-Led Courses
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Choose your career path & explore our wide range of specialized
            courses that helps you grow.
          </p>
        </div>
        <div className="w-full overflow-x-auto scroll-smooth no-scrollbar py-4">
          <div className="flex gap-4 w-max">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  handleCategoryClick(index), handleCategoryClick2(cat);
                }}
                className={`relative group flex items-center min-w-60 py-3 shadow-black/50 rounded-lg px-2 cursor-pointer overflow-hidden transition-all   shadow
                ${cat.active ? `${cat.borderC} ${cat.bg}` : ` bg-none `}
              `}
              >
                <div
                  className="absolute top-0 left-0 h-full w-1/4 transition-all duration-800 ease-in-out group-hover:w-[190%] z-0"
                  style={{
                    background: `linear-gradient(to right, ${cat.bgColor1} 15%, ${cat.bgColor2} 50%, ${cat.bgColor3} 100%)`,
                  }}
                ></div>

                <div className="flex items-center relative z-10">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-15 h-15 shadow-black shadow-sm rounded mr-3 "
                  />
                  <span className="font-semibold w-45 text-lg ">
                    {cat.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <h3 className="text-2xl  w-full  font-semibold mb-4">
          {selectedCategory}
        </h3>
        <div className="flex justify-start scroll-smooth no-scrollbar items-center overflow-auto p-4 gap-6  h-full">
          {allCourses[selectedCategory].map((course, index) => (
            <Link
              to={`/CoursesPage/${course.id}`}
              key={index}
              className="bg-white min-w-70 sm:min-w-85 no-scrollbar relative shadow-black/50 shadow-md p-3 rounded-lg "
            >
              <img
                src={course.img}
                alt=""
                className="h-50  w-90 shadow-black/50 shadow-md hover:shadow-lg rounded-2xl"
              />
              <span className="text-sm absolute top-7 left-7 bg-purple-100 text-purple-700 px-2 py-1 rounded-full inline-block mb-2">
                {course.tag}
              </span>
              <h4 className="text-lg  h-15 font-semibold mt-2 mb-2">
                {course.title}
              </h4>
              <div className=" flex gap-3 border-t pt-3 border-black/30 ">
                <p className="flex gap-1 justify-center items-center text-gray-600 text-sm">
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

        <Link to={"/allcoursepage"}>
          {" "}
          <div className="mt-8 text-center">
            <button className="px-6 py-2 bg-blue-950 text-white rounded hover:bg-blue-900 transition-all duration-500 ease-in-out">
              View All Courses
            </button>
          </div>
        </Link>
      </section>
      <section className="Py-20 px-4 md:px-20 bg-blue-100/50 ">
        <div className="flex flex-col  relative items-center  py-16 justify-center  ">
          <p className="border flex gap-2 justify-center items-center text-gray-900 border-blue-500  bg-blue-500/50 rounded-3xl  p-1 w-50 text-center mb-10">
            <BsStars className="h-5 w-5 text-blue-800 rotate-90" /> See what
            others say
          </p>
          <h2 className="text-5xl text-neutral-800 p-2  font-bold  mb-6">
            Hear from our students
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We help students upskill & grow their career in the most
            comprehensive way possible.
          </p>
          <div className="w-full flex justify-start  scroll-smooth items-center overflow-x-auto no-scrollbar pt-10">
            <div className=" w-full   ">
              <div
                ref={scrollRef}
                className="w-full flex justify-start py-10  items-center overflow-x-auto no-scrollbar scroll-smooth"
              >
                <div className="flex gap-6 w-max px-6">
                  {cards.map((item, index) => (
                    <div
                      key={index}
                      className="min-w-70 md:min-w-140  max-w-md bg-white border border-gray-200 rounded-xl shadow-md py-6 px-3 md:p-6 flex flex-col justify-center text-center transition-all duration-300 hover:shadow-xl"
                    >
                      <p className="text-xs md:text-sm font-medium text-gray-800 mb-6">
                        “{item.feedback}”
                      </p>
                      <div className="flex justify-center items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-15 h-15 rounded-full object-cover"
                        />
                        <div className="text-start">
                          <p className="text-lg font-semibold text-gray-900">
                            {item.name}
                          </p>
                          <div className="flex">
                            <MdOutlineStarPurple500 className="text-yellow-500" />
                            <MdOutlineStarPurple500 className="text-yellow-500" />
                            <MdOutlineStarPurple500 className="text-yellow-500" />
                            <MdOutlineStarPurple500 className="text-yellow-500" />
                            <MdOutlineStarPurple500 className="text-yellow-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between mb-10 ">
            <button
              onClick={() => scroll("left")}
              className=" left-4 shadow-sm  shadow-[#aaa]  top-0 -translate-y-1/2 bg-white  rounded-full p-2 hover:bg-gray-100 z-10"
              aria-label="Scroll left"
            >
              <IoChevronBackOutline size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className=" right-4  shadow-sm  shadow-[#aaa]  border  border-gray-100  top-130 -translate-y-1/2 bg-white   rounded-full p-2 hover:bg-gray-100 z-10"
              aria-label="Scroll right"
            >
              <IoChevronForwardOutline size={24} />
            </button>
          </div>
          <p className=" text-gray-600 mb-5">
            Want to get your success stories featured here?
          </p>
          <a href="https://www.google.com/search?sca_esv=b860543b1a2d43da&sxsrf=AE3TifOnDXZ2cwaq8IgmBb0IqoRXFcTQWA:1757139366638&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E9-cVx1B6tDZ1Ci7s00yr7xVgdqYohQrcBPYTX-eHVWyqBA9Qk-cbr4qEcgkhk66mXKfLEbv4tio7IAoBLaAGzDEro5juEINzY5n7EEY5oc-bdvXWA%3D%3D&q=Biit+Classes+BCA/MCA+Reviews&sa=X&ved=2ahUKEwiAy5OevsOPAxWYgK8BHTnlJ3wQ0bkNegQIOhAE&biw=1366&bih=641&dpr=1">
            {" "}
            <button className="px-6 py-2 bg-blue-950 text-white rounded hover:bg-blue-800  transition-all duration-500 ease-in-out">
              Get Start
            </button>
          </a>
        </div>
      </section>
      <section className="py-20 px-4 md:p-20 flex flex-col bg-blue-100/50">
        <p className="border flex gap-2 justify-center items-center text-gray-900 border-blue-500  bg-blue-500/50 rounded-3xl  p-1 w-45 text-center mb-3">
          Degree Courses <BsStars className="h-5 w-5 text-blue-800 rotate-90" />
        </p>
        <h2 className="text-5xl text-neutral-700 p-2  font-bold  mb-6">
          Get a Certified Degree with Biit Classes
        </h2>
        <div className="  flex gap-3 sm:gap-7 border-b border-black/20 w-full ">
          {degInsi.map((deg, index) => (
            <button
              key={index}
              onClick={() => {
                setActivedeg(deg), setSelectedCategory2("All");
              }}
              className={`p-2 border-b font-semibold text-lg whitespace-nowrap transition ${
                activedeg === deg
                  ? "border-b-black "
                  : "border-b-black/0  text-black/50 hover:text-black/70"
              }`}
            >
              {deg}
            </button>
          ))}
        </div>

        <div className="w-full  overflow-x-auto scroll-smooth no-scrollbar py-4">
          <div className="flex  gap-4 w-max px-4">
            {categoriess.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(cat);
                  setSelectedCategory2(cat);
                  console.log(cat);
                }}
                className={`px-20 py-4 border rounded-lg text-sm font-semibold whitespace-nowrap transition ${
                  activeTab === cat
                    ? "border-blue-400 bg-blue-100 text-blue-500 font-semibold"
                    : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto scroll-smooth no-scrollbar  ">
          {courses2
            .filter((cel) => {
              console.log(cel);
              if (selectedCategory2 === "All") {
                return cel;
              }
              return cel.name === selectedCategory2;
            })
            .map((course2, i) => (
              <div className="flex gap-6 p-4" key={i}>
                {course2.courses2Details.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white w-70 md:min-w-85 no-scrollbar relative shadow-black/50 shadow-sm hover:shadow-md  rounded-lg "
                  >
                    <img
                      src={course.img}
                      alt={course.name}
                      className="h-45 w-full rounded-t-lg"
                    />
                    <h4 className="text-lg px-4 h-15 font-semibold mt-2 mb-2">
                      {course.title}
                    </h4>

                    <div className="flex gap-3 border-b pb-2 pt-3 border-black/30">
                      <p className="flex gap-1 px-4 justify-center items-center text-gray-600 text-sm">
                        {course.school}
                      </p>
                    </div>

                    <p className="flex justify-start gap-2 items-center text-sm py-1 px-4 font-medium text-black">
                      <IoCalendar className="text-black/80" />
                      {course.admition}
                    </p>
                  </div>
                ))}
              </div>
            ))}
        </div>

        {/* <div className="flex justify-center mt-10">
          <button className="border w-50 mt-4 border-red-300/20 text-black bg-red-400 hover:bg-red-500  px-6 py-2 rounded transition-all duration-500 ease-in-out">
            View All Colleges
          </button>
        </div> */}
      </section>
      <section className="py-16 px-4  md:p-16 flex flex-col bg-blue-100/50  ">
        <div className="flex flex-col  items-center justify-center ">
          <p className="border flex gap-2 justify-center items-center text-gray-900 border-blue-500  bg-blue-500/50 rounded-3xl  p-1 w-50 text-center mb-10">
            About Biit Classes{" "}
            <BsStars className="h-5 w-5 text-blue-800 rotate-90" />
          </p>
          <h2 className="text-5xl text-neutral-800 p-2  font-bold  mb-6">
            Immersive Learning Experience
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Experience immersive, hands-on learning that empowers you with
            skills that get you job-ready.
          </p>
        </div>
        <div className="lg:flex hidden lg:flex-row flex-col items-center justify-center ">
          <div className="lg:flex  hidden flex-col gap-4 w-full md:w-1/3">
            {features.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex justify-between items-center p-5 rounded-lg cursor-pointer transition border ${
                  activeIndex === index
                    ? " border-blue-400 py-16 bg-blue-100   transition-all duration-400 ease-in-out"
                    : "border-gray-200 bg-white hover:bg-gray-100  transition-all duration-400 ease-in-out"
                }`}
              >
                <div>
                  <h3
                    className={`text-xl w-70 font-bold text-gray-800 ${
                      activeIndex === index
                        ? " text-blue-900 transition-all duration-400 ease-in-out"
                        : "text-black transition-all duration-400 ease-in-out"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="me-5 w-15 h-15"
                />
                <div
                  className={`text-3xl ${
                    activeIndex === index
                      ? " visible transition-all duration-400 ease-in"
                      : " invisible transition-all duration-100 ease-out"
                  }`}
                >
                  <IoIosArrowForward />
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:flex hidden md:w-2/3  ">
            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-lg">
              <iframe
                src="https://jitter.video/embed/your-video-id"
                title="Feature Video"
                className="w-200  h-110"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col gap-5  w-full ">
          {" "}
          <div className="flex  lg:flex-col justify-between w-full flex-row gap-2 md:gap-4 ">
            {features.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col-reverse lg:flex w-27 sm:w-50 sm:h-40 md:w-50 h-27 md:h-50 justify-center   items-center p-2 rounded-lg cursor-pointer transition border ${
                  activeIndex === index
                    ? " border-blue-900  bg-red-50   transition-all duration-400 ease-in-out"
                    : "border-gray-200 bg-white hover:bg-gray-100  transition-all duration-400 ease-in-out"
                }`}
              >
                <div>
                  <h3
                    className={`text-[10px] lg:text-xl  w-full font-bold text-gray-800 ${
                      activeIndex === index
                        ? " text-blue-900 transition-all duration-400 ease-in-out"
                        : "text-black transition-all duration-400 ease-in-out"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="me-5 w-15 h-15"
                />
                <div
                  className={`text-3xl hidden lg:flex ${
                    activeIndex === index
                      ? " visible transition-all duration-400 ease-in"
                      : " invisible transition-all duration-100 ease-out"
                  }`}
                >
                  <IoIosArrowForward />
                </div>
              </div>
            ))}
          </div>
          <div className="w-full border h-full ">
            <div className="rounded-lg overflow-hidden border border-gray-300 shadow-lg">
              <iframe
                src="https://jitter.video/embed/your-video-id"
                title="Feature Video"
                className="w-full h-64 md:h-115"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center p-10">
          <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
            Know More →
          </button>
        </div> */}
      </section>
      <section className="px-4 md:px-20 py-10 flex flex-col bg-blue-100/50 ">
        <p className="border flex gap-2 justify-center items-center text-gray-900 border-blue-500  bg-blue-500/50 rounded-3xl  p-1 w-45 text-center mb-3">
          Game Changers <BsStars className="h-5 w-5 text-blue-800 rotate-90" />
        </p>
        <h2 className="text-5xl text-neutral-700 p-2  font-bold  mb-6">
          Meet our Mentors
        </h2>

        <div className="w-full overflow-x-auto  scroll-smooth no-scrollbar py-6">
          <div className="flex gap-6 w-max px-4 ">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white w-70 sm:w-90 rounded-xl shadow-black shadow-md  transition flex-shrink-0 relative"
              >
                {/* <div className="absolute top-55 right-5 rounded h-5 w-5">
                  {" "}
                  <FaLinkedin className="cursor-pointer h-full w-full  rounded-lg hover:text-blue-500" />
                </div> */}
                <div className="h-100 bg-orange-100 flex justify-center items-center rounded-t-xl">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="h-full w-full rounded-t-xl shadow-black shadow-sm object-cover"
                  />
                </div>

                <div className="p-4 ">
                  <h3 className="text-lg font-bold">{mentor.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{mentor.role}</p>
                  {/* <p className="flex items-center gap-2 text-sm font-semibold">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Googleplex-Logo.svg"
                      alt=""
                      className="h-10 w-40 border"
                    />
                  </p> */}

                  <div className="flex justify-between mt-3 text-sm border-t py-3 border-black/40 text-gray-600">
                    {/* <div className="flex items-center gap-1">
                      <MdWork className="h-7 w-7 text-black/80" />
                      <div>
                        <p className="text-black font-semibold">{mentor.exp}</p>{" "}
                        <p>Work Experience</p>
                      </div>
                    </div> */}
                    <div className="flex items-center justify-end gap-2 ">
                      <GiTeacher className="h-7 w-7 text-black/80" />
                      <div>
                        <p className="text-black font-semibold">
                          {mentor.teach}
                        </p>{" "}
                        <p>Teaching Experience</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mt-3 line-clamp-3">
                    {mentor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 md:px-20 py-10 bg-blue-100/50">
        <div className="w-full flex  flex-col-reverse   lg:flex-row items-center justify-center py-12 ">
          <div className="relative  w-full lg:w-1/2 h-120 flex justify-center  items-center">
            <div className=" absolute  w-70 h-70 sm:w-130 sm:h-130 lg:w-96 lg:h-96   z-0"></div>

            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
              alt="Figma"
              className="absolute top-12 left-20 w-10 h-10"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-google-data-studio-4701216-3901832.png"
              alt="Data Studio"
              className="absolute bottom-12 left-14 w-10 h-10"
            />
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/python_logo_icon_168865.png"
              alt="Python"
              className="absolute bottom-14 right-14 w-10 h-10"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
              alt="Salesforce"
              className="absolute top-10 right-24 w-10 h-10"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-jira-3628868-3030001.png"
              alt="Jira"
              className="absolute top-24 right-16 w-10 h-10"
            /> */}

            <img
              src={masterclasshuman} // <-- Replace with actual image
              alt="Student"
              className="relative z-10 w-full sm:w-full sm:h-120 h-60 lg:w-full lg:h-100  object-cover"
            />
          </div>

          <div className="flex  flex-col justify-center items-center w-full lg:w-1/2 text-center md:text-left  px-6  mt-10 md:mt-0">
            <img src={logo} alt="" className="h-30 w-30" />
            <h3 className=" font-semibold text-gray-900 mb-2">brings you</h3>
            <h1 className="text-4xl font-bold text-black/85 mb-4">
              Masterclass
            </h1>
            <p className="text-gray-600 mb-6">
              Stuck in your career? Learn & grow with our masterclass led by
              industry professionals. Learn skills that can make a difference.
            </p>
            <Link to={"/masterclasspage"}>
              <button className="px-6 py-3 bg-blue-950 hover:bg-blue-900 transition duration-500 text-white rounded-lg text-base">
                Explore Masterclass
              </button>
            </Link>
            <div className=" sm:ps-20 md:ps-30 lg:ps-0 h-30  w-full flex ">
              <img
                src={arrow}
                alt=""
                className=" h-full  w-50 sm:w-80 object-contain  rotate-y-140 "
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-4  md:px-20 py-20 bg-blue-100/30">
        {" "}
        <div className="flex flex-col items-center">
          <p className="border flex gap-2 justify-center items-center border-red-400 bg-red-400/10 rounded-3xl  p-1 w-45 text-center mb-3">
            <BsStars className="h-5 w-5 text-red-500 rotate-90" /> Free Courses{" "}
            <BsStars className="h-5 w-5 text-red-500 rotate-90" />
          </p>
          <h2 className="text-4xl text-neutral-700 p-2  font-bold  mb-6">
            Still Confused? Get Started With Free Courses!
          </h2>
        </div>
        <div className="flex gap-4  max-w-full no-scrollbar overflow-auto px-4">
          {cCategories2.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActive2Tab(cat)}
              className={`px-20 py-4 border rounded-lg text-sm  whitespace-nowrap transition ${
                active2Tab === cat
                  ? "border-red-400 bg-red-50 text-red-500 font-semibold"
                  : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex justify-start scroll-smooth no-scrollbar items-center overflow-auto p-4 gap-6  h-full">
          {courses3.map((course, index) => (
            <div
              key={index}
              className="bg-white min-w-70 sm:min-w-85 no-scrollbar relative shadow-lg p-4 rounded-lg border"
            >
              <img src="" alt="" className="h-45 w-full border" />
              <span className="text-sm absolute top-7 left-7 bg-red-500/70 text-white px-2 py-1 rounded-full inline-block mb-2">
                {course.tag}
              </span>
              <h4 className="text-lg  h-15 font-semibold mt-2 mb-2">
                {course.title}
              </h4>
              <div className=" flex gap-5 border-t pt-3 border-black/30 ">
                <p className="flex gap-1 justify-center items-center text-gray-600 text-sm">
                  <MdOutlineAccessTime className="h-5 w-5" />
                  {course.duration}
                </p>
                <p className="flex gap-1 justify-center items-center text-gray-600 text-sm">
                  <HiUsers className="h-5 w-5" />
                  {course.enrolled}
                </p>
              </div>
              <button className="w-full py-2 mt-4  border border-red-500 hover:bg-red-600 text-red-600 font-semibold hover:text-white rounded transition-all duration-500 ease-in-out">
                Enroll For Free
              </button>
            </div>
          ))}
        </div>
      </section> */}
      <section>
        <div className="w-full overflow-hidden  min-h-270 lg:min-h-screen relative bg-gradient-to-r from-blue-950  to-purple-950 text-white py-25 px-4 sm:px-20 flex flex-col lg:flex-row items-center justify-between">
          <div className="flex flex-wrap absolute   top-0  left-0 overflow-hidden w-full  h-350  ">
            {" "}
            {Array.from({ length: 490 }).map((_, index) => (
              <div className="w-15.5  sm:w-15 md:w-16 h-15 border border-blue-900/20"></div>
            ))}
          </div>

          <div className="z-10  w-full lg:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="border flex gap-2 justify-center items-center border-blue-400  rounded-3xl  p-1 w-45 text-center mb-3">
              Free Courses{" "}
              <BsStars className="h-5 w-5 text-blue-700 rotate-90" />
            </p>

            <h1 className="text-3xl text-left md:text-4xl font-bold mb-6 leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F7AB1E] to-[#F7351B]">
              The new wave of technology is <br />
              here to change our lives forever!
            </h1>

            <div className="  flex flex-col p-3 lg:flex-row gap-6 items-center  p-2md:items-start justify-center md:justify-start mt-10 ">
              <div className="text-center  md:text-left ">
                <h2 className="flex items-center gap-3 font-bold text-2xl">
                  Ramjeet Verma
                  {/* <FaLinkedin className="h-5 w-5" /> */}
                </h2>
                <p className="text-gray-300 font-semibold">
                  Founder @ Biit Classes
                </p>
              </div>
              {/* <div className="text-5xl text-red-300  font-bold">&</div>
              <div className=" text-center  md:text-left">
                <h2 className="flex items-center gap-3 font-bold text-xl">
                  Alakh Pandey <FaLinkedin className="h-5 w-5" />
                </h2>
                <p className="text-gray-300 font-semibold">
                  Founder @ Physics Wallah
                </p>
              </div> */}
            </div>
            <div className="z-10   absolute w-full bottom-0 lg:bottom-0 right-0 lg:w-1/2 h-111  flex  justify-center gap-5">
              <img
                src=""
                alt=""
                className="w-1/2 border rounded-lg object-cover shadow-lg"
              />
              {/* <img
                src=""
                alt=""
                className=" w-1/2 border rounded-lg object-cover shadow-lg"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <ContextUs showNav={false} />
    </>
  );
};

export default HomePage;
