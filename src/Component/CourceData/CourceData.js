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

const dataSciencecourseModules = [
  {
    name: "Foundation in Python, DataHandling  &  Visualization",

    modules: [
      "Lesson 01:  Python & Core Programming Fundamentals",

      "Lesson 02:  Intermediate Python & Libraries",

      "Lesson 03: Statistics for Data Science",

      "Lesson 04:  Data Visualization & EDA",
    ],
  },

  {
    name: "Machine Learning & Advanced Analytics",
    modules: [
      "Lesson 01: Foundations of Machine Learning",

      "Lesson 02: Unsupervised Learning",

      "Lesson 03:  Advanced ML Techniques",

      "Lesson 04: Big Data & NoSQL",

      "Lesson 05: Data Engineering Basics",
    ],
  },

  {
    name: "Deep Learning, Deployment",

    modules: [
      "Lesson 01:  Deep Learning & Neural Networks",

      "Lesson 02:  MLOps & Cloud Deployment",

      "Lesson 03:  Data Visualization & EDA",

      "Lesson 04: Visualization Tools",

      "Lesson 05: Capstone Project",

      "Lesson 06: Career Readiness",
    ],
  },
];
const dataScienceAicourseModules = [
  {
    name: "Foundation in Python, DataHandling  &  Visualization",

    modules: [
      "Lesson 01:  Python & Core Programming Fundamentals",

      "Lesson 02:  Intermediate Python & Libraries",

      "Lesson 03: Statistics for Data Science",

      "Lesson 04:  Data Visualization & EDA",
    ],
  },

  {
    name: "Machine Learning & Advanced Analytics",
    modules: [
      "Lesson 01: Foundations of Machine Learning",

      "Lesson 02: Unsupervised Learning",

      "Lesson 03:  Advanced ML Techniques",

      "Lesson 04: Big Data & NoSQL",

      "Lesson 05: Data Engineering Basics",
    ],
  },

  {
    name: "Deep Learning, Generative AI & Deployment",

    modules: [
      "Lesson 01:  Deep Learning & Neural Networks",

      "Lesson 02:Generative AI & Large Language Models",

      "Lesson 03:  MLOps & Cloud Deployment",

      "Lesson 04:  Data Visualization & EDA",

      "Lesson 05: Visualization Tools",

      "Lesson 06: Capstone Project",

      "Lesson 07: Career Readiness",
    ],
  },
];
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
          title: "Data Science",
          module: dataSciencecourseModules,
        },
      ],
      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This Data Science course equips learners with essential knowledge of statistics, programming, data visualization, machine learning, and AI. It focuses on real-world projects like predictive modeling, NLP, and deep learning. It’s ideal for beginners, freshers, or professionals seeking to transition into Data Science, AI, or analytics roles.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Learners should have basic computer literacy and logical thinking. Prior knowledge of Python, mathematics, or statistics is helpful but not mandatory, as the course starts with foundations.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course is designed for beginners and gradually introduces advanced Data Science and AI concepts.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn Python, Statistics, Probability, Data Visualization (Matplotlib, Seaborn, Power BI, Tableau), Machine Learning (Scikit-learn), Deep Learning (TensorFlow, Keras, PyTorch), SQL, Big Data basics, and deployment on platforms like AWS, Google Cloud, and Streamlit.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 9 months, with a recommended commitment of 8–12 hours per week.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid – recorded content + weekly live Q&A || Pro Plan: Hybrid – recorded content + weekly live mentoring sessions, live industry projects, and 2 case studies from Deloitte or PwC.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: No assignments. Industry project walkthroughs are included || Premium: Includes assignments, written solutions, and evaluation || Pro: Includes all Premium features, 2 live industry case studies, and a capstone project on AI/ML.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, for Premium and Pro offerings, all live sessions are recorded and available for review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro: Yes, evaluated assignments with written feedback || Basic: Feedback not applicable as assignments are not included.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "The course offers resume building, LinkedIn optimization, mock interviews, and career guidance. Relevant job opportunities are shared with Pro learners, but outcomes depend on individual performance.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, certifications are verifiable through a unique link.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: PW Skills Data Science Certificate || Pro: Joint Certificate from PW Skills + Deloitte/PwC (depending on case studies).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, a one-time deferment to a later batch of the same course is allowed within 30 days of purchase.",
      },
      {
        ques: "What is the refund policy?",
        ans: "We have a strict no-refund policy. Once purchased, access rights are processed for your account, and therefore, refund requests will not be entertained.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "For Premium and Pro learners: access to live doubt sessions, discussion forums, and dedicated support via email or Help Centre. Basic learners can raise tickets via email support.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners retain access to the course material for 2 years from the date of purchase.",
      },
    ],
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
          title: "Data Science+ Gen AI",
          module: dataScienceAicourseModules,
        },
      ],

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This Data Science + Generative AI course provides learners with a deep understanding of data science fundamentals, machine learning, and cutting-edge generative AI techniques. The curriculum focuses on building end-to-end AI solutions, including LLM-based applications. It’s ideal for beginners, freshers, working professionals, or tech enthusiasts aiming to build a career in Data Science, AI, or Generative AI.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Learners should have basic computer literacy and logical reasoning. Prior exposure to Python or statistics is helpful but not mandatory, as the course covers foundational concepts before moving into advanced AI topics.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, it starts from the basics of Python, mathematics, and statistics before advancing into AI/ML and Generative AI. Beginners as well as professionals looking to upskill can join.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn Python, Statistics, Data Visualization (Matplotlib, Seaborn, Tableau, Power BI), Machine Learning (Scikit-learn), Deep Learning (TensorFlow, Keras, PyTorch), Natural Language Processing (NLTK, SpaCy), Generative AI (LLMs, Transformers, Prompt Engineering, Fine-tuning, RAG), and deployment using Streamlit, LangChain, Hugging Face, and cloud platforms like AWS, GCP, and Azure.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 10 months, with a recommended 8–12 hours of learning per week, including project work.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid – recorded content + weekly live Q&A || Pro Plan: Hybrid – recorded content + live mentoring sessions, 3 live Generative AI projects, and industry case studies.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Industry project walkthroughs only || Premium: Includes assignments, case studies, and evaluation || Pro: Includes Premium features + Generative AI live projects (Chatbot with LLM, Text-to-Image model, and RAG-based AI assistant) + Capstone project.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners get lifetime access to live session recordings.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro: Yes, assignments and projects are evaluated with written/recorded feedback. Basic: Feedback not applicable.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro plan learners receive job assistance including resume building, LinkedIn optimization, interview preparation, and access to partner job portals. Job opportunities depend on individual performance and industry demand.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, certifications are verifiable through a unique link and come with a blockchain-based authenticity check.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic & Premium: PW Skills Certificate || Pro: Joint Certificate from PW Skills + Industry Partner (Deloitte/PwC/AI startup partner for Generative AI projects).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, you can defer to the next batch once within 30 days of enrollment.",
      },
      {
        ques: "What is the refund policy?",
        ans: "No-refund policy. Once purchased, access rights are allocated immediately and cannot be reversed.",
      },
      {
        ques: "How can I get help if I face technical or academic issues?",
        ans: "Premium and Pro learners can attend dedicated doubt-clearing sessions, join the AI community Discord/Slack, and raise tickets via Help Centre. Basic learners can raise tickets via email support.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to all materials, recordings, and projects. Pro learners get lifetime access to Generative AI project code and templates.",
      },
    ],
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
          title: "Data Science",
          module: dataScienceAicourseModules,
        },
      ],

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This Artificial Intelligence course introduces learners to the foundations of AI, including machine learning, deep learning, computer vision, natural language processing, and reinforcement learning. It’s ideal for students, freshers, and professionals aiming to build a career in AI-driven roles across industries like IT, healthcare, fintech, and robotics.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Learners should have basic computer literacy and logical reasoning. Knowledge of Python, mathematics (linear algebra, probability), and statistics is helpful but not mandatory, as the course starts with foundational topics.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course begins with fundamentals of programming, statistics, and ML, before progressing to advanced AI concepts. Both beginners and working professionals can benefit from it.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn Python for AI, Data Preprocessing, Machine Learning (Scikit-learn), Deep Learning (TensorFlow, Keras, PyTorch), Natural Language Processing (NLTK, SpaCy, Hugging Face), Computer Vision (OpenCV, YOLO, CNNs), Reinforcement Learning, and deployment with Streamlit, Flask, and cloud platforms like AWS, GCP, and Azure.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 10 months, with a recommended commitment of 8–12 hours per week, including project practice.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid – recorded content + weekly live Q&A || Pro Plan: Hybrid – recorded content + live mentoring, 3 AI case studies, and an industry-led capstone project.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Industry project walkthroughs only || Premium: Includes assignments and evaluations || Pro: Includes Premium features + advanced AI projects like Chatbot development, Computer Vision application, and Reinforcement Learning simulation, along with a capstone project.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners get lifetime access to live session recordings.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro: Yes, all assignments and projects are evaluated with detailed feedback. Basic: Feedback not included.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro plan includes career guidance, resume building, mock interviews, and job referrals through industry partners. However, job outcomes depend on individual skills and performance.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, all certifications are verifiable online through a unique link.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic & Premium: PW Skills Artificial Intelligence Certificate || Pro: Joint Certificate from PW Skills + Industry Partner (such as Deloitte or PwC for AI projects).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, a one-time deferment within 30 days of purchase is allowed.",
      },
      {
        ques: "What is the refund policy?",
        ans: "We follow a strict no-refund policy. Once access is granted, refunds will not be processed under any circumstances.",
      },
      {
        ques: "How can I get help if I face doubts or technical issues?",
        ans: "Premium and Pro learners can access live doubt-clearing sessions, support forums, and dedicated helpdesk. Basic learners can raise tickets via email support.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to course material, recordings, and resources. Pro learners also get lifetime access to project templates and codebases.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This Artificial Intelligence + course covers core AI concepts (ML, DL), advanced topics (NLP, Computer Vision, Reinforcement Learning) and Generative AI (LLMs, Prompt Engineering, RAG). It focuses on hands-on projects and real-world applications, making it ideal for beginners, freshers, and professionals looking to transition into AI roles.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Basic computer literacy and logical thinking are required. Prior exposure to Python, linear algebra, and statistics is helpful but not mandatory, as the course begins with foundational modules to bring learners up to speed.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes. The curriculum starts with beginner-friendly introductions to Python, mathematics, and basic ML concepts, then gradually progresses to advanced AI and Generative AI topics.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "Topics include Python, Data Preprocessing, Statistics, Machine Learning (scikit-learn), Deep Learning (TensorFlow, Keras, PyTorch), NLP (Hugging Face, SpaCy), Computer Vision (OpenCV, YOLO), Reinforcement Learning, Generative AI (LLMs, LangChain, RAG, Prompt Engineering), and deployment using Streamlit, Flask/FastAPI, and cloud platforms (AWS/GCP/Azure).",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course runs for 8–10 months, with a recommended commitment of 8–12 hours per week including project work.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid — recorded content + weekly live Q&A || Pro Plan: Hybrid — recorded content + weekly live mentoring, live industry projects, and capstone guidance.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Project walkthroughs and template code || Premium: Assignments with evaluations and feedback || Pro: All Premium features plus live Generative AI projects (LLM-based chatbot, RAG assistant, text-to-image) and a final capstone project.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes — Premium and Pro learners receive recordings of all live sessions for later review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro: Yes, evaluated assignments with written or recorded feedback. Basic: Feedback not included as assignments are limited.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro plan includes career services such as resume building, LinkedIn optimization, mock interviews, and job referrals via partner networks. Placement outcomes depend on individual performance and market conditions.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes. Certificates are verifiable through a unique link and include details of projects and skills demonstrated.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: Institute AI Certificate || Pro: Joint Certificate from the Institute + Industry Partner (where applicable).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes. A one-time deferment to a later batch of the same course is allowed within 30 days of purchase (terms and conditions apply).",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are limited. Full refund is available within 7 days of enrollment if no more than 10% of the course content has been accessed; otherwise a no-refund policy applies. (Exact policy subject to provider terms.)",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Premium and Pro learners can join live doubt sessions, community forums (Slack/Discord), and raise support tickets via the Help Centre. Basic learners can contact support via email for technical issues.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to all course materials and recordings. Pro learners may receive extended or lifetime access to project templates and code repositories.",
      },
      {
        ques: "Are there any industry collaborations or capstone opportunities?",
        ans: "Yes — Pro plan includes industry-led case studies and capstone projects in collaboration with partner organizations, giving learners practical exposure and mentorship.",
      },
    ],
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
          title: "MERN Stack Devlopment",
          module: webcourseModules,
        },
      ],

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This MERN Stack Development course provides learners with a comprehensive understanding of full-stack web development using MongoDB, Express.js, React.js, and Node.js. It focuses on building real-world applications, enabling learners to develop and deploy complete web solutions. It’s ideal for beginners, freshers, or professionals aiming to start or advance their career in web development.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Basic computer literacy and logical thinking are required. Prior knowledge of HTML, CSS, and JavaScript is helpful but not mandatory, as the course covers foundational concepts before moving to advanced topics.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course starts from beginner-friendly topics and gradually introduces advanced MERN stack concepts and full-stack development practices.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn HTML5, CSS3, JavaScript (ES6+), Node.js, Express.js, React.js, Redux, React Router, MongoDB, and Mongoose. Tools and services include VS Code, NPM, Git/GitHub, Vite, MongoDB Atlas, Vercel, and Netlify for building and deploying modern web applications.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 8 months, with a recommended commitment of 8–10 hours per week.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid – recorded content + weekly live Q&A || Pro Plan: Hybrid – recorded content + weekly live mentoring, live projects, and 2 live industry case studies.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Project walkthroughs only || Premium: Includes assignments with evaluations and feedback || Pro: Includes all Premium features plus live projects and a capstone full-stack application.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, for Premium and Pro learners, all live sessions are recorded and available for later review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro learners receive detailed feedback on assignments. Basic learners do not receive assignment feedback as assignments are limited.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro plan learners get career support including resume building, LinkedIn optimization, mock interviews, and job referrals. Basic and Premium plans do not include direct placement assistance.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, certificates are verifiable online through a unique link and highlight the projects and skills completed.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: MERN Stack Development Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, a one-time deferment is allowed within 30 days of enrollment to a future batch of the same course.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are not generally provided. Full refund may be offered within 7 days of enrollment if less than 10% of the course content has been accessed; otherwise, a strict no-refund policy applies.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Premium and Pro learners can attend live doubt sessions, use community forums, or raise support tickets via the Help Centre. Basic learners can reach out via email for technical assistance.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to all course material, recordings, and project templates. Pro learners may receive extended or lifetime access for capstone project materials.",
      },
    ],
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
          title: "MERN Stack Devlopment+",
          module: webcourseModules,
        },
      ],

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This MERN Stack Development+ course provides an advanced, in-depth learning path covering MongoDB, Express.js, React.js, and Node.js along with modern web development practices, deployment strategies, and performance optimization. It is ideal for beginners, developers looking to upskill, and professionals aiming to build full-stack web applications.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Basic understanding of HTML, CSS, and JavaScript is recommended. Familiarity with programming concepts and logical thinking will help, but the course starts from foundational topics before progressing to advanced MERN concepts.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course is structured to take learners from beginner-friendly concepts to advanced full-stack development techniques, including state management, API integration, and deployment.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "The course covers HTML5, CSS3, JavaScript (ES6+), Node.js, Express.js, React.js (18+), Redux, React Router, MongoDB, Mongoose, Next.js, Tailwind CSS, and deployment tools like Vercel, Netlify, and MongoDB Atlas. Advanced topics include API development, authentication, authorization, testing, and performance optimization.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 8–10 months, with a recommended commitment of 10–12 hours per week to complete lectures, assignments, and projects.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid — recorded content + weekly live Q&A || Pro Plan: Hybrid — recorded content + live mentoring, live projects, and 2 industry-level case studies.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Project walkthroughs only || Premium: Includes assignments with evaluation and feedback || Pro: Includes all Premium features plus live full-stack projects and a capstone project integrating backend, frontend, and deployment.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners have access to recordings of all live sessions for later review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro learners receive detailed evaluation and feedback on assignments and projects. Basic plan does not include assignment feedback.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro plan learners get career support including resume building, LinkedIn optimization, mock interviews, and placement referrals. Basic and Premium plans do not include direct job assistance.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, certificates are verifiable online through a unique link and highlight the skills and projects completed.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: MERN Stack Development+ Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, a one-time deferment is allowed within 30 days of enrollment to a later batch of the same course.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are limited. Full refund is available within 7 days of enrollment if less than 10% of course content has been accessed; otherwise, a strict no-refund policy applies.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Premium and Pro learners can join live doubt-clearing sessions, access community forums, or raise support tickets via the Help Centre. Basic learners can contact support via email.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to all materials, recordings, and project templates. Pro learners may receive extended or lifetime access for capstone project materials.",
      },
      {
        ques: "Are there industry-level capstone projects included?",
        ans: "Yes, the Pro plan includes industry-level capstone projects that cover complete MERN stack application development, integrating backend, frontend, authentication, and deployment.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This 3D Website Development course teaches learners how to create immersive, interactive, and visually stunning 3D websites using WebGL, Three.js, and modern front-end frameworks. It’s ideal for web developers, designers, and enthusiasts looking to create next-level web experiences.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Basic knowledge of HTML, CSS, and JavaScript is recommended. Familiarity with React or other front-end frameworks is helpful but not mandatory, as the course starts with foundational concepts.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes. The course starts with basic 3D concepts and gradually progresses to advanced interactive and animated 3D web applications.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn HTML5, CSS3, JavaScript (ES6+), WebGL, Three.js, React.js, GSAP for animations, Blender basics for 3D modeling, and deployment tools like Vercel and Netlify. Topics include 3D object creation, animations, interactivity, lighting, shadows, camera movements, and performance optimization.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 6–8 months, with a recommended commitment of 8–10 hours per week, including project work and hands-on exercises.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid — recorded content + weekly live Q&A sessions || Pro Plan: Hybrid — recorded content + live mentoring, interactive project guidance, and advanced 3D website workshops.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Project walkthroughs only || Premium: Assignments with evaluation and feedback || Pro: Includes all Premium features plus live 3D website projects and a capstone interactive 3D portfolio website.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners have access to recordings of all live sessions for review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro learners receive detailed feedback on assignments and projects. Basic learners do not receive assignment feedback.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro plan learners receive career guidance, portfolio building, and interview preparation focused on front-end and 3D web development roles. Basic and Premium plans do not include direct placement support.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, all certificates are verifiable online and showcase the projects and skills completed during the course.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: 3D Website Development Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, a one-time deferment is allowed within 30 days of enrollment to a future batch of the same course.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are limited. Full refund is available within 7 days of enrollment if less than 10% of course content has been accessed; otherwise, a strict no-refund policy applies.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Premium and Pro learners can join live doubt-clearing sessions, access community forums, or raise support tickets via the Help Centre. Basic learners can contact support via email.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to all course material, recordings, and project templates. Pro learners may receive extended or lifetime access for advanced project resources.",
      },
      {
        ques: "Are there any capstone projects included?",
        ans: "Yes, the Pro plan includes advanced capstone projects, such as building an interactive 3D portfolio website with animations, camera controls, and WebGL integration.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This Full Stack Java Development course teaches learners how to build robust web applications using Java, Spring Boot, Hibernate, JSP/Servlets, and front-end technologies like HTML, CSS, JavaScript, and React. It’s ideal for beginners, freshers, and professionals aiming to become full-stack Java developers.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Basic knowledge of programming concepts is recommended. Familiarity with Java fundamentals helps, but the course starts with foundational Java programming and gradually advances to full-stack development.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course starts with basic Java programming and front-end concepts before moving on to advanced full-stack development topics.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn Java (OOP, Collections, Exception Handling), Servlets, JSP, Spring Boot, Hibernate, REST APIs, Front-end technologies (HTML, CSS, JavaScript, React.js), database integration (MySQL, PostgreSQL), Maven, Git/GitHub, and deployment tools like Tomcat and Heroku.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 8–10 months, with a recommended commitment of 8–10 hours per week, including project practice.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid — recorded content + weekly live Q&A || Pro Plan: Hybrid — recorded content + live mentoring, project guidance, and industry-level capstone projects.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Project walkthroughs only || Premium: Assignments with evaluation and feedback || Pro: Includes all Premium features plus live projects and a capstone full-stack Java application.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners have access to recordings of all live sessions for review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro learners receive detailed feedback on assignments and projects. Basic plan does not include assignment feedback.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro plan learners receive career guidance including resume building, mock interviews, and placement referrals. Basic and Premium plans do not include direct job assistance.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, all certificates are verifiable online and showcase the skills and projects completed during the course.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: Full Stack Java Development Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, a one-time deferment is allowed within 30 days of enrollment to a later batch of the same course.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are limited. Full refund is available within 7 days of enrollment if less than 10% of course content has been accessed; otherwise, a strict no-refund policy applies.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Premium and Pro learners can join live doubt-clearing sessions, access community forums, or raise support tickets via the Help Centre. Basic learners can contact support via email.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to all course material, recordings, and project templates. Pro learners may receive extended or lifetime access for advanced project resources.",
      },
      {
        ques: "Are there any capstone projects included?",
        ans: "Yes, the Pro plan includes advanced capstone projects such as building a complete full-stack Java web application with front-end, back-end, database integration, and deployment.",
      },
    ],
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
          title: "Front End Development",
          module: fdCourseModules,
        },
      ],

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This Front End Development course teaches learners how to design and build responsive, interactive, and visually appealing web interfaces using HTML, CSS, JavaScript, and modern frameworks like React.js. It’s ideal for beginners, designers, and developers looking to start or enhance their front-end skills.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "No prior programming experience is required. Basic computer literacy and logical thinking are sufficient, as the course starts with foundational web development concepts.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes. The course starts from the basics of HTML, CSS, and JavaScript and gradually moves to advanced front-end development techniques.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn HTML5, CSS3, JavaScript (ES6+), React.js, Redux, React Router, Tailwind CSS, Bootstrap, responsive design, animations (GSAP), and tools like VS Code, NPM, Git/GitHub, and deployment platforms such as Vercel and Netlify.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course lasts 6–8 months, with a recommended commitment of 6–10 hours per week including project work and exercises.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid — recorded content + weekly live Q&A || Pro Plan: Hybrid — recorded content + live mentoring, interactive projects, and advanced front-end workshops.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Project walkthroughs only || Premium: Assignments with evaluation and feedback || Pro: Includes all Premium features plus live projects and a capstone portfolio website.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners have access to recordings of all live sessions for review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro learners receive detailed feedback on assignments and projects. Basic learners do not receive assignment feedback.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro plan learners receive career support including resume building, portfolio guidance, and interview preparation. Basic and Premium plans do not include direct placement assistance.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, all certificates are verifiable online and showcase the projects and skills completed during the course.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: Front End Development Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },

      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, a one-time deferment is allowed within 30 days of enrollment to a future batch of the same course.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are limited. Full refund is available within 7 days of enrollment if less than 10% of the course content has been accessed; otherwise, a strict no-refund policy applies.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Premium and Pro learners can join live doubt-clearing sessions, access community forums, or raise support tickets via the Help Centre. Basic learners can contact support via email.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to all course material, recordings, and project templates. Pro learners may receive extended or lifetime access for advanced project resources.",
      },
      {
        ques: "Are there any capstone projects included?",
        ans: "Yes, the Pro plan includes a capstone project to build a fully responsive, interactive, and animated portfolio website using front-end technologies.",
      },
    ],
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
          title: "Back End Development",
          module: backendCourseModules,
        },
      ],

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This Back End Development course trains learners to build robust, scalable, and secure server-side applications. It covers databases, APIs, authentication, and deployment. It’s ideal for those who want to specialize in server-side programming or become full-stack developers.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Learners should have basic knowledge of programming (preferably JavaScript, Java, or Python). Familiarity with front-end concepts is useful but not mandatory.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes. The course is designed for beginners but gradually moves to advanced back-end development, ensuring a strong foundation.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn Node.js, Express.js, REST APIs, GraphQL, authentication (JWT, OAuth), databases like MongoDB, MySQL/PostgreSQL, caching (Redis), cloud deployment (AWS, Azure, Vercel), Docker basics, and CI/CD pipelines.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course runs for 6–8 months, with a recommended commitment of 8–10 hours per week.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded, self-paced || Premium Plan: Hybrid — recorded + weekly live Q&A || Pro Plan: Hybrid — recorded + live capstone and industry-level projects.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Basic: Includes project walkthroughs only || Premium: Includes assignments with evaluations || Pro: Includes all Premium features plus live projects, system design tasks, and a capstone project.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners will have access to recordings of all live sessions.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro learners receive detailed feedback on assignments and projects, while Basic learners do not.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "The Pro plan includes career services such as resume building, interview prep, and job referrals. Basic and Premium do not include placement assistance.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, certifications are verifiable online through a unique link.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: Back End Development Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },
      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, one-time deferment to a future batch of the same course is allowed within 30 days of enrollment.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Full refund is available within 7 days of enrollment if less than 10% of the content is accessed; after that, no refunds are provided.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Learners can raise tickets through the Help Centre or email support. Premium and Pro learners also get access to live doubt-clearing sessions and community groups.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to course material, projects, and recordings. Pro learners may receive extended or lifetime access to select resources.",
      },
      {
        ques: "Are there any capstone projects included?",
        ans: "Yes, Pro plan learners complete a capstone project involving end-to-end server-side application development with real-world use cases.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This Game Development course helps learners design, develop, and deploy games using modern engines and frameworks. It’s ideal for beginners, aspiring game developers, designers, or programmers who want to enter the gaming industry.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "Basic programming knowledge (preferably C#, C++, or JavaScript) is recommended. Familiarity with math concepts like vectors and matrices can be helpful but is not mandatory.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course is beginner-friendly and gradually introduces advanced game development topics, making it suitable for learners from all backgrounds.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn 2D and 3D game development, Unity and Unreal Engine basics, game physics, animations, character design, AI in games, multiplayer integration, and publishing on platforms like Play Store, Steam, and Web.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course typically lasts 6–9 months, with a recommended learning commitment of 6–8 hours per week.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Recorded, self-paced learning || Premium Plan: Recorded + weekly live sessions || Pro Plan: Recorded + live sessions, capstone projects, and industry mentorship.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Yes. Learners will create multiple projects, including 2D platformers, 3D adventure games, multiplayer games, and a capstone project involving end-to-end game design and deployment.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners get recordings of all live classes.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Yes, Premium and Pro learners get personalized feedback on projects and assignments, while Basic learners receive project walkthroughs only.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro learners get job assistance that includes resume preparation, portfolio guidance, interview training, and connections with game studios. Basic and Premium learners don’t get placement support.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, upon completion you’ll receive a verifiable certificate that can be shared with employers or added to LinkedIn.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: Game Development Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },
      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, learners can defer their enrollment once within 30 days of purchase to a future batch of the same course.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refund requests are accepted within 7 days of enrollment if less than 10% of the course content has been accessed.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Support is available through email, discussion forums, and the Help Centre. Premium and Pro learners also get access to dedicated mentors and doubt-solving sessions.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners retain access to the course material, assignments, and recordings for 2 years. Pro plan learners may receive lifetime access to select resources.",
      },
      {
        ques: "Are there any capstone projects included?",
        ans: "Yes, Pro plan learners will build a capstone project such as a multiplayer 3D game or AR/VR-based game, showcasing end-to-end development skills.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This 3D Modelling & Animation course trains learners in creating 3D assets, characters, environments, and animations for games, films, AR/VR, and digital media. It is ideal for aspiring 3D artists, animators, designers, and professionals wanting to enter creative industries.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "No strict prerequisites. Basic computer literacy and creativity are enough. However, familiarity with drawing, design principles, or any 2D/3D software can be helpful.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, it starts from beginner-friendly topics like interface navigation and modelling basics, and gradually moves toward advanced concepts like rigging, texturing, and rendering.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "You’ll learn 3D modelling, sculpting, UV mapping, texturing, rigging, animation, lighting, rendering, and VFX basics. Tools include Blender, Maya, 3ds Max, ZBrush, and Adobe After Effects for post-production.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course typically lasts 6–9 months, with a recommended commitment of 6–8 hours per week.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Recorded, self-paced || Premium Plan: Recorded + weekly live sessions || Pro Plan: Recorded + live classes, industry projects, and mentorship support.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Yes, learners will create multiple 3D models, animations, character rigs, and a final capstone project such as a short animated film or a 3D environment.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners will have access to all session recordings.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Premium and Pro learners receive detailed mentor feedback on their 3D models and animations, while Basic learners get guided walkthroughs only.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Yes, Pro learners get portfolio guidance, resume building, interview preparation, and connections to studios in the animation and gaming industry. Basic and Premium learners don’t get placement support.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, all learners will receive a verifiable certificate that can be shared with recruiters and added to LinkedIn.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: 3D Modelling & Animation Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },
      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, learners can defer their enrollment once within 30 days of joining to a later batch of the same course.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refund requests are accepted within 7 days of enrollment if less than 10% of the course content has been accessed.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Support is available through email, community groups, and the Help Centre. Premium and Pro learners get priority support and mentor sessions.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners retain access for 2 years from the date of purchase. Pro learners may get lifetime access to selected resources and projects.",
      },
      {
        ques: "Are there any capstone projects included?",
        ans: "Yes, Pro plan learners complete a capstone project such as a short 3D animated film, a game-ready 3D character, or a detailed 3D environment.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "The Blender Master Class is designed to take learners from beginner to advanced level in 3D design and animation using Blender. It is ideal for aspiring 3D artists, animators, game designers, filmmakers, and professionals who want to master Blender for creative projects.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "No strict prerequisites are required. Basic computer skills are enough. However, prior knowledge of design, drawing, or 3D concepts will be an added advantage.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course starts with Blender basics and gradually advances to professional-level modelling, texturing, rigging, animation, and rendering.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "The course covers Blender interface navigation, 3D modelling, sculpting, UV mapping, materials, texturing, rigging, physics simulations, lighting, rendering with Eevee & Cycles, VFX, and compositing.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course runs for 6–8 months, with a recommended commitment of 6–10 hours per week.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded || Premium Plan: Recorded + weekly live Q&A || Pro Plan: Recorded + live mentorship, advanced projects, and portfolio guidance.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Yes, learners will complete projects such as modelling 3D props, creating characters, environment design, animation sequences, and a final capstone Blender project.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners will get access to all live session recordings for review.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Yes, Premium and Pro learners receive personalized mentor feedback on assignments and projects. Basic learners only get project walkthroughs.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro learners get career support including portfolio building, resume guidance, interview prep, and studio referrals. Basic and Premium plans don’t include placement support.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, the certificate is verifiable online and can be shared with recruiters or added to LinkedIn.",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: Blender Master Class Certificate || Pro: Joint Certificate from the Institute + Industry Partner (if applicable).",
      },
      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, one-time deferment is allowed within 30 days of purchase to a later batch of the same course.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are available within 7 days of enrollment if less than 10% of the content is accessed.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Support is available via email, discussion forums, and community groups. Premium and Pro learners also get dedicated mentor support.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to course material, recordings, and resources. Pro learners may receive lifetime access to selected content.",
      },
      {
        ques: "Are there any capstone projects included?",
        ans: "Yes, Pro learners complete a capstone project such as a short animated film, a game-ready character, or a complex 3D scene in Blender.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ans: "This course is focused on mastering 3D design, modelling, rigging, texturing, lighting, animation, and rendering using Autodesk 3ds Max & Maya. It is ideal for students, 3D artists, animators, VFX professionals, and game developers who want to build industry-ready skills.",
      },
      {
        ques: "What are the prerequisites for enrolling in this course?",
        ans: "No strict prerequisites are required. Basic computer knowledge is sufficient. Prior exposure to design, art, or 3D software is helpful but not mandatory.",
      },
      {
        ques: "Is this course suitable for beginners?",
        ans: "Yes, the course covers fundamentals and progresses to advanced concepts in both 3ds Max and Maya, making it suitable for beginners as well as intermediate learners.",
      },
      {
        ques: "What topics and tools are covered in the course?",
        ans: "Topics include interface navigation, polygon & NURBS modelling, UV mapping, materials & texturing, rigging, character animation, dynamics & effects, lighting & rendering with Arnold, and integration with game engines.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course duration is typically 6–9 months, with a suggested time commitment of 6–10 hours per week.",
      },
      {
        ques: "What is the learning format? Are sessions live, recorded, or hybrid?",
        ans: "Basic Plan: Fully recorded || Premium Plan: Recorded + weekly live Q&A || Pro Plan: Recorded + live mentorship, portfolio guidance, and studio-level projects.",
      },
      {
        ques: "Does the course include projects or assignments?",
        ans: "Yes, learners will work on projects like product visualization, architectural design, character modelling, short animations, VFX shots, and a final portfolio project.",
      },
      {
        ques: "Will I have access to recordings if I miss a live session?",
        ans: "Yes, Premium and Pro learners get full access to all session recordings.",
      },
      {
        ques: "Will I receive feedback on assignments?",
        ans: "Yes, Premium and Pro learners get detailed feedback and guidance from mentors on submitted assignments and projects.",
      },
      {
        ques: "Does this course provide job assistance?",
        ans: "Pro learners receive job support including resume building, portfolio reviews, interview preparation, and placement assistance. Basic and Premium plans don’t include placement help.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, certificates are verifiable online and recognized by industry recruiters. Pro learners may also get an Autodesk co-branded certificate (if available).",
      },
      {
        ques: "What certificate will I get in each plan?",
        ans: "Basic and Premium: Max & Maya Course Completion Certificate || Pro: Joint Certificate from the Institute + Autodesk Partner (if applicable).",
      },
      {
        ques: "Is it possible to postpone my enrollment to a future batch?",
        ans: "Yes, learners can defer once within 30 days of joining to a future batch.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are available within 7 days of enrollment if less than 10% of the content has been accessed.",
      },
      {
        ques: "How can I get help if I have questions or face technical issues?",
        ans: "Support is available via email, community forums, and discussion groups. Premium and Pro learners also get dedicated mentor support.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Learners get 2 years of access to all learning resources. Pro learners may get lifetime access to selected recorded content.",
      },
      {
        ques: "Are there any capstone projects included?",
        ans: "Yes, Pro learners must complete a capstone project such as a short animation film, a game-ready character, or a cinematic VFX sequence.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ques: "What is the Android App Development course about?",
        ans: "This course teaches you how to design, build, and deploy Android applications using Java, Kotlin, and Android Studio. It covers UI/UX design, database integration, APIs, Firebase, and app publishing.",
      },
      {
        ques: "Do I need prior coding experience for this course?",
        ans: "Basic knowledge of programming is recommended, but the course starts with fundamentals, making it suitable for beginners.",
      },
      {
        ques: "What is the duration of the course, and how many hours per week are required?",
        ans: "The course typically runs for 6–8 months, with a recommended 6–10 hours of study per week.",
      },
      {
        ques: "What topics will I learn in this course?",
        ans: "You will learn Java & Kotlin programming, Android Studio, layouts, activities, fragments, navigation, REST APIs, Firebase integration, push notifications, and Play Store publishing.",
      },
      {
        ques: "What is the learning format of this course?",
        ans: "Basic Plan: Recorded sessions only || Premium Plan: Recorded + Live Q&A sessions || Pro Plan: Recorded + Live mentorship, doubt-solving, and guided projects.",
      },
      {
        ques: "Are projects and assignments included?",
        ans: "Yes, you will work on real-world projects like a To-Do App, Chat Application, Weather App, News App, E-commerce App, and a Capstone Project.",
      },
      {
        ques: "Will I get access to session recordings if I miss a live class?",
        ans: "Yes, all learners get access to recorded sessions. Premium and Pro learners get extended access with updates.",
      },
      {
        ques: "Does the course provide placement support?",
        ans: "Yes, placement support such as resume building, interview preparation, and job assistance is available in the Pro Plan.",
      },
      {
        ques: "What kind of certification will I receive?",
        ans: "Learners receive an industry-recognized Android App Development Certificate. Pro learners may also get co-branded certificates from partnered companies.",
      },
      {
        ques: "Is the certificate verifiable by employers?",
        ans: "Yes, certificates are verifiable online and recognized by recruiters.",
      },
      {
        ques: "Is it possible to postpone my enrollment to a later batch?",
        ans: "Yes, you may defer your enrollment once within 30 days of joining.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Full refund is available within 7 days of enrollment, provided less than 10% of the content has been accessed.",
      },
      {
        ques: "How long do I have access to the course materials?",
        ans: "Basic Plan: 1 year access || Premium Plan: 2 years access || Pro Plan: Lifetime access to recorded content.",
      },
      {
        ques: "What kind of support is provided during the course?",
        ans: "Learners get support through discussion forums, email, and community groups. Premium and Pro learners also get direct mentor guidance.",
      },
      {
        ques: "What kind of capstone project is included?",
        ans: "The Capstone project can be a full-fledged Android app like a Food Delivery App, Social Media App, or E-learning App deployed on the Play Store.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ques: "What is the Cloud Computing course about?",
        ans: "This course provides a complete understanding of cloud concepts, services, and platforms. Learners gain hands-on experience with AWS, Microsoft Azure, and Google Cloud Platform (GCP), covering deployment, storage, security, and scaling of applications.",
      },
      {
        ques: "Do I need prior knowledge before enrolling?",
        ans: "Basic computer literacy and understanding of networking or operating systems is recommended, but not mandatory. The course starts from beginner level and gradually moves to advanced concepts.",
      },
      {
        ques: "What is the duration of the course, and how much weekly time should I dedicate?",
        ans: "The course typically lasts 6–8 months with a recommended 6–10 hours of learning per week.",
      },
      {
        ques: "What topics are covered in this course?",
        ans: "You will learn cloud fundamentals, virtualization, IaaS, PaaS, SaaS, storage services, compute instances, networking, serverless architecture, cloud security, DevOps integration, and deployment using AWS, Azure, and GCP.",
      },
      {
        ques: "What is the learning format of the course?",
        ans: "Basic Plan: Self-paced recorded modules || Premium Plan: Recorded + Live Q&A sessions || Pro Plan: Recorded + Live mentorship, doubt-solving, and guided projects.",
      },
      {
        ques: "Does this course include projects or assignments?",
        ans: "Yes, learners will build projects such as hosting a website on AWS S3, deploying an app on Azure, setting up a CI/CD pipeline, serverless API using Lambda, and a final capstone project using multi-cloud deployment.",
      },
      {
        ques: "Will I get recordings if I miss a live session?",
        ans: "Yes, all learners receive access to session recordings. Premium and Pro learners get extended access and updates.",
      },
      {
        ques: "Does the course provide placement or career support?",
        ans: "Yes, Pro Plan includes resume building, interview preparation, and job assistance with cloud-focused companies.",
      },
      {
        ques: "What certification will I receive?",
        ans: "Learners receive an industry-recognized Cloud Computing Certificate. Pro learners also get project completion certificates verified by partner companies.",
      },
      {
        ques: "Is the certificate verifiable by employers?",
        ans: "Yes, all certificates are verifiable online and recognized by hiring managers.",
      },
      {
        ques: "Can I defer my enrollment to a later batch?",
        ans: "Yes, learners can defer their enrollment once within 30 days of purchase.",
      },
      {
        ques: "What is the refund policy?",
        ans: "A full refund is available within 7 days of purchase, provided the learner has accessed less than 10% of the content.",
      },
      {
        ques: "How long will I have access to the course materials?",
        ans: "Basic: 1 year || Premium: 2 years || Pro: Lifetime access with updates.",
      },
      {
        ques: "What type of support will I get during the course?",
        ans: "Learners get help through discussion forums, email, and community groups. Premium & Pro learners also receive mentor support and dedicated doubt-solving sessions.",
      },
      {
        ques: "What is the Capstone Project?",
        ans: "The capstone project involves creating a cloud-based end-to-end application using AWS, Azure, and GCP, including deployment, scaling, monitoring, and security implementation.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ques: "What is the UI/UX Designer course about?",
        ans: "This course introduces learners to the principles of User Interface (UI) and User Experience (UX) design. It focuses on design thinking, wireframing, prototyping, usability testing, and visual design to help create intuitive and user-friendly digital products.",
      },
      {
        ques: "Who should take this course?",
        ans: "This course is ideal for beginners interested in design, aspiring UI/UX designers, graphic designers who want to transition into digital product design, and developers who want to improve their design skills.",
      },
      {
        ques: "Do I need any prerequisites?",
        ans: "No prior coding knowledge is required. Basic computer literacy and creativity are sufficient. Familiarity with graphic tools like Photoshop or Illustrator is helpful but not mandatory.",
      },
      {
        ques: "What topics are covered in the course?",
        ans: "You’ll learn design thinking, user research, information architecture, wireframing, prototyping, interaction design, typography, color theory, accessibility, usability testing, and responsive design. Tools like Figma, Adobe XD, and Sketch are also covered.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course typically lasts 5–6 months, with a recommended 6–8 hours of study per week.",
      },
      {
        ques: "What is the learning format?",
        ans: "Basic Plan: Self-paced recorded lessons || Premium Plan: Recorded + live workshops || Pro Plan: Recorded + live mentorship, design critiques, and portfolio review sessions.",
      },
      {
        ques: "Does the course include projects?",
        ans: "Yes, learners will work on real-world design projects like mobile app UI, website redesign, dashboard design, and a final capstone project to build a professional portfolio.",
      },
      {
        ques: "Will I have access to recordings if I miss live sessions?",
        ans: "Yes, recordings of all live sessions are provided. Premium and Pro learners get extended access.",
      },
      {
        ques: "Does the course provide placement support?",
        ans: "Yes, Pro learners get career guidance, portfolio-building sessions, interview preparation, and job assistance with design-focused companies.",
      },
      {
        ques: "What certification will I receive?",
        ans: "All learners will receive an industry-recognized UI/UX Design Certificate. Pro learners get additional project completion certificates.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, all certificates are digitally verifiable by employers through a unique link.",
      },
      {
        ques: "Can I defer my enrollment to a later batch?",
        ans: "Yes, a one-time deferment within 30 days of purchase is allowed.",
      },
      {
        ques: "What is the refund policy?",
        ans: "A full refund is available within 7 days of purchase, provided less than 10% of the content has been accessed.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Basic: 1 year || Premium: 2 years || Pro: Lifetime access including future updates.",
      },
      {
        ques: "What kind of support is available during the course?",
        ans: "Learners receive support via discussion forums, email, and design communities. Premium & Pro learners also get mentor support and one-on-one feedback on their projects.",
      },
      {
        ques: "Will I be able to build a portfolio during the course?",
        ans: "Yes, learners complete multiple projects that can be added to their portfolio. Pro learners also receive professional guidance on structuring and presenting their design portfolio.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ques: "What is the Digital Marketing course about?",
        ans: "This course provides a comprehensive understanding of digital marketing strategies, tools, and techniques. Learners gain hands-on knowledge in SEO, social media marketing, Google Ads, email marketing, content strategy, analytics, and more to help businesses grow online.",
      },
      {
        ques: "Who should enroll in this course?",
        ans: "This course is ideal for beginners, students, business owners, working professionals, and aspiring digital marketers who want to build a career in online marketing or grow their business digitally.",
      },
      {
        ques: "Do I need prior experience to join?",
        ans: "No prior experience is required. Basic computer literacy and internet usage skills are sufficient. The course starts with fundamentals and gradually moves to advanced strategies.",
      },
      {
        ques: "What topics are covered in this course?",
        ans: "You’ll learn Search Engine Optimization (SEO), Social Media Marketing (Facebook, Instagram, LinkedIn, YouTube), Google Ads, Meta Ads, Google Analytics, Email Marketing, Content Marketing, Influencer Marketing, E-commerce Marketing, Affiliate Marketing, and Online Reputation Management.",
      },
      {
        ques: "What is the duration of the course, and how much weekly time should I dedicate?",
        ans: "The course typically lasts 4–6 months, with a recommended commitment of 6–8 hours per week.",
      },
      {
        ques: "What is the learning format?",
        ans: "Basic Plan: Self-paced recorded modules || Premium Plan: Recorded + live doubt-solving || Pro Plan: Recorded + live mentorship, campaign simulations, and industry-level projects.",
      },
      {
        ques: "Does the course include projects or practical assignments?",
        ans: "Yes, learners will work on projects like running a Google Ads campaign, optimizing a website with SEO, creating social media campaigns, designing email campaigns, and analyzing data with Google Analytics.",
      },
      {
        ques: "Will I get recordings if I miss a live session?",
        ans: "Yes, all live sessions are recorded and made available for learners. Premium and Pro learners get extended access.",
      },
      {
        ques: "Does this course provide career support?",
        ans: "Yes, Pro learners get career guidance, resume building, interview preparation, and job assistance with companies hiring digital marketing professionals.",
      },
      {
        ques: "What certification will I receive?",
        ans: "Learners will receive an industry-recognized Digital Marketing Certificate. Pro learners also get additional certificates for projects and campaign simulations.",
      },
      {
        ques: "Is the certification verifiable by employers?",
        ans: "Yes, all certificates are digitally verifiable through a unique link.",
      },
      {
        ques: "Can I defer my enrollment to a later batch?",
        ans: "Yes, learners can defer their enrollment once within 30 days of purchase.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are available within 7 days of purchase, provided less than 10% of the course content has been accessed.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Basic: 1 year || Premium: 2 years || Pro: Lifetime access with updates.",
      },
      {
        ques: "What kind of support is available during the course?",
        ans: "Learners get support via discussion forums, email, and community groups. Premium & Pro learners also get dedicated mentor support and live Q&A sessions.",
      },
      {
        ques: "Will this course help me grow my business online?",
        ans: "Yes, learners gain practical skills in running ads, improving SEO, and creating marketing strategies that can directly help grow their business or startup.",
      },
    ],
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

      BuildProjectsFromScratchH: "Build Projects from Scratch",

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
        ques: "What is the Digital Marketing+ course about?",
        ans: "This advanced course covers not only the fundamentals of digital marketing but also specialized areas like advanced SEO, marketing automation, performance marketing, influencer marketing, and AI-powered digital campaigns. It’s designed to make learners industry-ready for high-level digital marketing roles.",
      },
      {
        ques: "Who should enroll in this course?",
        ans: "This course is perfect for aspiring digital marketers, marketing professionals who want to upgrade their skills, business owners, freelancers, and students looking to build a strong career in advanced digital marketing.",
      },
      {
        ques: "Do I need prior experience before joining?",
        ans: "Basic knowledge of marketing concepts or digital tools is helpful but not mandatory. Beginners can start from scratch, as the course starts with fundamentals and progresses to advanced strategies.",
      },
      {
        ques: "What topics are covered in the Digital Marketing+ course?",
        ans: "The course covers SEO (basic to advanced), Social Media Marketing, Google & Meta Ads, E-commerce Marketing, Affiliate Marketing, Email Automation, Content Strategy, Google Analytics 4, Marketing Funnels, Performance Marketing, AI Tools for Marketing, and Growth Hacking.",
      },
      {
        ques: "What is the duration of the course, and how much time should I dedicate weekly?",
        ans: "The course typically lasts 6–8 months, with a recommended 8–10 hours of study per week.",
      },
      {
        ques: "What is the learning format?",
        ans: "Basic Plan: Self-paced recorded modules || Premium Plan: Recorded + live Q&A sessions || Pro Plan: Recorded + live mentorship, case studies, and real-time campaign simulations.",
      },
      {
        ques: "Does this course include projects or live campaigns?",
        ans: "Yes, learners will run live ad campaigns on Google and Meta, perform SEO optimization for websites, create automated email campaigns, and complete a capstone project involving a 360° digital marketing strategy for a business.",
      },
      {
        ques: "Will I get recordings if I miss a live session?",
        ans: "Yes, all live sessions are recorded and available for learners. Premium & Pro learners also receive extended access.",
      },
      {
        ques: "Does this course provide career or placement support?",
        ans: "Yes, Pro learners receive advanced career support, resume building, portfolio review, interview preparation, and access to job opportunities in top marketing companies and startups.",
      },
      {
        ques: "What certification will I receive?",
        ans: "Learners receive an industry-recognized Digital Marketing+ Certificate. Pro learners also get additional certifications for campaign simulations and projects verified by industry partners.",
      },
      {
        ques: "Is the certificate verifiable by employers?",
        ans: "Yes, all certificates are digitally verifiable through a unique link.",
      },
      {
        ques: "Can I defer my enrollment to another batch?",
        ans: "Yes, a one-time deferment is allowed within 30 days of purchase.",
      },
      {
        ques: "What is the refund policy?",
        ans: "Refunds are available within 7 days of purchase, provided that less than 10% of the content has been accessed.",
      },
      {
        ques: "How long will I have access to the course material?",
        ans: "Basic: 1 year || Premium: 2 years || Pro: Lifetime access with future updates.",
      },
      {
        ques: "What kind of support will I get during the course?",
        ans: "Learners get support via discussion forums, email, and online communities. Premium & Pro learners also get mentor support, live Q&A sessions, and one-on-one guidance on campaigns.",
      },
      {
        ques: "Will this course help me become a performance marketer?",
        ans: "Yes, the course has a strong focus on performance marketing, analytics, ROI tracking, and real-time campaign optimization, making learners industry-ready for performance marketing roles.",
      },
    ],
  },
];
export default courseData;
