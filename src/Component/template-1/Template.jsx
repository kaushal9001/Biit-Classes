import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { LiaDownloadSolid } from "react-icons/lia";
// import { TiTick } from "react-icons/ti";
// import { VscVscode } from "react-icons/vsc";
// import { DiGithubBadge } from "react-icons/di";
// import { GrMysql } from "react-icons/gr";
// import { DiMongodb } from "react-icons/di";
// import { SiPostman } from "react-icons/si";
// import { IoIosGitMerge } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { BsStars } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaHome } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import courseData from "../CourceData/CourceData";
import { MdOutlineDone } from "react-icons/md";
import counsellorImg from "../../assets/images/counsellor-img.webp";
import confusedPersonImg from "../../assets/images/confused-person-img.svg";
import { HiChevronRight } from "react-icons/hi";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// const faqs = [
//   {
//     ques: "What is this course about, and who is it for?",
//     ans: "This course provides learners with a comprehensive understanding of full stack web development, covering both front-end and back-end technologies. The curriculum focuses on building real-world applications, enabling learners to develop and deploy end-to-end web solutions. It’s ideal for beginners, freshers, or professionals aiming to kickstart or transition their careers in software development.",
//   },
//   {
//     ques: "What are the prerequisites for enrolling in this course?",
//     ans: "This course provides learners with a comprehensive understanding of full stack web development, covering both front-end and back-end technologies. The curriculum focuses on building real-world applications, enabling learners to develop and deploy end-to-end web solutions. It’s ideal for beginners, freshers, or professionals aiming to kickstart or transition their careers in software development.Learners should have basic computer literacy and logical thinking. Prior programming knowledge is helpful but not mandatory, as the course covers foundational concepts.",
//   },
//   {
//     ques: "Is this course suitable for beginners?",
//     ans: "Yes, the course is designed for beginners and gradually introduces advanced concepts.",
//   },
//   {
//     ques: "What topics and tools are covered in the course?",
//     ans: "You’ll learn HTML5, CSS3, JavaScript (ES2022+), Node.js, React 19+, React Router v6+, Redux, Express, Next.js 15+, MySQL with Sequelize, and MongoDB with Mongoose. You’ll also work with tools and services like VS Code, NPM, Vite, MongoDB Atlas, Vercel, and Netlify to build and deploy modern, full-stack web applications.",
//   },
//   {
//     ques: "What is the duration of the course, and how much time should I dedicate weekly?",
//     ans: "The course lasts 8 months, with a recommended commitment of 8-10 hours per week.",
//   },
//   {
//     ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
//     ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid – recorded content + weekly live revision session || Pro Plan: Hybrid – recorded content + weekly live revision session, live capstone, and 2 live case studies from PwC.",
//   },
//   {
//     ques: "Does the course include projects or assignments?",
//     ans: "Basic: No assignments. Industry project walkthroughs are included || Premium: Includes assignments, written solutions, and basic evaluation || Pro: Includes all Premium features, 2 live PwC case studies, and a live capstone project.",
//   },
//   {
//     ques: "Will I have access to recordings if I miss a live session?",
//     ans: "Yes, for pro and premium offerings, all live sessions are recorded and available for review.",
//   },
//   {
//     ques: "Will I receive feedback on assignments?",
//     ans: "Premium and Pro: Yes, evaluated assignments with written feedback || Basic: Feedback not applicable as assignments are not included.",
//   },
//   {
//     ques: "Does this course provide job assistance?",
//     ans: "The course offers career guidance, resume building, and interview preparation. Relevant interview opportunities are shared with the eligible learners, but outcomes depend on individual performance. To know more about the Job Assistance Policy, refer to the dedicated Job Assistance page.",
//   },
//   {
//     ques: "Is the certification verifiable by employers?",
//     ans: "Yes, certifications are verifiable through a unique link.",
//   },
//   {
//     ques: "What certificate will I get in each plan?",
//     ans: "Basic and Premium: PW Skills Certificate || Pro: Joint Certificate from PW Skills + PwC",
//   },
//   {
//     ques: "Does this course provide job assistance?",
//     ans: "Basic & Premium: No job assistance included || Pro: The course offers career guidance, resume building, and interview preparation. Relevant interview opportunities are shared with the eligible learners, but outcomes depend on individual performance. To know more about the Job Assistance Policy, refer to the dedicated Job Assistance page.",
//   },
//   {
//     ques: "What is the course fee?",
//     ans: "Basic: ₹7,000 || Premium: ₹15,000 || Pro: ₹20,000 - Discounts may be available during specific offers.",
//   },
//   {
//     ques: "Is it possible to postpone my enrollment to a future batch?",
//     ans: "Yes, a one-time deferment to a later batch of the same course is allowed within 30 days of purchase.",
//   },
//   {
//     ques: "What is the refund policy?",
//     ans: "We have a strict no-refund policy. Once purchased, access rights are processed for your account, and therefore, refund requests will not be entertained under any circumstances.",
//   },
//   {
//     ques: "How can I get help if I have questions or face technical issues?",
//     ans: "If you face technical issues or need assistance, attend doubt resolution sessions or revision classes(only for Premium and Pro plan), raise a support ticket via the Help Centre on the PW Skills website, or email support@pwskills.com.",
//   },
//   {
//     ques: "How long will I have access to the course material?",
//     ans: "Learners retain access to the course material for 2 years from the date of purchase of the course.",
//   },
// ];

// const courseModules = [
//   {
//     name: "Introduction to Web Development and The Internet",

//     modules: [
//       "Lesson 01: Introduction to Web Development",

//       "Lesson 02: Understanding the Internet",

//       "Lesson 03: Setting Up Your Development Environment",

//       "Lesson 04: How the Web Works (Clients, Servers, DNS, HTTP)",
//       "Lesson 05: Introduction to Full Stack Development",
//     ],
//   },

//   {
//     name: "Frontend Development - HTML & CSS",
//     modules: [
//       "Lesson 01: HTML Basics & Structure",

//       "Lesson 02: Forms, Media, and Semantics",

//       "Lesson 03: Introduction to CSS",

//       "Lesson 04: Layouts with Flexbox and Grid",

//       "Lesson 05: Responsive Design & Media Queries",

//       "Lesson 06: CSS Variables & Units",

//       "Lesson 07: Introduction to TailwindCSS (or Bootstrap)",
//     ],
//   },

//   {
//     name: "Frontend Development - JavaScript",

//     modules: [
//       "Lesson 01: JavaScript Basics (Variables, Types, Operators)",

//       "Lesson 02: Control Flow and Functions",

//       "Lesson 03: Arrays and Objects",

//       "Lesson 04: DOM Manipulation",

//       "Lesson 05: Events and Event Handling",

//       "Lesson 06: ES6+ Features (Destructuring, Spread, etc.)",

//       "Lesson 07: JavaScript Best Practices",
//     ],
//   },

//   {
//     name: "Frontend Development - React.js",

//     modules: [
//       "Lesson 01: Introduction to React",

//       "Lesson 02: JSX and Components",

//       "Lesson 03: Props and State",

//       "Lesson 04: Event Handling in React",

//       "Lesson 05: Conditional Rendering and Lists",

//       "Lesson 06: useEffect and useState Hooks",

//       "Lesson 07: React Router",

//       "Lesson 08: Lifting State and Context API",
//     ],
//   },

//   {
//     name: "Backend Development - Node.js & Express",

//     modules: [
//       "Lesson 01: Introduction to Node.js",

//       "Lesson 02: Working with the File System and Modules",

//       "Lesson 03: Introduction to Express.js",
//       "Lesson 04: RESTful APIs with Express",

//       "Lesson 05: Middleware and Error Handling",

//       "Lesson 06: Authentication and Authorization (JWT, Sessions)",
//     ],
//   },

//   {
//     name: "Database Management - MongoDB",

//     modules: [
//       "Lesson 01: Introduction to NoSQL & MongoDB",

//       "Lesson 02: Setting Up MongoDB Atlas or Local DB",

//       "Lesson 03: CRUD Operations",

//       "Lesson 04: Mongoose ODM",

//       "Lesson 05: Data Modeling and Relationships",

//       "Lesson 06: Aggregation and Indexing",
//     ],
//   },

//   {
//     name: "Full Stack Integration",
//     modules: [
//       "Lesson 01: Connecting Frontend with Backend",

//       "Lesson 02: Handling API Requests from React",

//       "Lesson 03: Axios and Fetch",

//       "Lesson 04: Protecting Routes and Managing Auth",

//       "Lesson 05: CORS and Environment Variables",
//     ],
//   },

//   {
//     name: "Version Control and Deployment",

//     modules: [
//       "Lesson 01: Git & GitHub Basics",

//       "Lesson 02: Git Branching and Collaboration",

//       "Lesson 03: Deploying Frontend on Netlify/Vercel",

//       "Lesson 04: Deploying Backend with Render or Railway",

//       "Lesson 05: Connecting to MongoDB Atlas in Production",
//     ],
//   },

//   {
//     name: "Advanced Topics (Optional)",

//     modules: [
//       "Lesson 01: TypeScript Basics",

//       "Lesson 02: Redux or Context + useReducer for State Management",

//       "Lesson 03: Server-Side Rendering (Next.js Intro)",

//       "Lesson 04: Testing with Jest and React Testing Library",

//       "Lesson 05: Web Security Best Practices",
//     ],
//   },

//   {
//     name: "Capstone Project & Portfolio",

//     modules: [
//       "Lesson 01: Project Planning and Wireframing",

//       "Lesson 02: Building the Full Stack Application",

//       "Lesson 03: Adding Features and Polish",

//       "Lesson 04: Hosting and Domain Setup",
//       "Lesson 05: Resume and Portfolio Review",
//     ],
//   },
// ];
// const jsCourseModules = [
//   {
//     name: "Introduction to Programming with JavaScript",
//     modules: [
//       "Lesson 01: What is JavaScript?",
//       "Lesson 02: Setting Up Environment (Browser, VS Code, Node.js)",
//       "Lesson 03: JavaScript History and Use Cases",
//       "Lesson 04: Your First JS Program",
//       "Lesson 05: Debugging in the Console",
//     ],
//   },
//   {
//     name: "JavaScript Fundamentals",
//     modules: [
//       "Lesson 01: Variables (let, const, var)",
//       "Lesson 02: Data Types and Type Conversion",
//       "Lesson 03: Operators and Expressions",
//       "Lesson 04: Control Flow (if, else, switch)",
//       "Lesson 05: Loops (for, while, do-while)",
//     ],
//   },
//   {
//     name: "Functions and Scope",
//     modules: [
//       "Lesson 01: Declaring and Invoking Functions",
//       "Lesson 02: Parameters, Arguments, Return Values",
//       "Lesson 03: Function Expressions and Arrow Functions",
//       "Lesson 04: Scope and Hoisting",
//       "Lesson 05: Closures and IIFE",
//     ],
//   },
//   {
//     name: "Working with Arrays and Objects",
//     modules: [
//       "Lesson 01: Array Basics and Methods",
//       "Lesson 02: Iterating Arrays (map, filter, reduce)",
//       "Lesson 03: Object Creation and Access",
//       "Lesson 04: Object Methods and `this` Keyword",
//       "Lesson 05: Nested Objects and Arrays",
//     ],
//   },
//   {
//     name: "DOM Manipulation and Events",
//     modules: [
//       "Lesson 01: The DOM Tree and Node Selection",
//       "Lesson 02: Modifying Elements (text, HTML, styles)",
//       "Lesson 03: Creating and Removing Elements",
//       "Lesson 04: Handling Events (click, submit, etc.)",
//       "Lesson 05: Event Delegation and Bubbling",
//     ],
//   },
//   {
//     name: "ES6+ Modern JavaScript",
//     modules: [
//       "Lesson 01: let/const, Template Literals",
//       "Lesson 02: Destructuring, Spread and Rest",
//       "Lesson 03: Arrow Functions and Default Parameters",
//       "Lesson 04: Classes and Inheritance",
//       "Lesson 05: Modules (import/export)",
//     ],
//   },
//   {
//     name: "Asynchronous JavaScript",
//     modules: [
//       "Lesson 01: Synchronous vs Asynchronous",
//       "Lesson 02: Callbacks and Callback Hell",
//       "Lesson 03: Promises and Chaining",
//       "Lesson 04: Async/Await",
//       "Lesson 05: Fetch API and Error Handling",
//     ],
//   },
//   {
//     name: "Working with APIs",
//     modules: [
//       "Lesson 01: What is an API?",
//       "Lesson 02: Making GET and POST Requests",
//       "Lesson 03: JSON and Data Parsing",
//       "Lesson 04: Building Dynamic UI with API Data",
//       "Lesson 05: Error Handling and Loading States",
//     ],
//   },
//   {
//     name: "Advanced JavaScript Concepts",
//     modules: [
//       "Lesson 01: Execution Context and Call Stack",
//       "Lesson 02: The Event Loop and Microtasks",
//       "Lesson 03: Memory Management",
//       "Lesson 04: Debouncing and Throttling",
//       "Lesson 05: Prototypes and the Prototype Chain",
//     ],
//   },
//   {
//     name: "JavaScript Tools and Ecosystem",
//     modules: [
//       "Lesson 01: npm and Package Management",
//       "Lesson 02: Babel and Transpiling",
//       "Lesson 03: ESLint and Prettier",
//       "Lesson 04: Introduction to Webpack",
//       "Lesson 05: DevTools and Debugging",
//     ],
//   },
//   {
//     name: "Project Building and Final Assessment",
//     modules: [
//       "Lesson 01: Project Planning and Setup",
//       "Lesson 02: Building a Real-World JS App",
//       "Lesson 03: Code Refactoring and Optimization",
//       "Lesson 04: Hosting with GitHub Pages",
//       "Lesson 05: Final Project Presentation",
//     ],
//   },
// ];
// const fdCourseModules = [
//   {
//     name: "HTML & CSS Essentials",
//     modules: [
//       "Lesson 01: HTML Structure and Tags",
//       "Lesson 02: Semantic HTML and Forms",
//       "Lesson 03: CSS Basics and Selectors",
//       "Lesson 04: Box Model and Positioning",
//       "Lesson 05: Responsive Design with Media Queries",
//     ],
//   },
//   {
//     name: "CSS Frameworks & Preprocessors",
//     modules: [
//       "Lesson 01: Introduction to TailwindCSS",
//       "Lesson 02: Utility-first Design",
//       "Lesson 03: Bootstrap Components",
//       "Lesson 04: SCSS and Preprocessing Basics",
//       "Lesson 05: Theming and Customization",
//     ],
//   },
//   {
//     name: "JavaScript for Frontend",
//     modules: [
//       "Lesson 01: DOM Manipulation",
//       "Lesson 02: Event Handling and Forms",
//       "Lesson 03: Local Storage and Session Storage",
//       "Lesson 04: Fetch API and Dynamic UI",
//       "Lesson 05: Modular JavaScript and ES6",
//     ],
//   },
//   {
//     name: "Modern Frontend with React",
//     modules: [
//       "Lesson 01: React Basics and JSX",
//       "Lesson 02: Components, Props and State",
//       "Lesson 03: Conditional Rendering and Lists",
//       "Lesson 04: useEffect and useState",
//       "Lesson 05: React Router and Navigation",
//     ],
//   },
//   {
//     name: "UI/UX and Accessibility",
//     modules: [
//       "Lesson 01: UI Design Principles",
//       "Lesson 02: UX Best Practices",
//       "Lesson 03: Accessibility Guidelines",
//       "Lesson 04: Color Contrast and Typography",
//       "Lesson 05: Responsive Grids and Layouts",
//     ],
//   },
// ];

// const backendCourseModules = [
//   {
//     name: "Node js and JavaScript Fundamentals",
//     modules: [
//       "Lesson 01: Intro to Node.js and Setup",
//       "Lesson 02: Node Modules and File System",
//       "Lesson 03: Event Loop and Async Programming",
//       "Lesson 04: Environment Variables and Config",
//       "Lesson 05: Working with JSON and APIs",
//     ],
//   },
//   {
//     name: "Express.js Framework",
//     modules: [
//       "Lesson 01: Intro to Express.js",
//       "Lesson 02: Routing and Middleware",
//       "Lesson 03: REST APIs and CRUD Operations",
//       "Lesson 04: Error Handling and Logging",
//       "Lesson 05: Authentication using JWT",
//     ],
//   },
//   {
//     name: "Databases - MongoDB & SQL",
//     modules: [
//       "Lesson 01: NoSQL vs SQL Concepts",
//       "Lesson 02: MongoDB Basics and Atlas Setup",
//       "Lesson 03: Mongoose for Data Modeling",
//       "Lesson 04: SQL Queries and Joins",
//       "Lesson 05: Data Validation and Indexing",
//     ],
//   },
//   {
//     name: "API Security and Performance",
//     modules: [
//       "Lesson 01: Rate Limiting and CORS",
//       "Lesson 02: Secure Auth with JWT and Sessions",
//       "Lesson 03: API Optimization Techniques",
//       "Lesson 04: Error Monitoring Tools",
//       "Lesson 05: Secure Data Handling",
//     ],
//   },
//   {
//     name: "Deployment & Scaling",
//     modules: [
//       "Lesson 01: Version Control with Git",
//       "Lesson 02: Deployment on Render/Railway",
//       "Lesson 03: Environment Management",
//       "Lesson 04: CI/CD Basics",
//       "Lesson 05: Backend Monitoring",
//     ],
//   },
// ];
// const fullCourseModules = [
//   {
//     name: "Full Stack Overview & Setup",
//     modules: [
//       "Lesson 01: Full Stack Architecture",
//       "Lesson 02: Development Environment Setup",
//       "Lesson 03: Intro to Git & GitHub",
//       "Lesson 04: Folder Structures & Conventions",
//       "Lesson 05: Project Planning & Wireframes",
//     ],
//   },
//   {
//     name: "Frontend Development with React",
//     modules: [
//       "Lesson 01: React Setup and JSX",
//       "Lesson 02: State Management",
//       "Lesson 03: Routing and Navigation",
//       "Lesson 04: Form Handling and Validation",
//       "Lesson 05: Consuming APIs in React",
//     ],
//   },
//   {
//     name: "Backend APIs with Express.js",
//     modules: [
//       "Lesson 01: Creating REST APIs",
//       "Lesson 02: Route Protection with JWT",
//       "Lesson 03: File Upload and Static Serving",
//       "Lesson 04: User Authentication",
//       "Lesson 05: Connecting Frontend with Backend",
//     ],
//   },
//   {
//     name: "Database Integration",
//     modules: [
//       "Lesson 01: MongoDB Setup & Mongoose",
//       "Lesson 02: Schema Design & Population",
//       "Lesson 03: Data Relationships",
//       "Lesson 04: CRUD Operations",
//       "Lesson 05: Deployment with DB",
//     ],
//   },
//   {
//     name: "Capstone Project",
//     modules: [
//       "Lesson 01: Project Requirements",
//       "Lesson 02: Dev Setup & Task Division",
//       "Lesson 03: Development & Testing",
//       "Lesson 04: Deployment",
//       "Lesson 05: Final Submission & Review",
//     ],
//   },
// ];
// const aiCourseModules = [
//   {
//     name: "Introduction to AI Coding Tools",
//     modules: [
//       "Lesson 01: What is AI-assisted Coding?",
//       "Lesson 02: Tools Overview (GitHub Copilot, ChatGPT)",
//       "Lesson 03: Prompts and Pair Programming",
//       "Lesson 04: Use Cases & Limitations",
//       "Lesson 05: Ethics and Best Practices",
//     ],
//   },
//   {
//     name: "Using ChatGPT for Development",
//     modules: [
//       "Lesson 01: Writing Prompts for Code Generation",
//       "Lesson 02: Explaining & Refactoring Code",
//       "Lesson 03: Debugging with AI",
//       "Lesson 04: Creating Documentation",
//       "Lesson 05: API and Regex Assistance",
//     ],
//   },
//   {
//     name: "AI Tools in Frontend Dev",
//     modules: [
//       "Lesson 01: Generating HTML/CSS Components",
//       "Lesson 02: Styling Suggestions",
//       "Lesson 03: React Component Generation",
//       "Lesson 04: Accessibility & UI Tips",
//       "Lesson 05: Real-time AI Coding Assistants",
//     ],
//   },
//   {
//     name: "AI Tools in Backend Dev",
//     modules: [
//       "Lesson 01: Scaffold APIs with AI",
//       "Lesson 02: Security & Error Handling",
//       "Lesson 03: Database Schema Help",
//       "Lesson 04: Creating Test Cases",
//       "Lesson 05: Optimizing Code using AI",
//     ],
//   },
//   {
//     name: "Build a Project with AI Tools",
//     modules: [
//       "Lesson 01: Project Planning using AI",
//       "Lesson 02: Code Generation & Refactoring",
//       "Lesson 03: Testing and Debugging",
//       "Lesson 04: Documentation",
//       "Lesson 05: Final Project Presentation",
//     ],
//   },
// ];
// const aptiCourseModules = [
//   {
//     name: "Quantitative Aptitude",
//     modules: [
//       "Lesson 01: Number Systems",
//       "Lesson 02: Percentages and Profit & Loss",
//       "Lesson 03: Time, Speed and Distance",
//       "Lesson 04: Ratio, Proportion & Averages",
//       "Lesson 05: Permutations and Combinations",
//     ],
//   },
//   {
//     name: "Logical Reasoning",
//     modules: [
//       "Lesson 01: Syllogisms and Assumptions",
//       "Lesson 02: Puzzles and Seating Arrangement",
//       "Lesson 03: Blood Relations",
//       "Lesson 04: Coding-Decoding",
//       "Lesson 05: Directional Sense",
//     ],
//   },
//   {
//     name: "Verbal Ability",
//     modules: [
//       "Lesson 01: Vocabulary & Synonyms",
//       "Lesson 02: Reading Comprehension",
//       "Lesson 03: Sentence Correction",
//       "Lesson 04: Parajumbles",
//       "Lesson 05: Analogies",
//     ],
//   },
//   {
//     name: "Data Interpretation",
//     modules: [
//       "Lesson 01: Pie Charts",
//       "Lesson 02: Bar Graphs",
//       "Lesson 03: Line Graphs",
//       "Lesson 04: Tabular Data",
//       "Lesson 05: Caselets and Mixed DI",
//     ],
//   },
//   {
//     name: "Mock Tests & Strategies",
//     modules: [
//       "Lesson 01: Time Management Techniques",
//       "Lesson 02: Solving Previous Year Questions",
//       "Lesson 03: Sectional Mock Tests",
//       "Lesson 04: Full-Length Aptitude Tests",
//       "Lesson 05: Exam Strategy and Tips",
//     ],
//   },
// ];
// const ssCourseModules = [
//   {
//     name: "Communication Skills",
//     modules: [
//       "Lesson 01: Verbal & Non-Verbal Communication",
//       "Lesson 02: Listening Skills",
//       "Lesson 03: Public Speaking & Storytelling",
//       "Lesson 04: Presentation Techniques",
//       "Lesson 05: Giving & Receiving Feedback",
//     ],
//   },
//   {
//     name: "Teamwork and Collaboration",
//     modules: [
//       "Lesson 01: Working in Teams",
//       "Lesson 02: Conflict Resolution",
//       "Lesson 03: Delegation and Leadership",
//       "Lesson 04: Building Trust",
//       "Lesson 05: Virtual Collaboration Tools",
//     ],
//   },
//   {
//     name: "Emotional Intelligence",
//     modules: [
//       "Lesson 01: Self-Awareness",
//       "Lesson 02: Empathy and Social Skills",
//       "Lesson 03: Managing Emotions",
//       "Lesson 04: Growth Mindset",
//       "Lesson 05: Stress and Anger Management",
//     ],
//   },
//   {
//     name: "Workplace Etiquette",
//     modules: [
//       "Lesson 01: Professionalism and Ethics",
//       "Lesson 02: Email and Meeting Etiquette",
//       "Lesson 03: Time Management",
//       "Lesson 04: Resume Building Tips",
//       "Lesson 05: Interview Skills",
//     ],
//   },
//   {
//     name: "Personal Branding",
//     modules: [
//       "Lesson 01: LinkedIn Optimization",
//       "Lesson 02: Building an Online Presence",
//       "Lesson 03: Creating Portfolios",
//       "Lesson 04: Networking Skills",
//       "Lesson 05: Elevator Pitch",
//     ],
//   },
// ];

// const buttons = [
//   {
//     title: "Web Development",
//     module: courseModules,
//   },
//   {
//     title: "Javascript",
//     module: jsCourseModules,
//   },
//   {
//     title: "Frontend Development",
//     module: fdCourseModules,
//   },
//   {
//     title: "Backend and Databases",
//     module: backendCourseModules,
//   },
//   {
//     title: "Full Stack Development",
//     module: fullCourseModules,
//   },
//   {
//     title: "Code with AI",
//     module: aiCourseModules,
//   },
//   {
//     title: "Aptitude",
//     module: aptiCourseModules,
//   },
//   {
//     title: "Soft Skills",
//     module: ssCourseModules,
//   },
// ];

// const Feature = ({ title, description }) => (
//   <div className="flex gap-2 items-start">
//     <TiTick className="text-green-500 mt-1" size={28} />
//     <div>
//       <h3 className="font-semibold text-lg text-black">{title}</h3>
//       <p className="text-gray-700 text-sm mt-1">{description}</p>
//     </div>
//   </div>
// );

const Template = () => {
  const [data1, setData1] = useState({
    title: "",
    name: "",
    email: "",
    mobile: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    Email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [open, setOpen] = useState(false);
  const [activeModule, setActiveModule] = useState(null);

  const toggleModule = (name) => {
    setActiveModule(activeModule === name ? null : name);
  };

  const { courseid } = useParams();
  const course = courseData.find((c) => c.courseid === courseid);
  const course2 = courseData.find((c) => c.courseid === courseid);

  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    console.log(sliderRef);
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth * 0.4;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);
  // const mentors = [
  //   {
  //     name: "Priyash Nigam",
  //     role: "CEO, Execube Digital | Fractional CMO",
  //     company: "SKILLS",
  //     exp: "9+ Years",
  //     teach: "5+ Years",
  //     desc: "Priyash Nigam is a digital marketing strategist with over 9 years of experience in performance marketing.",
  //     image: "https://via.placeholder.com/150", // replace with actual image
  //   },
  //   {
  //     name: "Priya Bhatia",
  //     role: "Senior Data Scientist",
  //     company: "PHYSICS WALLAH",
  //     exp: "4+ Years",
  //     teach: "4+ Years",
  //     desc: "AI M.Tech | IIT Hyderabad | Data Structures | Problem Solving | Programming Languages...",
  //     image: "https://via.placeholder.com/150", // replace with actual image
  //   },
  //   {
  //     name: "Sanket Singh",
  //     role: "Full Stack Developer",
  //     company: "Google",
  //     exp: "4+ Years",
  //     teach: "7+ Years",
  //     desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
  //     image: "https://via.placeholder.com/150", // replace with actual image
  //   },
  //   // {
  //   //   name: "Sanket Singh",
  //   //   role: "Full Stack Developer",
  //   //   company: "Google",
  //   //   exp: "4+ Years",
  //   //   teach: "7+ Years",
  //   //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
  //   //   image: "https://via.placeholder.com/150", // replace with actual image
  //   // },
  //   // {
  //   //   name: "Sanket Singh",
  //   //   role: "Full Stack Developer",
  //   //   company: "Google",
  //   //   exp: "4+ Years",
  //   //   teach: "7+ Years",
  //   //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
  //   //   image: "https://via.placeholder.com/150", // replace with actual image
  //   // },
  //   // {
  //   //   name: "Sanket Singh",
  //   //   role: "Full Stack Developer",
  //   //   company: "Google",
  //   //   exp: "4+ Years",
  //   //   teach: "7+ Years",
  //   //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
  //   //   image: "https://via.placeholder.com/150", // replace with actual image
  //   // },
  //   // {
  //   //   name: "Sanket Singh",
  //   //   role: "Full Stack Developer",
  //   //   company: "Google",
  //   //   exp: "4+ Years",
  //   //   teach: "7+ Years",
  //   //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
  //   //   image: "https://via.placeholder.com/150", // replace with actual image
  //   // },
  //   // {
  //   //   name: "Sanket Singh",
  //   //   role: "Full Stack Developer",
  //   //   company: "Google",
  //   //   exp: "4+ Years",
  //   //   teach: "7+ Years",
  //   //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
  //   //   image: "https://via.placeholder.com/150", // replace with actual image
  //   // },
  //   // Add more mentors as needed
  // ];
  console.log(course);
  const [selectedModule, setSelectedModule] = useState(
    course ? course.courseInfo.buttons[0].module[0] : null
  );
  const [selectedCourse, setSelectedCourse] = useState(
    course ? course.courseInfo.buttons[0].module : null
  );
  const [category, setCategory] = useState("Web Development");
  if (!course) {
    return <h2>Course not found</h2>;
  }
  console.log(course2);

  // const [category2, setCategory2] = useState("Web Development");
  if (!course2) {
    return <h2>Course not found</h2>;
  }

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
    console.log(data);
    const data1 = {
      title: "Counseling From  ",
      message: `📌 Counseling From :
  
        - Name : ${data.name}
        - Email: ${data.Email}
        - Mobile : ${data.mobile}
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
    setOpen(false);
  };
  return (
    <div className="bg-blue-100/50">
      <section className=" overflow-hidden  bg-gradient-to-r from-blue-950  to-purple-950 px-5 md:px-20 ">
        <div className="flex flex-wrap absolute left-0 top-0  overflow-hidden w-full h-234 sm:h-222 md:h-150 lg:h-150 xl:h-180">
          {" "}
          {Array.from({ length: 1000 }).map((_, index) => (
            <div className="w-16 h-15 border border-blue-900/20"></div>
          ))}
        </div>
        <p className="flex  items-center text-white md:ps-20 pt-30 font-semibold">
          <Link to={"/"} className="flex items-center ">
            {" "}
            <FaHome /> Home
          </Link>
          <MdKeyboardArrowUp className="rotate-90" />
          {course.courseInfo.name}
        </p>
        <div className="hero-section-container  flex  gap-5 flex-col-reverse md:flex-row md:h-[90vh] pt-10  ">
          <div className="hero-left z-20  flex-4">
            <div className="bread-crumb "></div>
            <p className="text-blue-300 font-semibold mt-20 md:mt-0 ">
              {course.courseInfo.tag}
            </p>
            <h1 className="text-4xl text-white font-bold pt-[10px] ">
              {course.courseInfo.name}
            </h1>
            <div className="course-intro-container text-white pt-[10px]">
              <p>
                {course.courseInfo.para1}
                <br />
                {course.courseInfo.para2}
              </p>
            </div>
            <div className="button-container flex flex-col md:flex-row  w-full gap-[20px] mt-[100px]  ">
              <Link
                to={"/contextus"}
                className=" bg-blue-800 shadow-md shadow-black text-[white] h-[50px] w-full md:w-[50%] rounded-[7px]"
              >
                <button className="w-full h-full "> Enroll Now </button>
              </Link>
              {/* <button className="flex items-center gap-2 border-[1px] border-blue-800 text-blue-800 bg-blue-100 shadow-md shadow-black font-semibold rounded-[7px] px-3 h-[50px] w-full md:w-[50%]">
                <LiaDownloadSolid /> Download Curriculum
              </button> */}
            </div>
            <p className="pt-[30px] text-blue-300 font-semibold">
              *EMI options available
            </p>
          </div>
          <div className="hero-right xl:w-140 z-20   xl:h-[350px] md:w-100 md:h-[250px] w-full h-50 rounded-4xl shadow-black shadow-md  ">
            <img
              src={course.courseInfo.img}
              alt="course-image"
              className=" h-full w-full  rounded-4xl"
            />
          </div>
        </div>
      </section>
      <section className="flex items-center characteristics-container  py-2 mt-10 px-5 md:px-20 ">
        <div className="characteristics grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-y-5 lg:grid-cols-4 w-full h-full items-center  justify-between ">
          {course.courseInfo.JTDL.map((JTDL, i) => (
            <div className="flex flex-col items-center justify-center h-full pb-5 sm:pb-0 border-blue-900 border-b sm:border-b-0 sm:border-x">
              <h2 className="text-2xl w-full text-center  font-semibold ">
                {JTDL.H}
              </h2>
              <p className="w-full text-lg text-center"> {JTDL.P}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full py-16 px-6 md:px-20">
        <div className=" mb-12">
          <h2 className="text-4xl ps-5 py-3 border-s-5 border-blue-900 font-bold  text-black">
            About {course.courseInfo.name}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 ">
          <div className="flex-2 ">
            <p className="text-gray-700 text-[16px] leading-7 mb-10 max-w-[600px] ">
              {course.courseInfo.aboutpara}
            </p>

            <div className="flex flex-wrap gap-7 ">
              {course.courseInfo.aboutCourse.map((about) => (
                <div className=" w-70">
                  <h3 className="flex items-center gap-2 font-semibold text-lg text-black">
                    {" "}
                    <div className="flex items-center justify-center text-white w-6 h-6  rounded-full bg-green-500">
                      <MdOutlineDone />
                    </div>
                    {about.title}
                  </h3>
                  <p className="text-gray-700 text-sm mt-1">{about.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="  flex justify-center items-end w-full lg:w-[500px] ">
            <img
              src={course.courseInfo.aboutImg}
              alt="Overview Illustration"
              className="w-full h-full object-contain rounded-4xl  shadow-md shadow-black"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-14 px-5 md:px-20">
        <h2 className="text-4xl py-3 ps-5 border-s-5 border-red-600/60  md:text-4xl font-bold  mb-12 text-gray-900">
          {course.courseInfo.exclusiveCourseH}
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 ">
          {course.courseInfo.exclusiveCourse.map((course) => (
            <div className="flex flex-col items-center justify-center gap-3 px-5  border border-gray-200 min-h-[180px] text-center">
              <img
                src={course.img}
                alt="image"
                className="w-20 h-20 object-contain "
              />
              <p className="text-sm md:text-base text-gray-800 max-w-[240px] ">
                {course.dece}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="h-[50vh] w-[100%]  mt-[60px] px-5 md:px-20 ">
        <div className="flex py-3 font-bold text-4xl ps-5 border-s-5 border-red-600/60   text-gray-900">
          <h1>{course.courseInfo.masterToolsH}</h1>
        </div>

        <div
          className="flex gap-[50px] mt-[50px] overflow-x-auto scrollbar-hide no-scrollbar whitespace-nowrap p-4"
          ref={sliderRef}
        >
          {course.courseInfo.masterTools.map((tool) => (
            <div className=" h-[100px] bg-white w-[300px] flex justify-center items-center flex-shrink-0 rounded-[20px]  shadow-sm shadow-[#aaa]">
              <div>
                <img src={tool.img} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center text-[#d45d56] mt-5 text-3xl gap-8">
          <button
            className="hover:bg-white rounded-full hover:shadow-sm hover:shadow-[#aaa] w-10 h-10 flex items-center justify-center"
            onClick={() => scrollSlider("left")}
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            className="hover:bg-white rounded-full hover:shadow-sm hover:shadow-[#aaa] w-10 h-10 flex items-center justify-center"
            onClick={() => scrollSlider("right")}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </section>
      {/* <section className="curriculum bg-[#f8f8f8] min-h-[150vh] px-5 md:px-20">
        <div>
          <h1 className=" flex  text-4xl ps-5 border-s-5 border-red-600/60  font-bold text-[#484a4e] py-3 mb-10">
            {course.courseInfo.courseCurriculumH}
          </h1>
          <div className="tabs overflow-x-auto  scrollbar-hide ">
            <ul className="flex gap-[15px] overflow-x-auto scroll-smooth no-scrollbar mb-5">
              {course.courseInfo.buttons.map((button, idx) => (
                <li
                  className={`flex border rounded-lg border-gray-300 py-3 min-w-[220px] items-center justify-center cursor-pointer hover:bg-[#d45d56] hover:text-white ${
                    category === button.title
                      ? "bg-[#d45d56] text-white"
                      : "bg-[#fff]"
                  }`}
                  onClick={() => {
                    setSelectedCourse(button.module);
                    setSelectedModule(button.module[0]);
                    setCategory(button.title);
                  }}
                >
                  {button.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex   gap-[10px] mt-[20px]  bg-[#fff] ">
            <div className="lg:flex flex-col md:h-[70vh] hidden h-[100vh]  flex-1 w-[300px]  overflow-y-auto">
              {selectedCourse.map((item, idx) => (
                <button
                  className={`border-b-[1px] border-b-[#bbb] cursor-pointer h-[80px] w-full  py-[30px]  hover:text-[#d45d56] ${
                    selectedModule.name === item.name &&
                    "text-[#d45d56] border-s-2  "
                  } `}
                  onClick={() => {
                    setSelectedModule(item);
                  }}
                >
                  <div className="flex items-center justify-between  px-[40px]">
                    <div className="flex flex-col items-start">
                      <sup>Module {idx + 1}</sup>
                      <p>{item.name}</p>
                    </div>
                    <div className="flex ">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:flex flex-col flex-1  hidden px-[10px] py-[10px]">
              {selectedModule.modules.map((mName) => (
                <p className="border border-[#ccc] py-[15px] px-[10px]">
                  {mName}
                </p>
              ))}
            </div>
            <div className="w-full lg:hidden  rounded">
              {selectedCourse.map((module, i) => (
                <div
                  key={module.name}
                  className={`border-b cursor-pointer ${
                    activeModule === module.name
                      ? "border-l-4 border-red-500"
                      : ""
                  }`}
                >
                  
                  <button
                    onClick={() => toggleModule(module.name)}
                    className={`w-full flex justify-between items-center px-4 py-3 text-left ${
                      activeModule === module.name
                        ? "text-red-500 font-semibold"
                        : ""
                    }`}
                  >
                    <span>
                      <span className="block text-sm text-gray-500">
                        Module {i + 1}
                      </span>
                      <span>{module.name}</span>
                    </span>

                    <HiChevronRight
                      className={`text-xl transition-transform duration-300 ${
                        activeModule === module.name
                          ? "rotate-90 text-red-500"
                          : "-rotate-90"
                      }`}
                    />
                  </button>

                  
                  {activeModule === module.name && (
                    <ul className="pl-6 pr-4 pb-3 space-y-2 bg-gray-50">
                      {module.modules?.map((lesson, j) => (
                        <li
                          key={j}
                          className="p-2 rounded hover:bg-gray-200 text-gray-700"
                        >
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex text-xl justify-center  pb-10 lg:pb-0 ">
          <button className="flex items-center  gap-[30px] mt-[80px] justify-center bg-white text-[#e97862] h-[70px] w-[300px] rounded-[40px] cursor-pointer">
            Download Curriculum{" "}
            <div className="bg-[#e97862] p-[5px] text-2xl text-white rounded-[50%]">
              <LiaDownloadSolid />
            </div>
          </button>
        </div>
      </section> */}
      {/* <section className="bg-white  px-5 md:px-20 mt-10">
        <h1 className="text-4xl py-3 ps-5 border-s-5 border-red-600/60   text-neutral-700   font-bold  mb-6 flex ">
          {course.courseInfo.BuildProjectsFromScratchH}
        </h1>
        <div className="project-containers flex   pt-[20px] gap-[20px]">
          <div className="grid  sm:grid-cols-2 gap-5 left-containers w-full  ">
            {course.courseInfo.BuildProjectsFromScratch.map((course, i) => (
              <div className="top-container flex items-center lg:flex-row flex-col shadow-sm shadow-[#aaa] min-h-[40vh]  rounded-[10px]">
                <div className="photo w-full h-60 lg:h-full border   rounded-l-[10px]">
                  <img className="" src={course} alt={`${course.ImgH} image`} />
                </div>
                <div className="text w-full mt-5 mb-10 ps-5 flex-col">
                  <h3 className="text-[20px]">{course.ImgH}</h3>
                  <p className="text-[14px]">{course.ImgPara}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section className="px-5 md:px-20 py-10 flex flex-col ">
        <h2 className="text-4xl ps-5 border-s-5 border-red-600/60   text-neutral-700 p-2  font-bold  mb-6 flex ">
          {course.Mentors.Heading}
        </h2>

        <div className="w-full overflow-x-auto  scroll-smooth no-scrollbar py-6">
          <div className="flex gap-6 w-max px-4 ">
            {course.mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white w-70 sm:w-90 rounded-xl border shadow hover:shadow-lg transition flex-shrink-0 relative"
              >
                <div className="absolute top-55 right-5 rounded h-5 w-5">
                  <FaLinkedin className="cursor-pointer h-full w-full  rounded-lg hover:text-blue-500" />
                </div>
                <div className="h-50 bg-orange-100 flex justify-center  rounded-t-xl">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="h-50 w-50 pt-10 object-cover border"
                  />
                </div>

                <div className="p-4 ">
                  <h3 className="text-lg font-bold">{mentor.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{mentor.role}</p>
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <img
                      src=""
                      alt="sampleImage"
                      className="h-10 w-40 border"
                    />
                  </p>

                  <div className="flex justify-between mt-3 text-sm border-t py-3 border-black/40 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MdWork className="h-7 w-7 text-black/80" />
                      <div>
                        <p className="text-black font-semibold">{mentor.exp}</p>{" "}
                        <p>Work Experience</p>
                      </div>
                    </div>
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
      </section> */}
      {/* <div className="bg-blue-200 py-1 flex flex-col sm:flex-row  items-center justify-center gap-[10px] font-[20px]">
        {" "}
        <div className="bg-white rounded-[50%] w-[25px] h-[25px] font-[20px] flex justify-center items-center text-yellow-700">
          <FaQuestion />
        </div>
        Still confused? Let us clear all your queries{" "}
        <a href="#call">
          {" "}
          <button className=" bg-blue-500 px-5 py-2 flex justify-center items-center text-white rounded-[5px]">
            Get Call Back
          </button>
        </a>
      </div> */}
      {/* <section className="w-full  bg-white px-5 md:px-20 text-black flex flex-col">
        <h1 className="text-4xl py-3 ps-5 border-s-5 border-red-600/60   text-neutral-700  mt-10 font-bold  mb-6 flex ">
          Validating Your Success: About Your Certificate
        </h1>

        <div className="flex flex-1 flex-col-reverse md:flex-row items-center md:items-start pt-[60px] gap-[40px]">
          <div className="w-[60%] space-y-5 pt-[50px]">
            <p className="text-xl font-medium underline decoration-solid">
              {course.courseInfo.name} Course
            </p>
            <br />
            <p className="italic text-[18px]">{course.GetCertified.para}</p>
            <br />
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {course.CertifiedPoint.map((Certified) => (
                <li>{Certified.para}</li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[40%] flex justify-center border h-80 ">
            <img
              src={course.GetCertified.img}
              alt="Course Certificate"
              className="max-w-sm w-full shadow-lg rounded-lg"
            />
          </div>
        </div>
      </section> */}
      {/* <section className="w-full bg-white py-14 px-6 md:px-20">
        <h2 className="text-4xl py-3 ps-5 border-s-5 border-red-600/60  md:text-4xl font-bold  mb-12 text-gray-900">
          Alumni's Testimonies
        </h2>

        <div className="max-w-6xl mx-auto flex flex-row flex-wrap gap-8 justify-center ">
          {course.AlumnisTestimonies.map((Testimonies) => (
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-between w-90  ">
              <div className="text-[30px] ">
                <RiDoubleQuotesL className="text-green-600" />
                <p className="text-gray-700 text-base leading-relaxed">
                  {Testimonies.para}
                </p>
              </div>
              <div className="border-t border-dotted border-gray-300 mt-6 pt-4 flex items-center gap-3">
                <img
                  src="/images/shubham.jpg"
                  alt="Shubham Shrivastava"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-medium text-gray-900">
                    {Testimonies.name}
                  </h4>
                  <p className="text-sm text-gray-500">{Testimonies.skill}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="relative bg-blue-100  px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden ">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-60 -z-10"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-50 -z-10"></div>

        <div className="max-w-md text-center md:text-left space-y-4">
          <h3 className="text-3xl font-bold text-gray-800 mt-10 md:mt-0  ">
            Talk to Our Counsellor
          </h3>
          <p className="text-gray-700">
            Get Expert Advice our Counsellor will reach within <b>24 hour</b>
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Get Connected Now
          </button>
        </div>

        <div className="flex items-end justify-center mt-8 md:mt-0   h-80 w-80">
          <img
            src={counsellorImg}
            alt="Counsellor"
            className="h-65 object-cover"
          />
        </div>
      </section>
      {/* <section className="bg-white py-10 px-5 md:px-20">
        <h2 className="text-4xl py-3 ps-5 border-s-5 border-red-600/60  font-bold mb-4 flex ">
          {course.courseInfo.name} Cource
        </h2>

        <div
          className={`max-w-6xl mx-auto px-6 mt-[40px] py-[20px] bg-blue-50 text-[14px] overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-[3000px]" : "max-h-[70vh]"
          }`}
        >
          <p className="text-gray-700 mb-4 leading-relaxed">
            Web development is among the{" "}
            <span className="font-semibold">
              most in-demand careers in the tech industry
            </span>
            . As businesses expand their digital presence, organizations
            actively seek skilled professionals to develop, maintain, and
            optimize their websites. The field of web development continuously
            evolves with
            <span className="font-semibold"> emerging technologies</span>,
            ensuring a steady demand for full-stack web developers.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            With the rise of{" "}
            <span className="font-semibold">artificial intelligence</span>,
            certain aspects of development will become automated, making
            websites more interactive and user-friendly. However,
            <span className="font-semibold">
              {" "}
              human expertise remains crucial
            </span>{" "}
            in designing customized web solutions tailored to business needs.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            For those aspiring to build a career in web development, PW Skills
            offers a structured Full Stack Developer Course, covering front-end,
            back-end, and cloud technologies. Gain hands-on experience, build a
            professional portfolio, and earn certifications to enhance your
            career prospects.
          </p>

          <h3 className="text-2xl font-bold mb-3">
            What is Full Stack Web Development?
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            With businesses shifting online, there is an increasing demand for
            efficient and interactive websites. Full Stack Web Developers{" "}
            <span className="font-semibold">design, develop, and maintain</span>{" "}
            websites by handling both{" "}
            <span className="font-semibold">
              front-end and back-end operations
            </span>
            . These professionals play a vital role in ensuring websites are
            functional, user-friendly, and optimized for performance.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            A full-stack developer is proficient in multiple programming
            languages, frameworks, and tools, ensuring smooth website
            development and functionality. Below are some of the key technical
            skills required in full-stack development:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-6 leading-relaxed">
            <li>
              Front-End Development: HTML, CSS, JavaScript, Responsive Design,
              UI/UX.
            </li>
            <li>Back-End Development: PHP, Python, Node.js, Ruby, Java.</li>
            <li>Database Management: MySQL, MongoDB, PostgreSQL.</li>
            <li>
              Cybersecurity Principles: Secure coding practices, authentication
              techniques.
            </li>
            <li>Version Control: Git, GitHub, CI/CD pipelines.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-3">
            Full Stack Web Development Course by PW Skills
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PW Skills offers a comprehensive Full Stack Developer Course,
            featuring interactive tutorials, hands-on coding exercises, and
            real-world projects. The course is designed to help learners develop
            expertise in web development and prepare for industry roles.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This career-oriented program equips learners with the technical and
            problem-solving skills required to succeed in front-end and back-end
            development.
          </p>

          <h3 className="text-2xl font-bold mb-3">
            Types of Full Stack Web Development Course On PW Skills
          </h3>
          <p className="text-gray-700 leading-relaxed">
            PW Skills is now offering course modules especially dedicated to
            individuals based on their knowledge and expertise in the field.
            Choose the plan which is better inclined with your goals in your
            career.
          </p>
        </div>

        <div className="h-[40px] bg-blue-50 max-w-6xl mx-auto flex justify-end items-center px-6 text-red-400 cursor-pointer">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1"
          >
            {isExpanded ? "Read Less" : "Read More"}
            {isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
        </div>
      </section> */}
      <section className="relative bg-[#c3d3bb] px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-60 -z-10"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-50 -z-10"></div>

        <div className="max-w-md text-center md:text-left space-y-4">
          <h3 className="text-3xl font-bold text-gray-800 mt-10 md:mt-0">
            Still Confused?
          </h3>
          <p className="text-gray-700">
            Get Connected to our experts and know what's best for you.
            <b className="text-[#25471c]"> Achieve your dreams!</b>
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Get Connected Now
          </button>
        </div>

        <div className="flex items-end justify-center mt-8 md:mt-0   h-80 w-80">
          <img
            src={confusedPersonImg}
            alt="Counsellor"
            className=" h-65    object-cover"
          />
        </div>
      </section>
      <div className="z-100 border">
        <Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full  items-center  justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-gray-50 text-left shadow-xl  outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
              >
                <div className="bg-gray-200 px-4 pt-5 pb-4  sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                      <ExclamationTriangleIcon
                        aria-hidden="true"
                        className="size-6 text-red-400"
                      />
                      
                    </div> */}
                    <div className="mt-3  w-full text-center  sm:text-left">
                      <form onSubmit={handleSubmit(onSubmit)}>
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
                                type="text"
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
                            type="text"
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
                        </div>
                        <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            type="submit"
                            // onClick={() => setOpen(false)}

                            className="bg-blue-900 hover:bg-blue-950 transition duration-300 text-white px-10 py-2 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Template;
