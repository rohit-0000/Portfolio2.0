import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sections = ["Home", "About", "Skill", "Project", "Contact"];
  const [activeSection, setActiveSection] = useState("");
  const sidebarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function clickout_Sidebar(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebar(false);
      }
    }
    document.addEventListener("mousedown", clickout_Sidebar);
    return () => {
      document.removeEventListener("mousedown", clickout_Sidebar);
    };
  }, [sidebar]);

  return (
    <div className="flex justify-between md:justify-around items-center w-full fixed top-0 left-0 bg-black z-20 h-16 lg:px-10">
      <h1 className="text-yellow-400 font-bold text-4xl flex items-center w-full h-full py-2 pl-3 md:pl-10">
        {" "}
        <span className="text-5xl text-white">&lt;</span>Portfolio
        <i className="text-white">/</i>
        <span className="text-5xl text-white">&gt;</span>{" "}
      </h1>
      <button
        className="text-white text-4xl cursor-pointer active:scale-95 md:hidden py-2 pr-3 backdrop-blur-md "
        onClick={() => setSidebar(!sidebar)}
      >
        &#9776;
      </button>
      <nav
        className={`absolute top-16 ${sidebar?"right-0":"-right-full md:right-0"} md:top-0 md:relative flex flex-col md:flex-row text-white text-xl gap-8 md:gap-5 md:pr-10 px-5 bg-[#0000009d] h-screen md:h-auto backdrop-blur-md py-3 transition-normal duration-300`}
        onClick={()=>setSidebar(false)}
        ref={sidebarRef}
      >
        {sections.map((section, i) => {
          return (
            <a
              key={i}
              href={`#${section}`}
              className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 hover:after:w-full after:transition-all after:duration-300 after:bg-amber-300 after:rounded px-10 md:px-2 ${
                activeSection===section ? "after:w-full" : "after:w-0"
              }`}
            >
              {section}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default navbar;
