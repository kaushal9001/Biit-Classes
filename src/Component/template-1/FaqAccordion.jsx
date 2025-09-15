import React, { useState, useRef, useEffect } from "react";

const faqs = [
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
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex justify-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((item, idx) => (
          <AccordionItem
            key={idx}
            idx={idx}
            question={item.ques}
            answer={item.ans}
            isOpen={openIndex === idx}
            onToggle={() => toggle(idx)}
          />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ idx, question, answer, isOpen, onToggle }) {
  const contentRef = useRef(null);

  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center transition justify-between p-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${idx}`}
        id={`faq-btn-${idx}`}
      >
        <span className="font-medium">{question}</span>

        <span className="ml-4 flex items-center">
          <svg
            className={`transform transition-transform duration-200 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M12 5v14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={`faq-panel-${idx}`}
        role="region"
        aria-labelledby={`faq-btn-${idx}`}
        style={{ maxHeight: height }}
        className="transition-[max-height] duration-300 ease-in-out px-4 overflow-hidden bg-white "
      >
        <div ref={contentRef} className="py-4 text-gray-700">
          {answer}
        </div>
      </div>
    </div>
  );
}
