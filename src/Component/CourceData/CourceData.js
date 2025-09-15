import { useParams } from "react-router-dom";
import fullStackImg from "../../assets/images/full-stack-img.jpeg";
// import fullStackAboutImg from "../../assets/images/full-stack-about-img.jpeg";
import vscode from "../../assets/images/vsc.jpg";
import git from "../../assets/images/git.jpg";
import github from "../../assets/images/github.jpg";
import mysql from "../../assets/images/mysql.jpg";
import postman from "../../assets/images/postman.jpg";
import mongodb from "../../assets/images/mongodb.jpg";
import jwt from "../../assets/images/jwt.jpg";
import exclusiveImg1 from "../../assets/images/exclusiveImg-1.svg";
import exclusiveImg2 from "../../assets/images/exclusiveImg-2.svg";
import exclusiveImg3 from "../../assets/images/exclusiveImg-3.svg";
import exclusiveImg4 from "../../assets/images/exclusiveImg-4.svg";
import exclusiveImg5 from "../../assets/images/exclusiveImg-5.svg";
import exclusiveImg6 from "../../assets/images/exclusiveImg-6.svg";
import exclusiveImg7 from "../../assets/images/exclusiveImg-7.png";
import exclusiveImg8 from "../../assets/images/exclusiveImg-8.svg";
import exclusiveImg9 from "../../assets/images/exclusiveImg-9.svg";
import exclusiveImg10 from "../../assets/images/exclusiveImg-10.svg";
import exclusiveImg11 from "../../assets/images/exclusiveImg-11.svg";
import dataScienceImg from "../../assets/images/data-science-img.jpg";
import dataScienceAboutImg from "../../assets/images/data-science-about-img.jpg";
import dataScienceAiImg from "../../assets/images/data-science-ai-img.jpg";
import dataScienceAboutAiImg from "../../assets/images/data-science-ai-about-img.jpg";
import artificialIntelligence from "../../assets/images/artificial-intelligence.jpg";
import artificialIntelligenceAbout from "../../assets/images/artificial-intelligence-about.jpg";
import artificialIntelligence2 from "../../assets/images/artificial-intelligence+.jpg";
import artificialIntelligence2About from "../../assets/images/artificial-intelligence+About.jpg";
import mernStackDevelopment from "../../assets/images/mern-stack-development.jpg";
import mernStackAbout from "../../assets/images/mern-stack-about-img.jpeg";
import mernStackDevelopment2 from "../../assets/images/mern-stack+.jpg";
import mernStackAbout2 from "../../assets/images/mern-stack+-about-img.jpeg";
import WebsiteDevelopment3D from "../../assets/images/3D-Website-Development.jpg";
import WebsiteDevelopment3DAbout from "../../assets/images/3D-Website-Development-about.jpg";
import FullStackJavaDevelopment from "../../assets/images/Full-Stack-Java-Development.jpg";
import FullStackJavaDevelopmentAbout from "../../assets/images/Full-Stack-Java-Development-About.jpg";
import FrontEndDevelopment from "../../assets/images/Front-End-Development.jpg";
import FrontEndDevelopmentAbout from "../../assets/images/Front-End-Development-About.jpg";
// import backEndDevelopment from "../../assets/images/Front-End-Development.jpg";
// import backEndDevelopmentAbout from "../../assets/images/Front-End-Development-About.jpg";
import gameDevlopment from "../../assets/images/game-devlopment.jpg";
import gameDevlopmentAbout from "../../assets/images/game-devlopment-about.jpg";
import Modelling3DAnimation from "../../assets/images/3D-Modelling-&-Animation.jpg";
import Modelling3DAnimationAbout from "../../assets/images/3D-Modelling-&-Animation-About.jpg";
import BlenderMaster from "../../assets/images/BlenderMaster.jpg";
import BlenderMasterAbout from "../../assets/images/Blender-Master-About.jpg";
import MaxMaya from "../../assets/images/Max-&-Maya.jpg";
import MaxMayaAbout from "../../assets/images/Max-&-Maya-About.jpg";
import AndroidAppDevelopment from "../../assets/images/Android-App-Development.jpg";
import AndroidAppDevelopmentAbout from "../../assets/images/Android-App-Development-About.jpg";
import CloudComputing from "../../assets/images/Cloud-Computing.jpg";
import CloudComputingAbout from "../../assets/images/Cloud-Computing-About.jpg";
import UIUXDesigner from "../../assets/images/UI-UX-Designer.jpg";
import UIUXDesignerAbout from "../../assets/images/UI-UX-Designer-About.jpg";
import DigitalMarketing from "../../assets/images/Digital-Marketing.jpg";
import DigitalMarketingAbout from "../../assets/images/Digital-Marketing-About.jpg";
import DigitalMarketing1 from "../../assets/images/Digital-Marketing+.jpg";
import DigitalMarketingAbout1 from "../../assets/images/Digital-Marketing+-About.jpg";

// const courseModulesM = [
//   {
//     id: 1,
//     title: "Introduction to Web Development and The Internet",
//     lessons: [
//       "Lesson 01: Introduction to Web Development",
//       "Lesson 02: Understanding the Internet",
//       "Lesson 03: Setting Up Your Development Environment",
//       "Lesson 04: How the Web Works (Clients, Servers, DNS, HTTP)",
//       "Lesson 05: Introduction to Full Stack Development",
//     ],
//   },
//   {
//     id: 2,
//     title: "Frontend Development - HTML & CSS",
//     lessons: [
//       "Lesson 01: HTML Basics",
//       "Lesson 02: CSS Basics",
//       "Lesson 03: Layouts",
//     ],
//   },
//   {
//     id: 3,
//     title: "Frontend Development - JavaScript",
//     lessons: ["Lesson 01: JavaScript Basics", "Lesson 02: DOM Manipulation"],
//   },
//   {
//     id: 4,
//     title: "Frontend Development - React.js",
//     lessons: [
//       "Lesson 01: React Intro",
//       "Lesson 02: Components",
//       "Lesson 03: Props & State",
//     ],
//   },
// ];

const webcourseModules = [
  {
    name: "Introduction to Web Development and The Internet",

    modules: [
      "Lesson 01: Introduction to Web Development",

      "Lesson 02: Understanding the Internet",

      "Lesson 03: Setting Up Your Development Environment",

      "Lesson 04: How the Web Works (Clients, Servers, DNS, HTTP)",
      "Lesson 05: Introduction to Full Stack Development",
    ],
  },

  {
    name: "Frontend Development - HTML & CSS",
    modules: [
      "Lesson 01: HTML Basics & Structure",

      "Lesson 02: Forms, Media, and Semantics",

      "Lesson 03: Introduction to CSS",

      "Lesson 04: Layouts with Flexbox and Grid",

      "Lesson 05: Responsive Design & Media Queries",

      "Lesson 06: CSS Variables & Units",

      "Lesson 07: Introduction to TailwindCSS (or Bootstrap)",
    ],
  },

  {
    name: "Frontend Development - JavaScript",

    modules: [
      "Lesson 01: JavaScript Basics (Variables, Types, Operators)",

      "Lesson 02: Control Flow and Functions",

      "Lesson 03: Arrays and Objects",

      "Lesson 04: DOM Manipulation",

      "Lesson 05: Events and Event Handling",

      "Lesson 06: ES6+ Features (Destructuring, Spread, etc.)",

      "Lesson 07: JavaScript Best Practices",
    ],
  },

  {
    name: "Frontend Development - React.js",

    modules: [
      "Lesson 01: Introduction to React",

      "Lesson 02: JSX and Components",

      "Lesson 03: Props and State",

      "Lesson 04: Event Handling in React",

      "Lesson 05: Conditional Rendering and Lists",

      "Lesson 06: useEffect and useState Hooks",

      "Lesson 07: React Router",

      "Lesson 08: Lifting State and Context API",
    ],
  },

  {
    name: "Backend Development - Node.js & Express",

    modules: [
      "Lesson 01: Introduction to Node.js",

      "Lesson 02: Working with the File System and Modules",

      "Lesson 03: Introduction to Express.js",
      "Lesson 04: RESTful APIs with Express",

      "Lesson 05: Middleware and Error Handling",

      "Lesson 06: Authentication and Authorization (JWT, Sessions)",
    ],
  },

  {
    name: "Database Management - MongoDB",

    modules: [
      "Lesson 01: Introduction to NoSQL & MongoDB",

      "Lesson 02: Setting Up MongoDB Atlas or Local DB",

      "Lesson 03: CRUD Operations",

      "Lesson 04: Mongoose ODM",

      "Lesson 05: Data Modeling and Relationships",

      "Lesson 06: Aggregation and Indexing",
    ],
  },

  {
    name: "Full Stack Integration",
    modules: [
      "Lesson 01: Connecting Frontend with Backend",

      "Lesson 02: Handling API Requests from React",

      "Lesson 03: Axios and Fetch",

      "Lesson 04: Protecting Routes and Managing Auth",

      "Lesson 05: CORS and Environment Variables",
    ],
  },

  {
    name: "Version Control and Deployment",

    modules: [
      "Lesson 01: Git & GitHub Basics",

      "Lesson 02: Git Branching and Collaboration",

      "Lesson 03: Deploying Frontend on Netlify/Vercel",

      "Lesson 04: Deploying Backend with Render or Railway",

      "Lesson 05: Connecting to MongoDB Atlas in Production",
    ],
  },

  {
    name: "Advanced Topics (Optional)",

    modules: [
      "Lesson 01: TypeScript Basics",

      "Lesson 02: Redux or Context + useReducer for State Management",

      "Lesson 03: Server-Side Rendering (Next.js Intro)",

      "Lesson 04: Testing with Jest and React Testing Library",

      "Lesson 05: Web Security Best Practices",
    ],
  },

  {
    name: "Capstone Project & Portfolio",

    modules: [
      "Lesson 01: Project Planning and Wireframing",

      "Lesson 02: Building the Full Stack Application",

      "Lesson 03: Adding Features and Polish",

      "Lesson 04: Hosting and Domain Setup",
      "Lesson 05: Resume and Portfolio Review",
    ],
  },
];
const jsCourseModules = [
  {
    name: "Introduction to Programming with JavaScript",
    modules: [
      "Lesson 01: What is JavaScript?",
      "Lesson 02: Setting Up Environment (Browser, VS Code, Node.js)",
      "Lesson 03: JavaScript History and Use Cases",
      "Lesson 04: Your First JS Program",
      "Lesson 05: Debugging in the Console",
    ],
  },
  {
    name: "JavaScript Fundamentals",
    modules: [
      "Lesson 01: Variables (let, const, var)",
      "Lesson 02: Data Types and Type Conversion",
      "Lesson 03: Operators and Expressions",
      "Lesson 04: Control Flow (if, else, switch)",
      "Lesson 05: Loops (for, while, do-while)",
    ],
  },
  {
    name: "Functions and Scope",
    modules: [
      "Lesson 01: Declaring and Invoking Functions",
      "Lesson 02: Parameters, Arguments, Return Values",
      "Lesson 03: Function Expressions and Arrow Functions",
      "Lesson 04: Scope and Hoisting",
      "Lesson 05: Closures and IIFE",
    ],
  },
  {
    name: "Working with Arrays and Objects",
    modules: [
      "Lesson 01: Array Basics and Methods",
      "Lesson 02: Iterating Arrays (map, filter, reduce)",
      "Lesson 03: Object Creation and Access",
      "Lesson 04: Object Methods and `this` Keyword",
      "Lesson 05: Nested Objects and Arrays",
    ],
  },
  {
    name: "DOM Manipulation and Events",
    modules: [
      "Lesson 01: The DOM Tree and Node Selection",
      "Lesson 02: Modifying Elements (text, HTML, styles)",
      "Lesson 03: Creating and Removing Elements",
      "Lesson 04: Handling Events (click, submit, etc.)",
      "Lesson 05: Event Delegation and Bubbling",
    ],
  },
  {
    name: "ES6+ Modern JavaScript",
    modules: [
      "Lesson 01: let/const, Template Literals",
      "Lesson 02: Destructuring, Spread and Rest",
      "Lesson 03: Arrow Functions and Default Parameters",
      "Lesson 04: Classes and Inheritance",
      "Lesson 05: Modules (import/export)",
    ],
  },
  {
    name: "Asynchronous JavaScript",
    modules: [
      "Lesson 01: Synchronous vs Asynchronous",
      "Lesson 02: Callbacks and Callback Hell",
      "Lesson 03: Promises and Chaining",
      "Lesson 04: Async/Await",
      "Lesson 05: Fetch API and Error Handling",
    ],
  },
  {
    name: "Working with APIs",
    modules: [
      "Lesson 01: What is an API?",
      "Lesson 02: Making GET and POST Requests",
      "Lesson 03: JSON and Data Parsing",
      "Lesson 04: Building Dynamic UI with API Data",
      "Lesson 05: Error Handling and Loading States",
    ],
  },
  {
    name: "Advanced JavaScript Concepts",
    modules: [
      "Lesson 01: Execution Context and Call Stack",
      "Lesson 02: The Event Loop and Microtasks",
      "Lesson 03: Memory Management",
      "Lesson 04: Debouncing and Throttling",
      "Lesson 05: Prototypes and the Prototype Chain",
    ],
  },
  {
    name: "JavaScript Tools and Ecosystem",
    modules: [
      "Lesson 01: npm and Package Management",
      "Lesson 02: Babel and Transpiling",
      "Lesson 03: ESLint and Prettier",
      "Lesson 04: Introduction to Webpack",
      "Lesson 05: DevTools and Debugging",
    ],
  },
  {
    name: "Project Building and Final Assessment",
    modules: [
      "Lesson 01: Project Planning and Setup",
      "Lesson 02: Building a Real-World JS App",
      "Lesson 03: Code Refactoring and Optimization",
      "Lesson 04: Hosting with GitHub Pages",
      "Lesson 05: Final Project Presentation",
    ],
  },
];
const fdCourseModules = [
  {
    name: "HTML & CSS Essentials",
    modules: [
      "Lesson 01: HTML Structure and Tags",
      "Lesson 02: Semantic HTML and Forms",
      "Lesson 03: CSS Basics and Selectors",
      "Lesson 04: Box Model and Positioning",
      "Lesson 05: Responsive Design with Media Queries",
    ],
  },
  {
    name: "CSS Frameworks & Preprocessors",
    modules: [
      "Lesson 01: Introduction to TailwindCSS",
      "Lesson 02: Utility-first Design",
      "Lesson 03: Bootstrap Components",
      "Lesson 04: SCSS and Preprocessing Basics",
      "Lesson 05: Theming and Customization",
    ],
  },
  {
    name: "JavaScript for Frontend",
    modules: [
      "Lesson 01: DOM Manipulation",
      "Lesson 02: Event Handling and Forms",
      "Lesson 03: Local Storage and Session Storage",
      "Lesson 04: Fetch API and Dynamic UI",
      "Lesson 05: Modular JavaScript and ES6",
    ],
  },
  {
    name: "Modern Frontend with React",
    modules: [
      "Lesson 01: React Basics and JSX",
      "Lesson 02: Components, Props and State",
      "Lesson 03: Conditional Rendering and Lists",
      "Lesson 04: useEffect and useState",
      "Lesson 05: React Router and Navigation",
    ],
  },
  {
    name: "UI/UX and Accessibility",
    modules: [
      "Lesson 01: UI Design Principles",
      "Lesson 02: UX Best Practices",
      "Lesson 03: Accessibility Guidelines",
      "Lesson 04: Color Contrast and Typography",
      "Lesson 05: Responsive Grids and Layouts",
    ],
  },
];

const backendCourseModules = [
  {
    name: "Node js and JavaScript Fundamentals",
    modules: [
      "Lesson 01: Intro to Node.js and Setup",
      "Lesson 02: Node Modules and File System",
      "Lesson 03: Event Loop and Async Programming",
      "Lesson 04: Environment Variables and Config",
      "Lesson 05: Working with JSON and APIs",
    ],
  },
  {
    name: "Express.js Framework",
    modules: [
      "Lesson 01: Intro to Express.js",
      "Lesson 02: Routing and Middleware",
      "Lesson 03: REST APIs and CRUD Operations",
      "Lesson 04: Error Handling and Logging",
      "Lesson 05: Authentication using JWT",
    ],
  },
  {
    name: "Databases - MongoDB & SQL",
    modules: [
      "Lesson 01: NoSQL vs SQL Concepts",
      "Lesson 02: MongoDB Basics and Atlas Setup",
      "Lesson 03: Mongoose for Data Modeling",
      "Lesson 04: SQL Queries and Joins",
      "Lesson 05: Data Validation and Indexing",
    ],
  },
  {
    name: "API Security and Performance",
    modules: [
      "Lesson 01: Rate Limiting and CORS",
      "Lesson 02: Secure Auth with JWT and Sessions",
      "Lesson 03: API Optimization Techniques",
      "Lesson 04: Error Monitoring Tools",
      "Lesson 05: Secure Data Handling",
    ],
  },
  {
    name: "Deployment & Scaling",
    modules: [
      "Lesson 01: Version Control with Git",
      "Lesson 02: Deployment on Render/Railway",
      "Lesson 03: Environment Management",
      "Lesson 04: CI/CD Basics",
      "Lesson 05: Backend Monitoring",
    ],
  },
];
const fullCourseModules = [
  {
    name: "Full Stack Overview & Setup",
    modules: [
      "Lesson 01: Full Stack Architecture",
      "Lesson 02: Development Environment Setup",
      "Lesson 03: Intro to Git & GitHub",
      "Lesson 04: Folder Structures & Conventions",
      "Lesson 05: Project Planning & Wireframes",
    ],
  },
  {
    name: "Frontend Development with React",
    modules: [
      "Lesson 01: React Setup and JSX",
      "Lesson 02: State Management",
      "Lesson 03: Routing and Navigation",
      "Lesson 04: Form Handling and Validation",
      "Lesson 05: Consuming APIs in React",
    ],
  },
  {
    name: "Backend APIs with Express.js",
    modules: [
      "Lesson 01: Creating REST APIs",
      "Lesson 02: Route Protection with JWT",
      "Lesson 03: File Upload and Static Serving",
      "Lesson 04: User Authentication",
      "Lesson 05: Connecting Frontend with Backend",
    ],
  },
  {
    name: "Database Integration",
    modules: [
      "Lesson 01: MongoDB Setup & Mongoose",
      "Lesson 02: Schema Design & Population",
      "Lesson 03: Data Relationships",
      "Lesson 04: CRUD Operations",
      "Lesson 05: Deployment with DB",
    ],
  },
  {
    name: "Capstone Project",
    modules: [
      "Lesson 01: Project Requirements",
      "Lesson 02: Dev Setup & Task Division",
      "Lesson 03: Development & Testing",
      "Lesson 04: Deployment",
      "Lesson 05: Final Submission & Review",
    ],
  },
];
const aiCourseModules = [
  {
    name: "Introduction to AI Coding Tools",
    modules: [
      "Lesson 01: What is AI-assisted Coding?",
      "Lesson 02: Tools Overview (GitHub Copilot, ChatGPT)",
      "Lesson 03: Prompts and Pair Programming",
      "Lesson 04: Use Cases & Limitations",
      "Lesson 05: Ethics and Best Practices",
    ],
  },
  {
    name: "Using ChatGPT for Development",
    modules: [
      "Lesson 01: Writing Prompts for Code Generation",
      "Lesson 02: Explaining & Refactoring Code",
      "Lesson 03: Debugging with AI",
      "Lesson 04: Creating Documentation",
      "Lesson 05: API and Regex Assistance",
    ],
  },
  {
    name: "AI Tools in Frontend Dev",
    modules: [
      "Lesson 01: Generating HTML/CSS Components",
      "Lesson 02: Styling Suggestions",
      "Lesson 03: React Component Generation",
      "Lesson 04: Accessibility & UI Tips",
      "Lesson 05: Real-time AI Coding Assistants",
    ],
  },
  {
    name: "AI Tools in Backend Dev",
    modules: [
      "Lesson 01: Scaffold APIs with AI",
      "Lesson 02: Security & Error Handling",
      "Lesson 03: Database Schema Help",
      "Lesson 04: Creating Test Cases",
      "Lesson 05: Optimizing Code using AI",
    ],
  },
  {
    name: "Build a Project with AI Tools",
    modules: [
      "Lesson 01: Project Planning using AI",
      "Lesson 02: Code Generation & Refactoring",
      "Lesson 03: Testing and Debugging",
      "Lesson 04: Documentation",
      "Lesson 05: Final Project Presentation",
    ],
  },
];
const aptiCourseModules = [
  {
    name: "Quantitative Aptitude",
    modules: [
      "Lesson 01: Number Systems",
      "Lesson 02: Percentages and Profit & Loss",
      "Lesson 03: Time, Speed and Distance",
      "Lesson 04: Ratio, Proportion & Averages",
      "Lesson 05: Permutations and Combinations",
    ],
  },
  {
    name: "Logical Reasoning",
    modules: [
      "Lesson 01: Syllogisms and Assumptions",
      "Lesson 02: Puzzles and Seating Arrangement",
      "Lesson 03: Blood Relations",
      "Lesson 04: Coding-Decoding",
      "Lesson 05: Directional Sense",
    ],
  },
  {
    name: "Verbal Ability",
    modules: [
      "Lesson 01: Vocabulary & Synonyms",
      "Lesson 02: Reading Comprehension",
      "Lesson 03: Sentence Correction",
      "Lesson 04: Parajumbles",
      "Lesson 05: Analogies",
    ],
  },
  {
    name: "Data Interpretation",
    modules: [
      "Lesson 01: Pie Charts",
      "Lesson 02: Bar Graphs",
      "Lesson 03: Line Graphs",
      "Lesson 04: Tabular Data",
      "Lesson 05: Caselets and Mixed DI",
    ],
  },
  {
    name: "Mock Tests & Strategies",
    modules: [
      "Lesson 01: Time Management Techniques",
      "Lesson 02: Solving Previous Year Questions",
      "Lesson 03: Sectional Mock Tests",
      "Lesson 04: Full-Length Aptitude Tests",
      "Lesson 05: Exam Strategy and Tips",
    ],
  },
];
const ssCourseModules = [
  {
    name: "Communication Skills",
    modules: [
      "Lesson 01: Verbal & Non-Verbal Communication",
      "Lesson 02: Listening Skills",
      "Lesson 03: Public Speaking & Storytelling",
      "Lesson 04: Presentation Techniques",
      "Lesson 05: Giving & Receiving Feedback",
    ],
  },
  {
    name: "Teamwork and Collaboration",
    modules: [
      "Lesson 01: Working in Teams",
      "Lesson 02: Conflict Resolution",
      "Lesson 03: Delegation and Leadership",
      "Lesson 04: Building Trust",
      "Lesson 05: Virtual Collaboration Tools",
    ],
  },
  {
    name: "Emotional Intelligence",
    modules: [
      "Lesson 01: Self-Awareness",
      "Lesson 02: Empathy and Social Skills",
      "Lesson 03: Managing Emotions",
      "Lesson 04: Growth Mindset",
      "Lesson 05: Stress and Anger Management",
    ],
  },
  {
    name: "Workplace Etiquette",
    modules: [
      "Lesson 01: Professionalism and Ethics",
      "Lesson 02: Email and Meeting Etiquette",
      "Lesson 03: Time Management",
      "Lesson 04: Resume Building Tips",
      "Lesson 05: Interview Skills",
    ],
  },
  {
    name: "Personal Branding",
    modules: [
      "Lesson 01: LinkedIn Optimization",
      "Lesson 02: Building an Online Presence",
      "Lesson 03: Creating Portfolios",
      "Lesson 04: Networking Skills",
      "Lesson 05: Elevator Pitch",
    ],
  },
];
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
export const courseData = [
  {
    courseid: "full-stack-development",
    // name: "Full Stack Devlopment",
    // courseModules: [
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
    // ],
    courseInfo: {
      name: "Full Stack Development",
      tag: "#Popular",
      para1:
        "Learn the essentials of Full Stack Web Development with an engaging, practical",
      para2:
        "learning approach. Engage in project-based learning and benefit from qualified",
      img: "",
      aboutImg: "",

      aboutpara:
        "Start building your career by learning industry technologies, crafting real-world applications, and gaining hands-on experience to be a Full Stack Developer.",
      masterToolsH: "Master these Tools",
      exclusiveCourseH: "Exclusive Course Offerings",
      courseCurriculumH: "Course Curriculum",
      BuildProjectsFromScratchH: "Build Projects from Scratch",

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: "8 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      BuildProjectsFromScratch: [
        {
          Img: "",
          ImgH: "Swiggy Clone",
          ImgPara:
            "Embark on a hands-on learning journey with our 'Swiggy Homepage Clone' project ! In this exciting endeavor, students will delve into web development, honing their skills by recreating the iconic Swiggy homepage. Gain practical experience in frontend design, user interface optimization, and responsive web development",
        },
        {
          Img: "",
          ImgH: "Video Streaming Platform",
          ImgPara:
            "Dive into frontend and backend complexities, designing and developing fully functional video streaming.",
        },
        {
          Img: "",
          ImgH: "Admin Dashboard",
          ImgPara:
            "Embark on professional web dev with our 'Admin Dashboard' project! Empowering students in hands-on design.",
        },
        {
          Img: "",
          ImgH: "Hex Color Game",
          ImgPara:
            "Dive into the world of colors with our 'Hex Color Game' project! Explore web dev through an engaging hands-on experience, decoding hex values and honing JavaScript skills.",
        },
      ],
    },

    Mentors: {
      Heading: "Meet your Mentors",
    },

    GetCertified: {
      para: "You will be able to generate the certificate for course of completion:",
      img: "",
    },
    CertifiedPoint: [
      {
        para: "After watching 60% of the videos",
      },
      {
        para: "After completing 60% in Quiz & Assignment",
      },
      {
        para: "The above criteria is only for getting the course completion certificate. For details regarding Job Assistance criteria, please refer to the FAQs",
      },
    ],
    aboutCourse: [
      {
        title: "Industry Professional Led Sessions",
        desc: " Get guidance from qualified industry professionals.",
      },
      {
        title: "Project Portfolio",
        desc: " Start building a job-ready profile with a dynamic project portfolio",
      },
      {
        title: "Career Assistance",
        desc: " Prepare for interviews with guidance and opportunities to showcase skills",
      },
      {
        title: "Dedicated Peer Network",
        desc: " Build connections with like-minded learners to exchange ideas and experiences.",
      },
      {
        title: "Learn Industry Skills",
        desc: " Fast-track your upskilling journey with industry skills and personalized guidance",
      },
      {
        title: "Certification",
        desc: " Attain your certificate upon course completion to showcase your capabilities.",
      },
    ],
    exclusiveCourse: [
      {
        img: exclusiveImg1,
        dece: "Industry-Oriented Curriculum",
      },
      {
        img: exclusiveImg2,
        dece: "Comprehensive Learning Content",
      },
      {
        img: exclusiveImg3,
        dece: "Weekend Live Sessions",
      },
      {
        img: exclusiveImg4,
        dece: "Capstone Project",
      },
      {
        img: exclusiveImg5,
        dece: "Practice Exercises",
      },
      {
        img: exclusiveImg6,
        dece: "Assignments and Projects",
      },
      {
        img: exclusiveImg7,
        dece: "SME Support Session",
      },
      {
        img: exclusiveImg8,
        dece: "Certification of Completion",
      },
      {
        img: exclusiveImg9,
        dece: "Career Guidance & Interview Preparation",
      },
      {
        img: exclusiveImg10,
        dece: "Email Support",
      },
      {
        img: exclusiveImg11,
        dece: "Peer Networking",
      },
    ],

    masterTools: [
      {
        img: vscode,
      },
      {
        img: github,
      },
      {
        img: mysql,
      },
      {
        img: mongodb,
      },
      {
        img: jwt,
      },
      {
        img: postman,
      },
      {
        img: git,
      },
    ],

    AlumnisTestimonies: [
      {
        para: "PW Skills played a significant role in my journey to becoming an Associate Software Developer at IndiaMart. The faculty's support and the practical learning environment provided by the course curriculum were instrumental in my professional growth.",
        img: "",
        name: "Shubham Shrivastava",
        skill: "Associate Software Developer",
      },
      {
        para: "PW Skills' faculty guided me through app development intricacies. Their support and curriculum shaped my career at Map My India. Truly grateful!",
        img: "",
        name: "Anish Chandra",
        skill: "Application Developer",
      },
      {
        para: "I can’t thank PW Skills enough for shaping my career as an Android Developer at Prashantadvait Foundation. The training and support were exceptional!",
        img: "",
        name: "Manish Sahu",
        skill: "Android Developer",
      },
      {
        para: "The training I received at PW Skills was essential in my journey to becoming a Software Engineer at Newgen Software. The faculty's expertise and the comprehensive course curriculum provided me with the skills and knowledge necessary for success in the field.",
        img: "",
        name: "Pranshu Adhwaryu",
        skill: "Software Engineer",
      },
    ],

    faqs: [
      {
        ques: "What is this course about, and who is it for?",
        ans: "This course provides learners with a comprehensive understanding of full stack web development, covering both front-end and back-end technologies. The curriculum focuses on building real-world applications, enabling learners to develop and deploy end-to-end web solutions. It’s ideal for beginners, freshers, or professionals aiming to kickstart or transition their careers in software development.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "This course provides learners with a comprehensive understanding of full stack web development, covering both front-end and back-end technologies. The curriculum focuses on building real-world applications, enabling learners to develop and deploy end-to-end web solutions. It’s ideal for beginners, freshers, or professionals aiming to kickstart or transition their careers in software development.Learners should have basic computer literacy and logical thinking. Prior programming knowledge is helpful but not mandatory, as the course covers foundational concepts.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course is designed for beginners and gradually introduces advanced concepts.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn HTML5, CSS3, JavaScript (ES2022+), Node.js, React 19+, React Router v6+, Redux, Express, Next.js 15+, MySQL with Sequelize, and MongoDB with Mongoose. You’ll also work with tools and services like VS Code, NPM, Vite, MongoDB Atlas, Vercel, and Netlify to build and deploy modern, full-stack web applications.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 8 months, with a recommended commitment of 8-10 hours per week.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid – recorded content + weekly live revision session || Pro Plan: Hybrid – recorded content + weekly live revision session, live capstone, and 2 live case studies from PwC.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: No assignments. Industry project walkthroughs are included || Premium: Includes assignments, written solutions, and basic evaluation || Pro: Includes all Premium features, 2 live PwC case studies, and a live capstone project.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, for pro and premium offerings, all live sessions are recorded and available for review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro: Yes, evaluated assignments with written feedback || Basic: Feedback not applicable as assignments are not included.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "The course offers career guidance, resume building, and interview preparation. Relevant interview opportunities are shared with the eligible learners, but outcomes depend on individual performance. To know more about the Job Assistance Policy, refer to the dedicated Job Assistance page.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, certifications are verifiable through a unique link.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: PW Skills Certificate || Pro: Joint Certificate from PW Skills + PwC",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Basic & Premium: No job assistance included || Pro: The course offers career guidance, resume building, and interview preparation. Relevant interview opportunities are shared with the eligible learners, but outcomes depend on individual performance. To know more about the Job Assistance Policy, refer to the dedicated Job Assistance page.",
      },
      {
        ques: "What is the course fee?",
        ans: "Basic: ₹7,000 || Premium: ₹15,000 || Pro: ₹20,000 - Discounts may be available during specific offers.",
      },
      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, a one-time deferment to a later batch of the same course is allowed within 30 days of purchase.",
      },
      {
        ques: "What is the refund policy?",
        ans: "We have a strict no-refund policy. Once purchased, access rights are processed for your account, and therefore, refund requests will not be entertained under any circumstances.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "If you face technical issues or need assistance, attend doubt resolution sessions or revision classes(only for Premium and Pro plan), raise a support ticket via the Help Centre on the PW Skills website, or email support@pwskills.com.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners retain access to the course material for 2 years from the date of purchase of the course.",
      },
    ],

    // buttons: [
    //   {
    //     title: "Web Development",
    //     module: webcourseModules,
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
    // ],
    mentors: [
      {
        name: "Priyash Nigam",
        role: "CEO, Execube Digital | Fractional CMO",
        company: "SKILLS",
        exp: "9+ Years",
        teach: "5+ Years",
        desc: "Priyash Nigam is a digital marketing strategist with over 9 years of experience in performance marketing.",
        image: "https://via.placeholder.com/150", // replace with actual image
      },
      {
        name: "Priya Bhatia",
        role: "Senior Data Scientist",
        company: "PHYSICS WALLAH",
        exp: "4+ Years",
        teach: "4+ Years",
        desc: "AI M.Tech | IIT Hyderabad | Data Structures | Problem Solving | Programming Languages...",
        image: "https://via.placeholder.com/150", // replace with actual image
      },
      {
        name: "Sanket Singh",
        role: "Full Stack Developer",
        company: "Google",
        exp: "4+ Years",
        teach: "7+ Years",
        desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
        image: "https://via.placeholder.com/150", // replace with actual image
      },
      // {
      //   name: "Sanket Singh",
      //   role: "Full Stack Developer",
      //   company: "Google",
      //   exp: "4+ Years",
      //   teach: "7+ Years",
      //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      //   image: "https://via.placeholder.com/150", // replace with actual image
      // },
      // {
      //   name: "Sanket Singh",
      //   role: "Full Stack Developer",
      //   company: "Google",
      //   exp: "4+ Years",
      //   teach: "7+ Years",
      //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      //   image: "https://via.placeholder.com/150", // replace with actual image
      // },
      // {
      //   name: "Sanket Singh",
      //   role: "Full Stack Developer",
      //   company: "Google",
      //   exp: "4+ Years",
      //   teach: "7+ Years",
      //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      //   image: "https://via.placeholder.com/150", // replace with actual image
      // },
      // {
      //   name: "Sanket Singh",
      //   role: "Full Stack Developer",
      //   company: "Google",
      //   exp: "4+ Years",
      //   teach: "7+ Years",
      //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      //   image: "https://via.placeholder.com/150", // replace with actual image
      // },
      // {
      //   name: "Sanket Singh",
      //   role: "Full Stack Developer",
      //   company: "Google",
      //   exp: "4+ Years",
      //   teach: "7+ Years",
      //   desc: "Google Pay | Ex-LinkedIn Eng | GSoC Harvard | 7yrs teaching",
      //   image: "https://via.placeholder.com/150", // replace with actual image
      // },
      // Add more mentors as needed
    ],
  },
  {
    courseid: "data-science",
    courseInfo: {
      name: "Data Science",
      tag: "#Popular",
      para1:
        "Master the fundamentals of Data Science with a hands-on and practical approach",
      para2:
        "covering data analysis, visualization, machine learning, and real-world applications.",
      img: dataScienceImg,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 1 Year" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering data analysis, machine learning, and visualization, while working on real-world projects to become a skilled Data Scientist.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn directly from Data Science professionals with real-world expertise.",
        },
        {
          title: "Hands-on Projects",
          desc: " Work on datasets and projects that reflect real industry challenges in Data Science.",
        },
        {
          title: "Career Assistance",
          desc: " Get interview preparation and guidance for roles like Data Analyst, ML Engineer, or Data Scientist.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with fellow learners to exchange ideas, solve problems, and grow together.",
        },
        {
          title: "Master In-Demand Tools",
          desc: " Gain practical skills in Python, SQL, Machine Learning, and Visualization tools widely used in the industry.",
        },
        {
          title: "Certification",
          desc: " Earn a recognized Data Science certification to validate your skills and boost your career opportunities.",
        },
      ],
      aboutImg: dataScienceAboutImg,
      exclusiveCourseH: "Exclusive Course Offerings",
      exclusiveCourse: [
        {
          img: exclusiveImg1,
          dece: "Industry-Oriented Curriculum",
        },
        {
          img: exclusiveImg2,
          dece: "Comprehensive Learning Content",
        },
        {
          img: exclusiveImg3,
          dece: "Weekend Live Sessions",
        },
        {
          img: exclusiveImg4,
          dece: "Capstone Project",
        },
        {
          img: exclusiveImg5,
          dece: "Practice Exercises",
        },
        {
          img: exclusiveImg6,
          dece: "Assignments and Projects",
        },
        {
          img: exclusiveImg7,
          dece: "SME Support Session",
        },
        {
          img: exclusiveImg8,
          dece: "Certification of Completion",
        },
        {
          img: exclusiveImg9,
          dece: "Career Guidance & Interview Preparation",
        },
        {
          img: exclusiveImg10,
          dece: "Email Support",
        },
        {
          img: exclusiveImg11,
          dece: "Peer Networking",
        },
      ],

      masterToolsH: "Master these Tools",
      masterTools: [
        {
          img: vscode,
        },
        {
          img: github,
        },
        {
          img: mysql,
        },
        {
          img: mongodb,
        },
        {
          img: jwt,
        },
        {
          img: postman,
        },
        {
          img: git,
        },
      ],
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
      // BuildProjectsFromScratchH: "Build Projects from Scratch",

      // BuildProjectsFromScratch: [
      //   {
      //     Img: "",
      //     ImgH: "Swiggy Clone",
      //     ImgPara:
      //       "Embark on a hands-on learning journey with our 'Swiggy Homepage Clone' project ! In this exciting endeavor, students will delve into web development, honing their skills by recreating the iconic Swiggy homepage. Gain practical experience in frontend design, user interface optimization, and responsive web development",
      //   },
      //   {
      //     Img: "",
      //     ImgH: "Video Streaming Platform",
      //     ImgPara:
      //       "Dive into frontend and backend complexities, designing and developing fully functional video streaming.",
      //   },
      //   {
      //     Img: "",
      //     ImgH: "Admin Dashboard",
      //     ImgPara:
      //       "Embark on professional web dev with our 'Admin Dashboard' project! Empowering students in hands-on design.",
      //   },
      //   {
      //     Img: "",
      //     ImgH: "Hex Color Game",
      //     ImgPara:
      //       "Dive into the world of colors with our 'Hex Color Game' project! Explore web dev through an engaging hands-on experience, decoding hex values and honing JavaScript skills.",
      //   },
      // ],
    },

    // Mentors: {
    //   Heading: "Meet your Mentors",
    // },
    // mentors: [
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
    // ],
    // GetCertified: {
    //   para: "You will be able to generate the certificate for course of completion:",
    //   img: "",
    // },
    // CertifiedPoint: [
    //   {
    //     para: "After watching 60% of the videos",
    //   },
    //   {
    //     para: "After completing 60% in Quiz & Assignment",
    //   },
    //   {
    //     para: "The above criteria is only for getting the course completion certificate. For details regarding Job Assistance criteria, please refer to the FAQs",
    //   },
    // ],

    // AlumnisTestimonies: [
    //   {
    //     para: "PW Skills played a significant role in my journey to becoming an Associate Software Developer at IndiaMart. The faculty's support and the practical learning environment provided by the course curriculum were instrumental in my professional growth.",
    //     img: "",
    //     name: "Shubham Shrivastava",
    //     skill: "Associate Software Developer",
    //   },
    //   {
    //     para: "PW Skills' faculty guided me through app development intricacies. Their support and curriculum shaped my career at Map My India. Truly grateful!",
    //     img: "",
    //     name: "Anish Chandra",
    //     skill: "Application Developer",
    //   },
    //   {
    //     para: "I can’t thank PW Skills enough for shaping my career as an Android Developer at Prashantadvait Foundation. The training and support were exceptional!",
    //     img: "",
    //     name: "Manish Sahu",
    //     skill: "Android Developer",
    //   },
    //   {
    //     para: "The training I received at PW Skills was essential in my journey to becoming a Software Engineer at Newgen Software. The faculty's expertise and the comprehensive course curriculum provided me with the skills and knowledge necessary for success in the field.",
    //     img: "",
    //     name: "Pranshu Adhwaryu",
    //     skill: "Software Engineer",
    //   },
    // ],

    // faqs: [
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
    // ],
  },
  {
    courseid: "data-science+gen-ai",
    courseInfo: {
      name: "Data Science+ Gen AI",
      tag: "#Popular",
      para1:
        "Master Data Science and Generative AI with a hands-on, practical learning approach",
      para2:
        "combining data analysis, machine learning, and AI-driven innovations with real-world applications.",

      img: dataScienceAiImg,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 1.2 Year" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering data analysis, machine learning, and Generative AI, while creating real-world projects to become a future-ready Data Scientist and AI professional.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn from experts in Data Science and Generative AI with real-world experience.",
        },
        {
          title: "Hands-on Projects",
          desc: " Work on projects combining Data Science workflows with Generative AI applications.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for interviews and roles in Data Science, AI Engineering, and Generative AI development.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with learners passionate about AI and exchange ideas on the latest innovations.",
        },
        {
          title: "Master In-Demand Tools",
          desc: " Gain expertise in Python, SQL, Machine Learning, and Generative AI frameworks like OpenAI and Hugging Face.",
        },
        {
          title: "Certification",
          desc: " Earn your Data Science + Gen AI certification to showcase your advanced skills to employers.",
        },
      ],

      aboutImg: dataScienceAboutAiImg,
      exclusiveCourseH: "Exclusive Course Offerings",
      exclusiveCourse: [
        {
          img: exclusiveImg1,
          dece: "Industry-Oriented Curriculum",
        },
        {
          img: exclusiveImg2,
          dece: "Comprehensive Learning Content",
        },
        {
          img: exclusiveImg3,
          dece: "Weekend Live Sessions",
        },
        {
          img: exclusiveImg4,
          dece: "Capstone Project",
        },
        {
          img: exclusiveImg5,
          dece: "Practice Exercises",
        },
        {
          img: exclusiveImg6,
          dece: "Assignments and Projects",
        },
        {
          img: exclusiveImg7,
          dece: "SME Support Session",
        },
        {
          img: exclusiveImg8,
          dece: "Certification of Completion",
        },
        {
          img: exclusiveImg9,
          dece: "Career Guidance & Interview Preparation",
        },
        {
          img: exclusiveImg10,
          dece: "Email Support",
        },
        {
          img: exclusiveImg11,
          dece: "Peer Networking",
        },
      ],
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "artificial-intelligence",
    courseInfo: {
      name: "Artificial Intelligence",
      tag: "#Popular",
      para1:
        "Dive into the world of Artificial Intelligence with a practical and structured approach,",
      para2:
        "covering neural networks, natural language processing, and computer vision through real-world projects.",

      img: artificialIntelligence,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 8 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by learning Artificial Intelligence concepts, creating intelligent applications, and gaining hands-on experience to become an AI Engineer.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn AI concepts and applications from experienced Artificial Intelligence professionals.",
        },
        {
          title: "Hands-on Projects",
          desc: " Work on AI-driven projects like chatbots, image recognition, and automation systems.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles like AI Engineer, NLP Engineer, and Computer Vision Specialist with guided mentorship.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with peers passionate about Artificial Intelligence and innovative technologies.",
        },
        {
          title: "Master In-Demand Tools",
          desc: " Gain practical skills in Python, TensorFlow, PyTorch, NLP libraries, and AI development frameworks.",
        },
        {
          title: "Certification",
          desc: " Earn an AI certification to validate your knowledge and stand out in the job market.",
        },
      ],

      aboutImg: artificialIntelligenceAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "artificial-intelligence+",
    courseInfo: {
      name: "Artificial Intelligence+",
      tag: "#Popular",
      para1:
        "Advance your knowledge in Artificial Intelligence with in-depth training on advanced concepts and tools,",
      para2:
        "covering deep learning, advanced NLP, computer vision, and generative AI applications through real-world projects.",

      img: artificialIntelligence2,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: "  1 Year" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering advanced AI concepts, working on intelligent systems, and gaining hands-on experience to become a highly skilled AI Specialist.",
      aboutCourse: [
        {
          title: "Expert-Led Advanced Sessions",
          desc: " Learn advanced Artificial Intelligence concepts from industry specialists with real-world experience.",
        },
        {
          title: "Cutting-Edge Projects",
          desc: " Work on challenging projects in deep learning, generative AI, NLP, and computer vision.",
        },
        {
          title: "Career Assistance",
          desc: " Get career guidance and prepare for senior-level roles like AI Researcher, ML Engineer, and AI Specialist.",
        },
        {
          title: "Peer Network & Collaboration",
          desc: " Collaborate with like-minded learners to build innovative AI solutions together.",
        },
        {
          title: "Master Advanced Tools",
          desc: " Gain expertise in TensorFlow, PyTorch, Hugging Face, and other cutting-edge AI frameworks.",
        },
        {
          title: "Certification",
          desc: " Earn your Artificial Intelligence+ certification to showcase your advanced skills and career readiness.",
        },
      ],

      aboutImg: artificialIntelligence2About,

      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "mern-stack-devlopment",
    courseInfo: {
      name: "MERN Stack Devlopment",
      tag: "#Popular",
      para1:
        "Learn the essentials of MERN Stack Development with a project-based, practical approach,",
      para2:
        "covering MongoDB, Express.js, React, and Node.js to build dynamic full-stack applications.",

      img: mernStackDevelopment,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: "  7 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by learning industry-ready technologies, creating scalable web applications, and gaining hands-on experience to become a MERN Stack Developer.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn directly from developers and professionals working on real-world MERN projects.",
        },
        {
          title: "Project Portfolio",
          desc: " Build a strong project portfolio by developing full-stack applications with the MERN stack.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for interviews and job opportunities as a MERN Developer, Full Stack Developer, or Web Developer.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Connect with peers, collaborate on projects, and share coding knowledge.",
        },
        {
          title: "Master Industry Tools",
          desc: " Gain expertise in React.js, Node.js, Express.js, MongoDB, Git, and deployment platforms.",
        },
        {
          title: "Certification",
          desc: " Receive a MERN Stack Development certification to validate your skills and career readiness.",
        },
      ],

      aboutImg: mernStackAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "mern-stack-devlopment+",
    courseInfo: {
      name: "MERN Stack Devlopment+",
      tag: "#Popular",
      para1:
        "Master Full Stack Development with MERN while learning the principles of UI/UX design,",
      para2:
        "to create modern, user-friendly, and visually appealing applications with a seamless user experience.",

      img: mernStackDevelopment2,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: "1 Year" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Kickstart your career by combining MERN stack technologies with UI/UX design expertise, building applications that are not only functional but also deliver engaging user experiences.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn from experienced developers and designers who specialize in full-stack and UI/UX design.",
        },
        {
          title: "Project Portfolio",
          desc: " Build real-world projects that integrate backend logic with frontend design and smooth user experience.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles like Full Stack Developer, Frontend Developer, or UI/UX Engineer with interview training.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with developers and designers to exchange ideas, feedback, and creative solutions.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Master MERN stack along with UI/UX tools like Figma, Adobe XD, Tailwind CSS, and design systems.",
        },
        {
          title: "Certification",
          desc: " Earn a MERN + UI/UX certification to showcase your technical and design expertise to employers.",
        },
      ],

      aboutImg: mernStackAbout2,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "3d-website-development",
    courseInfo: {
      name: "3D Website Development",
      tag: "#Popular",
      para1:
        "Learn to design and develop next-generation 3D websites with immersive visuals and interactive experiences,",
      para2:
        "using modern 3D libraries and frameworks that bring creativity and innovation to web development.",

      img: WebsiteDevelopment3D,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: "1 Year" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "KStart building your career by mastering 3D web technologies, creating engaging websites with animations, interactivity, and immersive user experiences to stand out in the digital world.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Get trained by experts in 3D design and interactive web development.",
        },
        {
          title: "Project Portfolio",
          desc: " Build creative 3D websites and interactive projects to showcase your skills.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles like 3D Web Developer, Creative Technologist, or Interactive Designer.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with like-minded learners to share ideas and create innovative designs.",
        },
        {
          title: "Learn Cutting-Edge Tools",
          desc: " Master Three.js, WebGL, Blender integration, and modern frameworks for 3D web apps.",
        },
        {
          title: "Certification",
          desc: " Earn a professional certificate in 3D Web Development to boost your career opportunities.",
        },
      ],

      aboutImg: WebsiteDevelopment3DAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "full-stack-java-development",
    courseInfo: {
      name: "Full Stack Java Development",
      tag: "#Popular",
      para1:
        "Master Full Stack Development with Java, covering frontend, backend, and database technologies,",
      para2:
        "to build scalable, secure, and enterprise-grade web applications for real-world industries.",

      img: FullStackJavaDevelopment,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: "1 Year" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by learning Java-based full stack development, creating robust applications with powerful backend logic, interactive frontends, and strong database management skills.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn directly from Java experts with real-world enterprise development experience.",
        },
        {
          title: "Project Portfolio",
          desc: " Build job-ready projects including enterprise-level web apps, REST APIs, and database-driven solutions.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles like Java Full Stack Developer, Backend Engineer, or Software Developer with interview guidance.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Connect with aspiring developers to collaborate, share ideas, and grow together.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain hands-on experience with Java, Spring Boot, Hibernate, React/Angular, and MySQL/PostgreSQL.",
        },
        {
          title: "Certification",
          desc: " Earn a Full Stack Java Development certificate to validate your enterprise development expertise.",
        },
      ],

      aboutImg: FullStackJavaDevelopmentAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "front-end-development",
    courseInfo: {
      name: "Front End Development",
      tag: "#Popular",
      para1:
        "Learn the core skills of Front End Development with HTML, CSS, JavaScript, and modern frameworks,",
      para2:
        "to design and build responsive, user-friendly, and visually appealing web interfaces.",

      img: FrontEndDevelopment,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 4 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering front-end technologies, creating interactive user experiences, and designing modern websites and applications that engage users effectively.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Get trained by experienced front-end developers and UI/UX professionals.",
        },
        {
          title: "Project Portfolio",
          desc: " Build real-world projects like landing pages, portfolios, and interactive web apps.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles such as Front End Developer, UI Developer, or Web Designer with expert guidance.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with fellow learners to exchange design and development ideas.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain practical experience with React.js, Tailwind CSS, Bootstrap, Git/GitHub, and modern web practices.",
        },
        {
          title: "Certification",
          desc: " Receive a Front End Development certificate to showcase your skills to employers.",
        },
      ],

      aboutImg: FrontEndDevelopmentAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "back-end-development",
    courseInfo: {
      name: "Back End Development",
      tag: "#Popular",
      para1:
        "Learn the fundamentals of Back End Development with databases, APIs, and server-side technologies,",
      para2:
        "to build secure, scalable, and high-performance applications that power modern digital platforms.",

      // img: artificialIntelligenceImg,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 3 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering backend technologies, developing robust APIs, managing databases, and ensuring application performance as a skilled Back End Developer.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Get mentorship from backend developers experienced in building real-world systems.",
        },
        {
          title: "Project Portfolio",
          desc: " Work on projects like authentication systems, REST APIs, and database-driven applications.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles such as Back End Developer, API Engineer, or Database Administrator with interview guidance.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with like-minded learners to solve problems and exchange backend solutions.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain expertise in Node.js, Express.js, SQL/NoSQL databases, authentication, and cloud integration.",
        },
        {
          title: "Certification",
          desc: " Earn a Back End Development certificate to validate your backend expertise.",
        },
      ],

      // aboutImg: artificialIntelligenceAboutImg,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "game-development",
    courseInfo: {
      name: "Game Development",
      tag: "#Popular",
      para1:
        "Learn the foundations of Game Development with programming, design, and interactive mechanics,",
      para2:
        "to create engaging 2D and 3D games using industry-standard tools and engines.",

      img: gameDevlopment,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 2 Years" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering game engines, coding mechanics, and interactive storytelling to become a professional Game Developer and bring your ideas to life.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn directly from experienced game developers and designers working in the gaming industry.",
        },
        {
          title: "Project Portfolio",
          desc: " Build your own playable 2D and 3D games to showcase in your professional portfolio.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles such as Game Developer, Unity Developer, or Level Designer with expert career guidance.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with other aspiring developers to share ideas and create games together.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain hands-on experience with Unity, Unreal Engine, Blender, and C#/C++ for game programming.",
        },
        {
          title: "Certification",
          desc: " Earn a Game Development certificate to validate your skills and creativity in the gaming industry.",
        },
      ],

      aboutImg: gameDevlopmentAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "3d-modelling-&-animation",
    courseInfo: {
      name: "3D Modelling & Animation",
      tag: "#Popular",
      para1:
        "Learn the art and science of 3D Modelling & Animation with industry-standard tools and techniques,",
      para2:
        "to design stunning 3D assets, animations, and visual effects for games, films, and digital media.",

      img: Modelling3DAnimation,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 2 Years" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering 3D modelling, texturing, rigging, and animation to create lifelike characters, environments, and visuals for gaming, film, and multimedia industries.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn directly from 3D artists and animators with real-world production experience.",
        },
        {
          title: "Project Portfolio",
          desc: " Create professional-quality 3D models, character animations, and visual effects to showcase in your portfolio.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles like 3D Artist, Animator, VFX Artist, or Motion Graphics Designer with expert career guidance.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with creative peers to exchange techniques, ideas, and design workflows.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain expertise in Blender, Autodesk Maya, Cinema 4D, ZBrush, and Adobe After Effects for animation and modelling.",
        },
        {
          title: "Certification",
          desc: " Earn a 3D Modelling & Animation certificate to validate your skills for the creative industry.",
        },
      ],

      aboutImg: Modelling3DAnimationAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "blender-master-class",
    courseInfo: {
      name: "Blender Master Class",
      tag: "#Popular",
      para1:
        "Master Blender, the industry’s most versatile open-source 3D creation suite,",
      para2:
        "to design, model, animate, and render stunning 3D assets, characters, and environments.",

      img: BlenderMaster,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: "6 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering Blender’s powerful tools for 3D modelling, animation, sculpting, texturing, and rendering to become a skilled 3D Artist or Animator.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Get trained by expert 3D artists with real-world experience in Blender projects.",
        },
        {
          title: "Project Portfolio",
          desc: " Build high-quality 3D models, character designs, and animations to showcase in your portfolio.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles such as 3D Generalist, Blender Artist, Animator, or Motion Graphics Designer with career guidance.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Join a creative community of Blender learners and collaborate on exciting projects.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain hands-on expertise in Blender’s modelling, sculpting, texturing, rigging, and rendering features.",
        },
        {
          title: "Certification",
          desc: " Earn a Blender Master Class certificate to highlight your proficiency in 3D creation and animation.",
        },
      ],

      aboutImg: BlenderMasterAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "max-and-maya",
    courseInfo: {
      name: "Max & Maya",
      tag: "#Popular",
      para1:
        "Master 3D design and animation with Autodesk 3ds Max and Maya, the industry-standard tools,",
      para2:
        "to create professional-grade 3D models, animations, and visual effects for films, games, and multimedia.",

      img: MaxMaya,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 10 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering 3ds Max and Maya for 3D modelling, animation, rigging, and rendering, and become an industry-ready 3D Artist, Animator, or VFX professional.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn directly from 3D artists and animators with expertise in 3ds Max and Maya.",
        },
        {
          title: "Project Portfolio",
          desc: " Create high-quality 3D assets, environments, and character animations to showcase your skills.",
        },
        {
          title: "Career Assistance",
          desc: " Get guidance for roles such as 3D Animator, Character Artist, or VFX Specialist in gaming and film industries.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with other aspiring 3D creators to exchange knowledge and build projects together.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain hands-on experience with Autodesk Maya, 3ds Max, Arnold Renderer, and related plugins.",
        },
        {
          title: "Certification",
          desc: " Earn a 3ds Max & Maya certificate to validate your 3D production and animation expertise.",
        },
      ],

      aboutImg: MaxMayaAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "android-app-development",
    courseInfo: {
      name: "Android App Development",
      tag: "#Popular",
      para1:
        "Learn Android App Development from scratch with Java/Kotlin and Android Studio,",
      para2:
        "to design, build, and deploy powerful mobile applications for the Google Play Store and beyond.",

      img: AndroidAppDevelopment,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 6 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering Android development, creating user-friendly mobile apps, and gaining real-world experience to become a professional Android Developer.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn from experienced Android developers with real-world app building expertise.",
        },
        {
          title: "Project Portfolio",
          desc: " Build and publish Android apps including utilities, games, and business applications.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles such as Android Developer, Mobile App Engineer, or Software Developer with career guidance.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Join a community of learners to collaborate and share app development ideas.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain hands-on experience with Java, Kotlin, Android Studio, Firebase, and APIs.",
        },
        {
          title: "Certification",
          desc: " Earn an Android App Development certificate to validate your mobile development skills.",
        },
      ],

      aboutImg: AndroidAppDevelopmentAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "cloud-computing",
    courseInfo: {
      name: "Cloud Computing",
      tag: "#Popular",
      para1:
        "Learn the foundations of Cloud Computing and how to deploy, manage, and scale applications,",
      para2:
        "using leading platforms like AWS, Microsoft Azure, and Google Cloud for modern businesses.",

      img: CloudComputing,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 6 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering cloud platforms, virtualization, and deployment strategies to become a Cloud Engineer, Solutions Architect, or DevOps Professional.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn from certified cloud experts with hands-on experience in AWS, Azure, and GCP.",
        },
        {
          title: "Project Portfolio",
          desc: " Work on real-world projects like cloud deployment, serverless apps, and scalable storage solutions.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for in-demand roles like Cloud Engineer, DevOps Engineer, or Cloud Solutions Architect.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with peers and professionals to solve real-world cloud challenges together.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain hands-on experience with AWS, Azure, Google Cloud, Docker, Kubernetes, and Terraform.",
        },
        {
          title: "Certification",
          desc: " Earn a Cloud Computing certificate to validate your expertise with cloud platforms and solutions.",
        },
      ],

      aboutImg: CloudComputingAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "ui-ux-designer",
    courseInfo: {
      name: "UI/UX Designer",
      tag: "#Popular",
      para1:
        "Learn the art of User Interface and User Experience design with a hands-on, creative approach,",
      para2:
        "to craft visually stunning, user-friendly, and intuitive digital products for web and mobile platforms.",

      img: UIUXDesigner,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 4 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering design thinking, wireframing, prototyping, and user research to become a professional UI/UX Designer who creates impactful digital experiences.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn directly from UI/UX professionals with real-world design experience.",
        },
        {
          title: "Project Portfolio",
          desc: " Create design projects including websites, mobile apps, and interactive prototypes to showcase your skills.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles such as UI Designer, UX Designer, or Product Designer with guidance and interview prep.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with fellow creative minds to share design ideas and feedback.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain expertise in Figma, Adobe XD, Sketch, InVision, and usability testing methods.",
        },
        {
          title: "Certification",
          desc: " Earn a UI/UX Design certificate to showcase your creative and analytical design skills.",
        },
      ],

      aboutImg: UIUXDesignerAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "digital-marketing",
    courseInfo: {
      name: "Digital Marketing",
      tag: "#Popular",
      para1:
        "Learn the fundamentals of Digital Marketing with practical strategies and tools,",
      para2:
        "to build strong online presence, generate leads, and grow businesses through data-driven campaigns.",

      img: DigitalMarketing,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 4 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering SEO, social media, paid ads, content marketing, and analytics to become a skilled Digital Marketer in today’s competitive landscape.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Learn from digital marketing experts with hands-on experience in real campaigns.",
        },
        {
          title: "Project Portfolio",
          desc: " Build a portfolio with live projects including SEO audits, ad campaigns, and social media strategies.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for roles such as Digital Marketing Specialist, SEO Analyst, or Social Media Manager.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Collaborate with learners and marketers to share strategies and campaign insights.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain expertise in Google Ads, Meta Ads, Google Analytics, SEO tools, and content platforms.",
        },
        {
          title: "Certification",
          desc: " Earn a Digital Marketing certificate to validate your expertise in online marketing.",
        },
      ],

      aboutImg: DigitalMarketingAbout,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
  {
    courseid: "digital-marketing+",
    courseInfo: {
      name: "Digital Marketing+",
      tag: "#Popular",
      ppara1:
        "Advance your digital marketing expertise with cutting-edge strategies and AI-powered tools,",
      para2:
        "to master SEO, paid campaigns, social media growth, automation, and advanced analytics for business success.",

      img: DigitalMarketing1,

      JTDL: [
        { H: "Job Assistance", P: "For Pro Plan" },
        { H: "Duration", P: " 6 Months" },
        { H: "Delivery Mode", P: "Hybrid" },
        { H: "Language", P: "Hinglish" },
      ],
      aboutpara:
        "Start building your career by mastering advanced digital marketing techniques, automation platforms, and data-driven strategies to become a growth-focused Digital Marketing Expert.",
      aboutCourse: [
        {
          title: "Industry Professional Led Sessions",
          desc: " Get trained by top marketers with expertise in advanced growth marketing and automation.",
        },
        {
          title: "Project Portfolio",
          desc: " Build advanced campaigns including AI-driven ads, automated funnels, and multi-channel strategies.",
        },
        {
          title: "Career Assistance",
          desc: " Prepare for high-demand roles like Growth Marketer, Digital Marketing Manager, or Performance Marketing Specialist.",
        },
        {
          title: "Dedicated Peer Network",
          desc: " Network with ambitious marketers to exchange advanced growth strategies and success stories.",
        },
        {
          title: "Learn Industry Tools",
          desc: " Gain hands-on expertise in HubSpot, SEMrush, Ahrefs, Google Tag Manager, Marketing Automation, and AI-driven tools.",
        },
        {
          title: "Certification",
          desc: " Earn a Digital Marketing+ certificate to validate your advanced marketing expertise.",
        },
      ],

      aboutImg: DigitalMarketingAbout1,
      courseCurriculumH: "Course Curriculum",
      buttons: [
        {
          title: "Web Development",
          module: webcourseModules,
        },
        {
          title: "Javascript",
          module: jsCourseModules,
        },
        {
          title: "Frontend Development",
          module: fdCourseModules,
        },
        {
          title: "Backend and Databases",
          module: backendCourseModules,
        },
        {
          title: "Full Stack Development",
          module: fullCourseModules,
        },
        {
          title: "Code with AI",
          module: aiCourseModules,
        },
        {
          title: "Aptitude",
          module: aptiCourseModules,
        },
        {
          title: "Soft Skills",
          module: ssCourseModules,
        },
      ],
    },
  },
];
export default courseData;
