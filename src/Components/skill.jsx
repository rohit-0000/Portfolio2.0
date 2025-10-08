import CppLogo from "../assets/c++Logo.png";
import javaLogo from "../assets/javaLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import reactLogo from "../assets/reactLogo.png";
import springBootLogo from "../assets/springBootLogo.png";
import mongoDbLogo from "../assets/mongoDbLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import sqlLogo from "../assets/sqlLogo.png";
import CSS from "../assets/cssLogo.png";
import html from "../assets/htmlLogo.png";
import dockerLogo from "../assets/dockerLogo.png";
import AnimatedSection from "./Animation/AnimatedSectionScale";
import AnimateRightToLeft from "./Animation/AnimateRightToLeft";
import { color } from "framer-motion";
const skill = () => {
  const skills = [
    CppLogo,
    javaLogo,
    javascriptLogo,
    springBootLogo,
    reactLogo,
    tailwindLogo,
    dockerLogo,
    html,
    CSS,
    mongoDbLogo,
    sqlLogo,
  ];
  const LogoDetail = [
    {
      name: "CPP",
      description:
        "Proficient in data structures and algorithms, with extensive experience in C++",
        color:"blue-900",
    },
    {
      name: "JAVA",
      description:
        "Strong understanding of object-oriented programming and DSA principles in Java",
        color:"red-500",
    },
    {
      name: "JAVASCRIPT",
      description:
        "Skilled in developing dynamic and interactive web applications using modern JavaScript (ES6+).",
        color:"yellow-500",
    },
    {
      name: "SPRING BOOT",
      description:
        "Experienced in developing robust and scalable RESTful APIs using Spring Boot",
        color:"green-500",
    },
    {
      name: "REACT",
      description:
        "Proficient in building modern, responsive user interfaces with React.js, focusing on component-based architecture and state management",
        color:"cyan-500",
    },
    {
      name: "TAILWIND",
      description:
      "Skilled in rapidly building custom and responsive user interfaces using Tailwind CSS for efficient styling",
      color:"cyan-500",
    },
    {
      name: "DOCKER",
      description:
        "Proficient in containerizing applications using Docker for consistent deployment and streamlined development workflows",
        color:"blue-400",
    },
    {
      name: "HTML",
      description:
        "Proficient in creating structured and semantic layouts for web applications.",
        color:"orange-500",
    },
    {
      name: "CSS",
      description:
        "Experienced in styling and visually enhancing web pages using modern CSS techniques.",
        color:"blue-400",
    },

    {
      name: "MONGODB",
      description:
        "Adept at designing and managing NoSQL databases with MongoDB for flexible and scalable data storage",
        color:"green-500",
    },
    {
      name: "SQL",
      description:
        "Proficient in SQL for database management, querying, and optimizing relational data",
        color:"blue-400",
    },
  ];

  return (
    // <AnimateRightToLeft>
    <div
      className=" max-w-screen min-h-screen text-white  flex flex-col items-center px-10 md:px-20 lg:px-33 pb-10 pt-15  bg-neutral-950 "
      id="Skill"
    >
      <h1 className="text-4xl md:text-5xl mb-15 font-bold text-yellow-300 relative after:absolute after:content-[''] after:h-1.5 after:w-full after:left-0 after:bg-amber-300 md:after:-bottom-5 after:-bottom-3 after:rounded">
        My Skills
      </h1>
      <div className="flex flex-wrap gap-5 md:gap-10 justify-center ">
        {skills.map((_, index) => {
          return (
            <AnimatedSection key={index}>
              <div className={`p-4 md:p-5 rounded-2xl flex flex-col justify-between items-center gap-2 hover:scale-150 transition-all duration-700 hover:shadow-md `}>
                <img
                  src={skills[index]}
                  className={`object-cover aspect-square w-15 md:w-30 self-center  filter drop-shadow-[0_0_10px] drop-shadow-${LogoDetail[index].color} `}
                />

                <h2 className={`text-md md:text-2xl font-bold font-sans text-${LogoDetail[index].color}`}>
                  {LogoDetail[index].name}
                </h2>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
    // </AnimateRightToLeft>
  );
};

export default skill;
