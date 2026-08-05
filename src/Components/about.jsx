import React from "react";
import About_me from "../assets/Profile/AboutMe.png";

import AnimateLeftToright from "./Animation/AnimateLeftToright";
import leetcode from "../assets/Contact/leetcode.png";
import gfg from "../assets/Contact/gfg.png";
import github from "../assets/Contact/github.svg";
const About = () => {
  return (
    <AnimateLeftToright>
      <div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" max-w-screen lg:min-h-screen text-white flex flex-col justify-center pt-16 pl-2 "
        id="About"
      >
        <div className="rounded-2xl px-5 pt-5 flex flex-col items-center overflow-hidden">
          <h1 className="text-4xl md:text-5xl mb-1 font-bold text-yellow-300 relative after:absolute after:content-[''] after:h-1.5 after:w-full after:left-0 after:bg-amber-300 md:after:-bottom-5 after:-bottom-3 after:rounded">
            About Me
          </h1>
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 lg:gap-10 lg:px-0 ">
            <img
              src={About_me}
              className="max-h-[74vh] rounded-2xl hover:scale-120 transition-all duration-600 delay-300 filter drop-shadow-[0_0_10px] drop-shadow-amber-100/80"
            />
            <div className="md:px-20 lg:px-0  flex flex-col gap-3  lg:text md:text-lg items-center lg:max-w-150 lg:pt-10 lg:self-start">
              <p className="text-justify">
                Hi, I'm <b>Rohit</b>, a <b>Software Engineer</b> at <b>Infosys</b>, working as a <b>Specialist Programmer</b>. I hold a Bachelor's degree in <b>Electrical and Electronics Engineering</b> from <i>Dayananda Sagar College of Engineering</i>, where I discovered my passion for software development.
              </p>
              <p className="text-justify">
                I build scalable and high-performance applications using <b>Java</b>, <b>Spring Boot</b>, <b>Microservices</b>, and <b>React</b>. I'm also passionate about <b>Generative AI</b>, <b>Agentic AI</b>, and <b>Retrieval-Augmented Generation (RAG)</b>, leveraging <b>Spring AI</b> to develop intelligent, AI-powered applications.
              </p>
              <p className="text-justify">
                Beyond software development, I enjoy solving challenging problems through <b>Data Structures &amp; Algorithms</b> and continuously expanding my knowledge by building real-world projects and exploring emerging technologies.
              </p>

              <p className="font-bold text-2xl mb-3 text-yellow-300 self-start">Coding Profiles</p>
              <div className="flex flex-col items-center ">
                <div className="flex gap-10 items-center">
                  <a href="https://leetcode.com/u/rohit-0000/" className="flex flex-col items-center gap-2">
                    <img src={leetcode} className="h-8 md:h-12" />
                    <p className="text-xl">Leetcode</p>
                  </a>
                  <a className="flex flex-col items-center justify-between gap-2" href="https://www.geeksforgeeks.org/user/rohit0000/">
                    <img src={gfg} className="h-8 md:h-12" />
                    <p className="text-xl">GFG</p>
                  </a>
                  <a className="flex flex-col items-center gap-2 " href="https://github.com/rohit-0000">
                    <img src={github} className="h-8 md:h-12" />
                    <p className="text-xl">Github</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateLeftToright>
  );
};

export default About;
