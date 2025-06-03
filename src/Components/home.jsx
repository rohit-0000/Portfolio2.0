import React, { useEffect, useState } from "react";
import RohitImg from "../assets/Rohit.png";
import Resume from "../assets/Rohit-Resume.pdf";
import { motion } from "framer-motion";
const titles = ["Full-Stack Developer", "Programmer"];
const home = () => {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!deleting && charIndex <= currentTitle.length) {
      timeout = setTimeout(() => {
        setText(currentTitle.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentTitle.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 100);
    } else if (!deleting && charIndex > currentTitle.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);
  return (
    <div
      className="min-h-screen max-w-screen flex md:flex-row flex-col-reverse items-center justify-around md:justify-start relative overflow-x-hidden pt-20 rounded"
      id="Home"
    >
      <motion.div 
      initial={{x:-200,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:0.6}}
      className="text-white w-full md:w-fit pl-10 flex flex-col items-center  md:gap-5 lg:pl-30 ">
        <p className="text-3xl md:text-6xl md:w-158 w-full ">
          Hello,I'm
          <br />
          <span className="text-3xl md:text-7xl font-bold text-yellow-400 ">Rohit</span>
        </p>

        <p className=" md:h-auto text-3xl md:text-5xl md:w-158 w-full ">
          I am a <span className="font-bold text-shadow-lg text-shadow-black">{text}</span>
          <span className="animate-pulse text-yellow-400 text-5xl">|</span>
        </p>
        <div className="md:w-158 w-full pt-8 text-black">
          <a
            href={Resume}
            download="Rohit-Resume.pdf"
            className="bg-yellow-500 px-5 py-2.5 rounded-2xl md:text-2xl"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.img src={RohitImg} 
      initial={{x:200,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:0.6}}
      className="lg:self-end md:h-180 md:-right-50  md:absolute lg:-right-10 md:bottom-0 -z-1 h-100 object-cover filter drop-shadow-[0_0_5px] drop-shadow-yellow-300 " />
    </div>
  );
};

export default home;
