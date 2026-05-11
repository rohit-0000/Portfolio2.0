import React, { useState, useEffect, useRef } from "react";
import AnimatedSection from "./Animation/AnimatedSectionScale";
import { allProjectDetail } from "../Data/project";
import leftIcon from "../assets/Icons/LeftIcon.svg"

const project = () => {
  const [openProject, setOpenProject] = useState("");
  const [projectAnimation, setProjectAnimation] = useState(false);
  const [clickLocation, setClickLocation] = useState(null);
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);


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

  const scrollLeftFn = () => {
    // scroll by one viewport (container) width for a smooth snap effect
    scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
  };

  const scrollRightFn = () => {
    scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
    };

    handleScroll(); // run once
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <AnimateLeftToright>
    <div
      className="max-w-screen min-h-fit text-white flex flex-col  items-center pb-10 pt-15 bg-neutral-950 "
      id="Project"
    >
      <h1 className="text-4xl md:text-5xl mb-15 font-bold text-yellow-300 relative after:absolute after:content-[''] after:h-1.5 after:w-full after:left-0 after:bg-amber-300 md:after:-bottom-5 after:-bottom-3 after:rounded">
        My Projects
      </h1>

      {/* <div className="flex flex-wrap gap-12 justify-center " > */}
      <div className="relative overflow-visible w-full h-fit border-0">
        <div className="absolute h-full flex items-center z-10 left-0 bg-gradient-to-r from-neutral-950 to-transparent pl-3">
          <img src={leftIcon} onClick={scrollLeftFn} className={`md-w-20 w-15 cursor-pointer hover:bg-yellow-50 rounded-full active:scale-80 transition-all duration-400 ${isAtStart && "hidden"}`} />
        </div>

        <div ref={scrollRef} className="flex gap-12 w-full px-5 md:px-20 py-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth z-10">
          {allProjectDetail.map((project, index) => (
            <AnimatedSection key={index}>
              <div
                className={`flex-none snap-center scale-80 md:scale-100 w-80 h-120 md:w-90 flex flex-col rounded-2xl bg-[#e1e1e1] border-b-3 border-t-3 border-yellow-500 items-center transition-all duration-300 delay-150 relative overflow-hidden ${openProject === ""
                  ? "hover:scale-110  transition-all duration-500"
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.git}
                      className="bg-black text-white px-5 py-2 rounded cursor-pointer hover:bg-[#000000d0] transition-all duration-200 active:scale-90"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="absolute text-yellow-300 text-5xl font-bold h-full flex items-center right-0 top-0 bg-gradient-to-l from-neutral-950 to-transparent y-10 ">
          <img src={leftIcon} onClick={scrollRightFn} className={`md-w-20 w-15 cursor-pointer hover:bg-yellow-50 rounded-full rotate-180 active:scale-80 transition-all duration-400 ${isAtEnd && "hidden"}`} />
        </div>
      </div>
      <p className=" max-w-2xl px-5 text-center text-sm text-gray-400/80 md:text-base">
        Click the card to open the Features and Tech stack.
      </p>
      {/* Animated Fullscreen Overlay */}
      {openProject !== "" &&
        (() => {
          const project = allProjectDetail.find((p) => p.name === openProject);
          if (!project) return null;
          return (
            <div
              className={`
              fixed top-0 left-0 w-screen h-screen bg-black/85 backdrop-blur-xl z-1000 flex flex-col items-center justify-center 
              transition-all duration-300 pb-10 md:pb-0 ${projectAnimation ? " opacity-100 " : " opacity-0 rounded-2xl"
                } }
            `}
              style={projectAnimation ? {} : getOverlayStyle()}
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setProjectAnimation(false);
                  setTimeout(() => {
                    setOpenProject("");
                    setClickLocation(null);
                  }, 300);
                }
              }}
            >
              <div className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-neutral-950/95  shadow-2xl shadow-black/50 pb-10 scrollbar" >
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

                  {/* <img
                  src={project.banner}
                  className="w-80 md:w-130 lg:w-200 rounded-2xl "
                /> */}
                  <div className="w-full flex flex-col p- justify-between text-white text-justify h-full ">
                    <div className="flex flex-col gap-5">
                      <h3 className="text-4xl font-bold self-center">
                        {project.name}
                      </h3>
                      <p className="text-xl">{project.description}</p>

                      <h4 className="text-3xl font-bold">Features :</h4>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {Object.entries(project?.features).map(([key, value]) => (
                          <div key={key} className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm">
                            <h5 className="text-lg font-bold text-yellow-300">{key}</h5>
                            <p className="mt-2 text-white/90">{value}</p>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-3xl font-bold">Tech Stack :</h4>

                      <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 justify-center items-center">
                        {Object.entries(project?.techStack).map(([key, value]) => (
                          <div key={key} className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 shadow-md">
                            <img src={value} alt={key} className="h-12 w-12 object-contain" />
                            <span className="text-sm font-semibold text-white/90">{key}</span>
                          </div>
                        ))}
                      </div>
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
            </div>
          );
        })()}
    </div>
    // </AnimateLeftToright>
  );
};

export default project;
