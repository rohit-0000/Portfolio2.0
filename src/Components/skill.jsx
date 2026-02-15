import { allSkills } from "../Data/skill";
import AnimatedSection from "./Animation/AnimatedSectionScale";

const skill = () => {

  return (
    <div
      className=" max-w-screen min-h-screen text-white  flex flex-col items-center px-10 md:px-20 lg:px-33 pb-10 pt-15  bg-neutral-950 "
      id="Skill"
    >
      <h1 className="text-4xl md:text-5xl mb-15 font-bold text-yellow-300 relative after:absolute after:content-[''] after:h-1.5 after:w-full after:left-0 after:bg-amber-300 md:after:-bottom-5 after:-bottom-3 after:rounded">
        My Skills
      </h1>
      <div className="flex flex-wrap gap-5 md:gap-10 justify-center ">
        {allSkills.map((sk,key) => {
          return (
            <AnimatedSection key={key}>
              <div className={`p-4 md:p-5 rounded-2xl flex flex-col justify-between items-center gap-2 hover:scale-150 transition-all duration-700 hover:shadow-md `}>
                <img
                  src={sk.logo}
                  className={`object-cover aspect-square w-15 md:w-30 self-center  filter drop-shadow-[0_0_10px] drop-shadow-${sk.color} `}
                />

                <h2 className={`text-md md:text-2xl font-bold font-sans text-${sk.color}`}>
                  {sk.name}
                </h2>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
};

export default skill;
