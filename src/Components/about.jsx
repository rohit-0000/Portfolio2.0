import React from "react";
import About_me from "../assets/About_me.png";

import AnimateLeftToright from "./Animation/AnimateLeftToright";
import leetcode from "../assets/leetcode.png";
import gfg from "../assets/gfg.png";
import github from "../assets/github.svg";
const About = () => {
  return (
    <AnimateLeftToright>
      <div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" max-w-screen lg:min-h-screen text-white  flex flex-col lg:px-20 px-10  items-center  pb-10 pt-15 mtl-[100vh] bg-neutral-950 "
        id="About"
      >
        <h1 className="text-4xl md:text-5xl mb-15 font-bold text-yellow-300 relative after:absolute after:content-[''] after:h-1.5 after:w-full after:left-0 after:bg-amber-300 md:after:-bottom-5 after:-bottom-3 after:rounded">
          About Me
        </h1>
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 lg:gap-10 lg:px-0 ">
          <img
            src={About_me}
            className="lg:max-h-[75vh] max-h-[50vh] max-w-[50%] rounded-2xl backdrop-blur-3xl bg-white/10 pt-5 hover:scale-110 transition-all duration-300 delay-300"
          />
          <div className="md:px-20 lg:px-0  flex flex-col gap-5  lg:text md:text-xl items-center lg:max-w-150 lg:py-10 lg:self-start">
            <p className="text-justify">
              I’m a final-year B.E. student in Electrical and Electronics
              Engineering at{" "}
              <i>
                <b>Dayananda Sagar College of Engineering</b>
              </i>
              . While my academic background is in EEE, I discovered my passion
              for software development early on — and have been building,
              learning, and solving ever since.
            </p>
            <p className="text-justify ">
              Over time, I've developed a strong foundation in{" "}
              <b>
                <i>Data Structures and Algorithms</i>
              </b>
              , consistently sharpening my problem-solving skills through
              platforms like
              <a
                href="https://leetcode.com/u/rohit20040121/"
                className="text-blue-500 font-bold"
              >
                {" "}
                LeetCode
              </a>{" "}
              and{" "}
              <a
                href="https://www.geeksforgeeks.org/user/rohit2038sf/"
                className="text-blue-500 font-bold"
              >
                GeeksforGeeks
              </a>
              .
            </p>
            <p className="text-justify ">
              In parallel, I've explored the world of web development, enjoying
              both the logic of backend systems and the creativity of frontend
              design — allowing me to work confidently across the full stack.
            </p>

            <div className="flex gap-10 items-center pt-10">
              <a href="https://leetcode.com/u/rohit20040121/" className="flex flex-col items-center gap-2">
                <img src={leetcode} className="h-15" />
                <p className="text-xl">Leetcode</p>
              </a>
              <a className="flex flex-col items-center justify-between gap-2" href="https://www.geeksforgeeks.org/user/rohit2038sf/">
                <img src={gfg} className="h-15" />
                <p className="text-xl">Leetcode</p>
              </a>
              <a className="flex flex-col items-center gap-2 " href="https://github.com/rohit-0000">
                <img src={github} className="h-15" />
                <p className="text-xl">Leetcode</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimateLeftToright>
  );
};

export default About;
