import React from "react";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import logo from "../../assets/photos/biit-logo.png";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaYoutube,
  FaTelegramPlane,
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
  FaTwitterSquare,
  FaUserCircle,
  FaUserAltSlash,
  FaUserAlt,
  FaUserAstronaut,
  FaUserCheck,
  FaUserGraduate,
  FaUserCog,
  FaUserEdit,
  FaUserInjured,
} from "react-icons/fa";
import { FaUserClock, FaUserGear, FaUserLarge } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950  to-purple-950 relative text-white px-4 md:px-20 pt-20 pb-10 overflow-hidden ">
      <div className="flex flex-wrap absolute left-0 top-0  overflow-hidden w-full h-360   ">
        {" "}
        {Array.from({ length: 550 }).map((_, index) => (
          <div
            key={index}
            className="w-15.5  sm:w-15 md:w-16 h-15 border border-blue-900/20"
          ></div>
        ))}
      </div>
      <div className="max-w-7xl  mx-auto z-10 ">
        <p className=" text-2xl font-semibold w-full lg:w-175 p-2 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ba1ef7] to-[#821bf7]">
          Elevate your skills! Seamlessly blend the worlds of technology &
          business together for a future full of{" "}
          <span className="text-gradient-to-r from-pink-500 to-purple-500">
            endless possibilities.
          </span>
        </p>

        <div className="flex  flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="space-y-4 flex-1 z-10">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className=" h-20 w-20 brightness-0 invert"
              />{" "}
              <p className="flex items-center text-3xl font-semibold border-l-2 h-15 ps-2">
                BIIT CLASSES
              </p>
            </div>
            <div>
              <p className="flex gap-2 py-2">
                <MdPhone className="h-5 w-5 mt-1" /> +91 7290803744, +91
                8700652427
              </p>
              <p className="flex gap-2 py-2">
                <MdLocationPin className="h-5 w-5 mt-1" /> B1, Milap Nager,
                Uttam Nager, 110059
              </p>
              <p className="flex gap-2  py-2">
                <MdMail className="h-5 w-5 mt-1" />
                <a href="https://biitclasses.in/" className="underline">
                  info@biitclasses.in
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h3 className=" w-full text-lg font-semibold mb-2 border-b-2 border-red-400 inline-block">
              Quick Link
            </h3>
            <div className="flex flex-col gap-5 space-x-6 text-2xl">
              <ul className="list-disc ps-6 z-10">
                <li className="text-lg">
                  <a href="/">Home</a>
                </li>
                <li className="text-lg">
                  <Link to={"/allcoursepage"}>All Courses</Link>
                </li>
                <li className="text-lg">
                  <Link to={"/contextus"}>Contact Us</Link>
                </li>
                <li className="text-lg">
                  <Link to={"/masterclasspage"}>Masterclass</Link>
                </li>
                <li className="text-lg">
                  <Link to={"/gallerypage"}>Gallery</Link>
                </li>
                <li className="text-lg ">
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="cursor-pointer"
                  >
                    Back To Top
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="flex-1">
            <h3 className=" w-full text-lg font-semibold mb-2 border-b-2 border-red-400 inline-block">
              Company
            </h3>
            <ul className="space-y-3 mt-4">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Career Services</li>
            </ul>
          </div> */}

          {/* Categories Links */}
          {/* <div className="flex-2">
            <h3 className="text-lg w-full font-semibold mb-2 border-b-2 border-red-400 inline-block">
              Categories
            </h3>
            <div className="flex">
              <ul className="space-y-3 mt-4">
                <li>Data Science & Analytics</li>
                <li>Digital Marketing with AI</li>
                <li>Programming Courses</li>
                <li>Product Management with AI</li>
              </ul>
              <ul className="space-y-3 mt-4">
                <li>Software Development Courses</li>
                <li>Banking & Finance</li>
                <li>Cybersecurity Courses</li>
              </ul>
            </div>
          </div> */}

          {/* Social Links */}
          <div className=" flex-1   md:ps-10 z-10">
            <h3 className=" w-full text-lg font-semibold mb-2 border-b-2 border-red-400 inline-block">
              IGNOU
            </h3>
            <div className="flex flex-col gap-5 space-x-6 text-2xl">
              <a
                href="https://www.ignou.ac.in/ignou/studentzone/results/4"
                className="flex items-center gap-2 text-lg "
              >
                IGNOU INFO
              </a>

              <a
                href="https://www.ignou.ac.in/ignou/studentzone/results/2"
                className="flex items-center gap-2 text-lg "
              >
                IGNOU Term-End
              </a>
              <a
                href="https://www.ignou.ac.in/ignou/studentzone/results/5"
                className="flex items-center gap-2 text-lg "
              >
                IGNOU Revaluation
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-4 flex  flex-wrap justify-between text-sm ">
          <div className="flex flex-wrap mb-5 md:w-[25%]  md:mb-0 gap-x-5 z-10">
            <a
              href="https://www.facebook.com/Professionalstraining/"
              className="flex items-center gap-2 text-sm "
            >
              {" "}
              <FaFacebook className="cursor-pointer " />
              BIIT Professional
            </a>
            <a
              href="https://www.facebook.com/BIITClasses/"
              className="flex items-center gap-2 text-sm "
            >
              {" "}
              <FaFacebook className="cursor-pointer " />
              BIIT IGNOU
            </a>
            <a
              href="https://www.instagram.com/biit_classes_/"
              className="flex items-center gap-2 text-sm "
            >
              {" "}
              <FaInstagram className="cursor-pointer " />
              BIIT Professional
            </a>

            <a
              href="https://x.com/biit_classes"
              className="flex items-center gap-2 text-sm "
            >
              <FaTwitter className="cursor-pointer " />
              witter
            </a>
            <a
              href="https://www.justdial.com/Delhi/Biit-Classes-Near-Hanuman-Mandir-Indira-Park-Uttam-Nagar/011PXX11-XX11-170828103519-A4L5_BZDET"
              className="flex items-center gap-2 text-sm "
            >
              <FaUserLarge className="cursor-pointer " />
              Just Dial
            </a>
          </div>
          <p className="mb-5  sm:mb-0"> Biit Classes . All rights reserved.</p>
          <div className=" flex space-x-6 ">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
      {/* 
      <div class="absolute w-full large:w-screen  left-0 bottom-0">
        <svg
          class="w-[1440px] h-[312] medium:w-[150%] large:w-screen object-cover"
          viewBox="0 0 1440 312"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path
              d="M0 6.20479L34.4 3.90977C68.8 1.74977 137.6 -2.84023 206.08 4.58477C274.72 12.0098 342.88 31.4498 411.52 49.1348C480 66.9548 548.8 83.1548 617.28 80.7248C685.92 78.1598 754.08 57.0998 822.72 42.2498C891.2 27.3998 960 18.7598 1028.48 23.0798C1097.12 27.3998 1165.28 44.4098 1233.92 55.7498C1302.4 66.9548 1371.2 72.3548 1405.6 75.0548L1440 77.7548V311.305H1405.6C1371.2 311.305 1302.4 311.305 1233.92 311.305C1165.28 311.305 1097.12 311.305 1028.48 311.305C960 311.305 891.2 311.305 822.72 311.305C754.08 311.305 685.92 311.305 617.28 311.305C548.8 311.305 480 311.305 411.52 311.305C342.88 311.305 274.72 311.305 206.08 311.305C137.6 311.305 68.8 311.305 34.4 311.305H0V6.20479Z"
              fill="#FA7268"
            ></path>
            <path
              d="M0 90.1016L34.4 94.3384C68.8 98.4606 137.6 106.934 206.08 109.339C274.72 111.858 342.88 108.423 411.52 104.988C480 101.552 548.8 98.1171 617.28 109.339C685.92 120.675 754.08 146.554 822.72 144.149C891.2 141.63 960 110.713 1028.48 101.323C1097.12 92.0482 1165.28 104.186 1233.92 117.24C1302.4 130.179 1371.2 143.92 1405.6 150.791L1440 157.661V311.102H1405.6C1371.2 311.102 1302.4 311.102 1233.92 311.102C1165.28 311.102 1097.12 311.102 1028.48 311.102C960 311.102 891.2 311.102 822.72 311.102C754.08 311.102 685.92 311.102 617.28 311.102C548.8 311.102 480 311.102 411.52 311.102C342.88 311.102 274.72 311.102 206.08 311.102C137.6 311.102 68.8 311.102 34.4 311.102H0V90.1016Z"
              fill="#EF5F67"
            ></path>
            <path
              d="M0 152.065L34.4 150.336C68.8 148.608 137.6 145.15 206.08 149.414C274.72 153.563 342.88 165.549 411.52 167.277C480 169.006 548.8 160.478 617.28 153.563C685.92 146.648 754.08 141.347 822.72 136.853C891.2 132.473 960 129.016 1028.48 133.28C1097.12 137.429 1165.28 149.414 1233.92 148.838C1302.4 148.262 1371.2 135.124 1405.6 128.67L1440 122.102V311.102H1405.6C1371.2 311.102 1302.4 311.102 1233.92 311.102C1165.28 311.102 1097.12 311.102 1028.48 311.102C960 311.102 891.2 311.102 822.72 311.102C754.08 311.102 685.92 311.102 617.28 311.102C548.8 311.102 480 311.102 411.52 311.102C342.88 311.102 274.72 311.102 206.08 311.102C137.6 311.102 68.8 311.102 34.4 311.102H0V152.065Z"
              fill="#E34C67"
            ></path>
            <path
              d="M0 199.254L34.4 204.654C68.8 210.054 137.6 220.854 206.08 221.259C274.72 221.799 342.88 211.809 411.52 209.379C480 206.949 548.8 211.809 617.28 209.379C685.92 206.949 754.08 196.959 822.72 187.779C891.2 178.599 960 169.959 1028.48 174.549C1097.12 179.004 1165.28 196.554 1233.92 196.149C1302.4 195.609 1371.2 177.249 1405.6 167.934L1440 158.754V311.304H1405.6C1371.2 311.304 1302.4 311.304 1233.92 311.304C1165.28 311.304 1097.12 311.304 1028.48 311.304C960 311.304 891.2 311.304 822.72 311.304C754.08 311.304 685.92 311.304 617.28 311.304C548.8 311.304 480 311.304 411.52 311.304C342.88 311.304 274.72 311.304 206.08 311.304C137.6 311.304 68.8 311.304 34.4 311.304H0V199.254Z"
              fill="#D53867"
            ></path>
            <path
              d="M0 240.102L34.4 245.987C68.8 251.966 137.6 263.737 206.08 264.391C274.72 265.045 342.88 254.395 411.52 249.257C480 244.119 548.8 244.492 617.28 246.361C685.92 248.229 754.08 251.592 822.72 251.966C891.2 252.246 960 249.444 1028.48 247.762C1097.12 245.987 1165.28 245.427 1233.92 248.977C1302.4 252.527 1371.2 260.374 1405.6 264.204L1440 268.128V311.102H1405.6C1371.2 311.102 1302.4 311.102 1233.92 311.102C1165.28 311.102 1097.12 311.102 1028.48 311.102C960 311.102 891.2 311.102 822.72 311.102C754.08 311.102 685.92 311.102 617.28 311.102C548.8 311.102 480 311.102 411.52 311.102C342.88 311.102 274.72 311.102 206.08 311.102C137.6 311.102 68.8 311.102 34.4 311.102H0V240.102Z"
              fill="#C62368"
            ></path>
          </g>
        </svg>
      </div> */}
    </footer>
  );
};

export default Footer;
