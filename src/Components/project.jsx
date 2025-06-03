import React, { useState, useEffect } from "react";
import chatApp from "../assets/Project/chatApp.png";
import notesApp from "../assets/Project/notesApp.png";
import journalApp from "../assets/Project/journalApp.png";
import portfolio1O from "../assets/Project/portfolio1.0.png";
import portfolio2O from "../assets/Project/portfolio2.0.png";
import studySync from "../assets/Project/studySync.png";
import calculator from "../assets/Project/calculator.png";
import clock from "../assets/Project/clock.png";
import CppLogo from "../assets/c++Logo.png";
import javaLogo from "../assets/javaLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import reactLogo from "../assets/reactLogo.png";
import springBootLogo from "../assets/springBootLogo.png";
import mongoDbLogo from "../assets/mongoDbLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import reduxLogo from "../assets/reduxLogo.png";
import cssLogo from "../assets/cssLogo.png";
import htmlLogo from "../assets/htmlLogo.png";
import AnimateRightToLeft from "./Animation/AnimateRightToLeft";
import AnimateLeftToright from "./Animation/AnimateLeftToright";
import AnimatedSection from "./Animation/AnimatedSectionScale";

const project = () => {
  const [openProject, setOpenProject] = useState("");
  const [projectAnimation, setProjectAnimation] = useState(false);
  const [clickLocation, setClickLocation] = useState(null);

  const ProjectDetail = [
    {
      banner: chatApp,
      name: "EZ Chat",
      description:
        "EZ Chat is a powerful, all-in-one messaging app for seamless communication. Share text, images, files, and chat with AI—all in a fast, intuitive, and dynamic platform.",
      features: {
        "User Authentication":
          "JWT-based auth, OAuth2 (Google), and Bcrypt password encoding for robust security.",
        "Real-time Messaging":
          "STOMP over WebSocket for instant one-on-one and group chats.",
        "AI-powered Replies":
          "Integrated with Gemini API via WebClient for intelligent AI responses.",
        "Media Sharing":
          "Supports uploading images and all binary file types to Cloudinary (text chat content is persisted in MongoDB).",
        "Forgot Password": "OTP-based password reset using JavaMailSender.",
        "Responsive Frontend":
          "Mobile-first design with Tailwind CSS and React.",
        "State Management":
          "Redux Toolkit and async thunks for predictable state updates.",
        Deployment:
          "Frontend on Vercel; Backend on Render; Database hosted on MongoDB Atlas.",
      },
      techStack: {
        Java: javaLogo,
        "Spring Boot": springBootLogo,
        "React JS": reactLogo,
        "Tailwind CSS": tailwindLogo,
        MongoDB: mongoDbLogo,
      },
      link: "https://chat-app-five-woad-79.vercel.app/home",
      git: "https://github.com/rohit-0000/chat_App01",
    },
    {
      banner: notesApp,
      name: "Paste App",
      description:
        "Paste app is a simple, cloud-based notes app for quick and organized note-taking, keeping your ideas accessible anytime, anywhere securely and effortlessly.",
      features: {
        "User Authentication":
          "JWT-based authentication with Spring Security and Bcrypt for password encryption.",
        "Forgot Password":
          "OTP-based password recovery using JavaMailSender for email delivery.",
        "Note Management":
          "Create, edit, delete, and persist notes in MongoDB Atlas.",
        "Search Functionality":
          "Full-text search to find saved notes quickly and efficiently.",
        "Dynamic Editor":
          "Custom textarea with dynamic line numbering similar to VS Code.",
        "Responsive Frontend":
          "Fully responsive UI built with React, ensuring usability across devices.",
        "State Management":
          "Redux Toolkit with async thunks for efficient global state handling.",
        Notifications:
          "Toast notifications to provide real-time feedback on user actions.",
        Routing: "React Router DOM used for intuitive client-side routing.",
        Deployment:
          "Frontend deployed on Vercel; Backend on Render; Database hosted on MongoDB Atlas.",
      },

      techStack: {
        Java: javaLogo,
        "Spring Boot": springBootLogo,
        "React JS": reactLogo,
        "Redux Toolkit": reduxLogo,
        MongoDB: mongoDbLogo,
      },
      link: "https://paste-app-git-main-rohit-0000s-projects.vercel.app/home",
      git: "https://github.com/rohit-0000/PasteApp",
    },
    {
      banner: journalApp,
      name: "Journal App",
      description:
        "Journal app is a private digital sanctuary that securely stores your thoughts and memories, with the added ability to send you email updates",
      features: {
        "User Authentication":
          "JWT-based authentication with Spring Security and Bcrypt for password encryption.",
        "Role-Based Authorization":
          "Access control using roles such as USER and ADMIN.",
        "Email Service":
          "JavaMailSender for sending verification and password recovery emails.",
        "Journal Management":
          "Create, read, update, and delete journal entries in MongoDB Atlas.",
        "Validation & Error Handling":
          "Robust request validation and centralized exception handling for consistent API responses.",
        "Lombok Integration":
          "Use of Lombok annotations (@Getter, @Setter, @Builder, etc.) to reduce boilerplate code.",
        "CORS Configuration":
          "Global CORS settings to allow requests from trusted frontend domains.",
        "Environment Configuration":
          "Profiles (dev, test, prod) with externalized configuration using application-*.properties.",
        "Health Checks":
          "Spring Boot Actuator endpoints for application health and metrics.",
      },

      techStack: {
        Java: javaLogo,
        "Spring Boot": springBootLogo,
        MongoDB: mongoDbLogo,
      },

      link: "https://github.com/rohit-0000/JournalApp",
      git: "https://github.com/rohit-0000/JournalApp",
    },
    {
      banner: portfolio1O,
      name: "Portfolio 1.0",
      description:
        "Portfolio 1.0 is a foundational personal website, created to display your initial projects and demonstrate your early steps into the world of web development.",
      features: {
        "Responsive Design":
          "Fully responsive layout using HTML, CSS, and JavaScript to ensure compatibility across devices.",
        "About Section":
          "Describes personal background, skills, and professional interests.",
        "Skills Section":
          "Lists all technical skills including C++, Java, Spring Boot, React, JavaScript, CSS, MongoDB, and SQL.",
        "Education Section": "Details academic qualifications.",
        "Message Sending Capability":
          "Contact form for sending messages (basic frontend implementation).",
        "Project Showcase": "Displays multiple personal or academic projects.",
        Deployment:
          "Hosted on GitHub Pages: https://rohit-0000.github.io/Portfolio1.0/",
      },

      techStack: {
        "C++": CppLogo,
        JavaScript: javascriptLogo,
        CSS: cssLogo,
      },

      link: "https://rohit-0000.github.io/Portfolio1.0/",
      git: "https://github.com/rohit-0000/Portfolio",
    },
    {
      banner: portfolio2O,
      name: "Portfolio 2.0",
      description:
        "Portfolio 2.0 is evolved personal website, meticulously crafted to powerfully showcase your most recent projects and highlight your continuously expanding skills.",
      features: {
        "Modern React Architecture":
          "Built using React with reusable components and hooks for state management and routing.",
        "Tailwind CSS Styling":
          "Fully styled using Tailwind CSS for rapid UI development and utility-first design.",
        "Responsive Design":
          "Optimized for all screen sizes including mobile, tablet, and desktop using Tailwind’s responsive utilities.",
        "Animations & Transitions":
          "Smooth entrance animations and hover effects implemented using CSS transitions and Tailwind animation classes.",
        "Project Showcase":
          "Detailed cards for each project including description, tech stack used, GitHub links, and live demos.",
        "Skills Section":
          "Visually organized list of skills and technologies used, displayed with icons or tags.",
        "Contact Section":
          "Includes email, LinkedIn, and GitHub links, and optionally a contact form for communication.",
        Deployment:
          "Hosted on vercel, ensuring accessibility and fast loading.",
        "Clean UI/UX":
          "Minimalistic and professional interface focused on readability and user experience.",
      },

      techStack: {
        React: reactLogo,
        "Tailwind CSS": tailwindLogo,
      },

      link: "https://rohit-0000.github.io/Portfolio-frontend/",
      git: "https://github.com/rohit-0000/Portfolio",
    },
    {
      banner: studySync,
      name: "StudySync",
      description:
        "StudySync is designed to enhance UI interactions, demonstrating smooth motion effects, adaptive layouts, and engaging visual elements for an improved user experience.",
      features: {
        "Responsive Layout":
          "Designed to adapt seamlessly across all device sizes including mobile, tablet, and desktop.",
        "Custom UI":
          "Hand-crafted HTML structure with clean and semantic markup for clarity and SEO benefits.",
        "Modern Styling":
          "CSS used for layout, spacing, and design — ensuring a clean, modern look.",
        "Transitions & Animations":
          "Smooth hover effects, entrance animations, and element transitions for an interactive experience.",
        Deployment:
          "Deployed on GitHub Pages for free hosting and easy sharing.",
      },
      techStack: {
        HTML5: htmlLogo,
        CSS3: cssLogo,
        JavaScript: javascriptLogo,
      },
      link: "https://rohit-0000.github.io/StudySync/",
      git: "https://github.com/rohit-0000/StudySync",
    },
    {
      banner: calculator,
      name: "Calculator",
      description:
        "A calculator is a quick and efficient tool for performing accurate mathematical operations and solving equations instantly.",
      features: {
        "Basic Arithmetic Operations":
          "Performs addition, subtraction, multiplication, and division.",
        "Responsive UI":
          "Designed to work seamlessly across devices of all screen sizes.",
        "Clean Layout":
          "User-friendly layout built with HTML and styled using CSS.",
        "Button Interactions":
          "Smooth button press animations and input handling with JavaScript.",
        "Error Handling":
          "Manages edge cases like division by zero with basic validation.",
        Deployment: "Hosted on GitHub Pages for easy access and sharing.",
      },
      techStack: { HTML5: htmlLogo, CSS: cssLogo, JavaScript: javascriptLogo },
      link: "https://rohit-0000.github.io/calculator/",
      git: "https://github.com/rohit-0000/Portfolio",
    },
    {
      banner: clock,
      name: "Clock",
      description:
        "A clock app featuring both analog and digital displays for precise and seamless timekeeping.",
      features: {
        "Dual Display Modes":
          "Supports both analog and digital clock interfaces on a single page.",
        "12/24 Hour Format":
          "Toggle option between 12-hour and 24-hour time formats for digital clock.",
        "Real-Time Functionality":
          "Displays live time updates every second using JavaScript.",
        "Responsive Design":
          "Optimized layout for all screen sizes including mobile, tablet, and desktop.",
        "Custom Styling":
          "Clean UI styled with CSS, including animated analog clock hands.",
        Deployment: "Deployed on GitHub Pages for public access and sharing.",
      },
      techStack: { HTML5: htmlLogo, CSS: cssLogo, JavaScript: javaLogo },
      link: "https://rohit-0000.github.io/clock/",
      git: "https://github.com/rohit-0000/clock/",
    },
  ];

  // Prevent background scroll when project is open
  useEffect(() => {
    if (openProject) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [openProject]);

  function getOverlayStyle() {
    return {
      left: clickLocation.left,
      top: clickLocation.top,
      width: clickLocation.width,
      height: clickLocation.height,
    };
  }

  return (
    <AnimateLeftToright>
      <div
        className="max-w-screen min-h-screen text-white flex flex-col px-10 md:px-20 lg:px-40 items-center pb-10 pt-15 bg-neutral-950"
        id="Project"
      >
        <h1 className="text-4xl md:text-5xl mb-15 font-bold text-yellow-300 relative after:absolute after:content-[''] after:h-1.5 after:w-full after:left-0 after:bg-amber-300 md:after:-bottom-5 after:-bottom-3 after:rounded">
          My Projects
        </h1>

        <div className="flex flex-wrap gap-12 justify-center ">
          {ProjectDetail.map((project, index) => (
            <AnimatedSection key={index}>
              <div
                className={`w-80 h-120 md:w-90 flex flex-col rounded-2xl bg-[#e1e1e1] border-b-3 border-t-3 border-yellow-500 items-center transition-all duration-300 delay-150 relative overflow-hidden ${
                  openProject === ""
                    ? "hover:scale-110"
                    : "pointer-events-none opacity-50"
                }`}
                onClick={(e) => {
                  setClickLocation(e.currentTarget.getBoundingClientRect());
                  setOpenProject(project.name);
                  setTimeout(() => setProjectAnimation(true), 300);
                }}
              >
                <img
                  src={project.banner}
                  className="w-80 md:w-90 rounded-t-2xl transition-all duration-500 hover:scale-108 delay-150"
                />
                <div className="w-full flex flex-col p-5 justify-between text-black text-justify h-full">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-bold">{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <a
                      href={project.link}
                      className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition-all duration-500 active:scale-90"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.git}
                      className="bg-black text-white px-5 py-2 rounded cursor-pointer hover:bg-[#000000d0] transition-all duration-200 active:scale-90"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Animated Fullscreen Overlay */}
        {openProject !== "" &&
          (() => {
            const project = ProjectDetail.find((p) => p.name === openProject);
            if (!project) return null;
            return (
              <div
                className={`
              fixed top-0 left-0 w-screen h-screen bg-[#000000d8] backdrop-blur-xl z-1000 flex flex-col items-center justify-center 
              transition-all duration-300 pb-10 md:pb-0 ${
                projectAnimation ? " opacity-100 " : " opacity-0 rounded-2xl"
              } }
            `}
                style={projectAnimation ? {} : getOverlayStyle()}
              >
                <div className="w-full h-full p-10 md:px-20 lg:px-40 flex flex-col items-center gap-5 overflow-y-auto scrollbar ">
                  <button
                    className="absolute top-1 right-5 text-4xl text-white font-bold z-50"
                    onClick={() => {
                      setProjectAnimation(false);
                      setTimeout(() => {
                        setOpenProject("");
                        setClickLocation(null);
                      }, 300);
                    }}
                  >
                    &times;
                  </button>

                  <img
                    src={project.banner}
                    className="w-80 md:w-130 lg:w-200 rounded-2xl "
                  />
                  <div className="w-full flex flex-col p- justify-between text-white text-justify h-full ">
                    <div className="flex flex-col gap-5">
                      <h3 className="text-4xl font-bold self-center">
                        {project.name}
                      </h3>
                      <p className="text-xl">{project.description}</p>

                      <h4 className="text-3xl font-bold">Features :</h4>
                      <ul className="list-disc flex flex-col gap-3">
                        {Object.entries(project?.features).map(
                          ([key, value]) => {
                            return (
                              <li key={key}>
                                <span className="text-xl font-bold">
                                  {key} :{" "}
                                </span>
                                <span className="text-xl"> {value}</span>
                              </li>
                            );
                          }
                        )}
                      </ul>

                      <h4 className="text-3xl font-bold">Tech Stack :</h4>

                      <ul className=" flex justify-center items-center gap-5 flex-wrap">
                        {Object.entries(project?.techStack).map(
                          ([key, value]) => {
                            return (
                              <li
                                key={key}
                                className="flex flex-col justify-center items-center"
                              >
                                <img
                                  src={value}
                                  className=" w-25 md:w-35 lg:w-45 aspect-square object-cover filter drop-shadow-[0_0_10px] drop-shadow-white"
                                />
                                <h3 className="self-center font-bold text-xl">
                                  {key}
                                </h3>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>

                    <div className="w-full flex justify-between mt-5">
                      <a
                        href={project.link}
                        className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition-all duration-500 active:scale-90 md:text-3xl"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.git}
                        className="bg-white/90 text-black px-5 py-2 rounded cursor-pointer hover:bg-[#ffffff8c] transition-all duration-200 active:scale-90 md:text-3xl"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
      </div>
    </AnimateLeftToright>
  );
};

export default project;
