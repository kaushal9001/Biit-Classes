import React from "react";
// import emailjs from "emailjs-com";
import HomePage from "./Component/HomePage/HomePage";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursesPage from "./Component/CoursesPage/CoursesPage";
import Navbar from "./Component/Navbar/Navbar";
import MenuPage from "./Component/MenuPage/MenuPage";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import ContextUs from "./Component/ContextUs/ContextUs";
import AllCoursePage from "./Component/AllCoursePage/AllCoursePage";
import Gallery from "./Component/Gallery/Gallery";

export const App = () => {
  return (
    <div className=" ">
      <Router>
        <ScrollToTop />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coursespage/:courseid" element={<CoursesPage />} />
          <Route path="/contextus" element={<ContextUs />} />
          <Route path="/allcoursepage" element={<AllCoursePage />} />
          <Route path="/gallerypage" element={<Gallery />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};
