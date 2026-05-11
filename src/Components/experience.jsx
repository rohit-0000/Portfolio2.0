import React, { useEffect, useRef, useState } from "react";
import { allExperiences } from "../Data/experience";
import leftIcon from "../assets/Icons/LeftIcon.svg";
import AnimateLeftToright from "./Animation/AnimateLeftToright";

const experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const scrollRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);



    useEffect(() => {
        if (selectedExperience) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [selectedExperience]);

    useEffect(() => {
        const el = scrollRef.current;

        if (!el) return;

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = el;

            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
        };

        handleScroll();
        el.addEventListener("scroll", handleScroll);

        return () => el.removeEventListener("scroll", handleScroll);
    }, []);

    const openExperienceDetails = (experience) => {
        setSelectedExperience(experience);
        setTimeout(() => setIsOverlayVisible(true), 10);
    };

    const closeExperienceDetails = () => {
        setIsOverlayVisible(false);
        setTimeout(() => setSelectedExperience(null), 250);
    };

    const scrollLeftFn = () => {
        if (isAtStart) return;
        scrollRef.current?.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
    };

    const scrollRightFn = () => {
        if (isAtEnd) return;
        scrollRef.current?.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    };

    return (
        <AnimateLeftToright>
            <div
                className="max-w-screen min-h-fit text-white flex flex-col items-center pb-10 pt-15 bg-neutral-950"
                id="Experience"
            >
                <h1 className="text-4xl md:text-5xl mb-15 font-bold text-yellow-300 relative after:absolute after:content-[''] after:h-1.5 after:w-full after:left-0 after:bg-amber-300 md:after:-bottom-5 after:-bottom-3 after:rounded">
                    My Experience
                </h1>

                <div className="relative w-full h-fit overflow-visible border-0  ">
                    <div className="absolute left-0 top-0 z-20 flex h-full items-center bg-gradient-to-r from-neutral-950 to-transparent pl-2 md:pl-4" onClick={scrollLeftFn}>
                        <img
                            src={leftIcon}
                            alt="Previous experience"
                            className={`w-12 md:w-16 cursor-pointer rounded-full transition-all duration-300 active:scale-90 ${isAtStart ? "hidden" : "hover:bg-yellow-50"}`}
                        />
                    </div>

                    <div ref={scrollRef} className="flex overflow-y-scroll gap-12 w-full no-scrollbar px-5 md:px-20 py-10 no-scrollbar snap-x snap-mandatory scroll-smooth">
                        {allExperiences.map((experience, index) => (
                            <div
                                key={`${experience.company}-${index}`}
                                className="min-w-full snap-center"
                            >
                                <div
                                    className="group relative min-h-[30rem] w-full cursor-pointer overflow-hidden rounded-[2rem] border-l-3 border-r-3 border-yellow-500  transition-transform duration-300 hover:scale-[1.01]"
                                    onClick={() => openExperienceDetails(experience)}
                                >
                                    <img
                                        src={experience.building}
                                        alt={`${experience.company} building`}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

                                    <div className="relative z-10 flex min-h-[30rem] flex-col justify-between p-6 md:p-10 lg:p-12">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-start gap-4">
                                                <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                                                    <img
                                                        src={experience.logo}
                                                        alt={`${experience.company} logo`}
                                                        className="h-14 w-14 object-contain md:h-18 md:w-18"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300/80">
                                                        Experience {index + 1} of {allExperiences.length}
                                                    </p>
                                                    <h3 className="mt-3 text-3xl font-bold md:text-5xl">
                                                        {experience.company}
                                                    </h3>
                                                    <p className="mt-2 text-lg text-white/90 md:text-2xl">
                                                        {experience.position}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-2 text-sm  md:text-base text-yellow-100 text-center">
                                                {experience.duration}
                                                <p>{experience.location}</p>
                                            </div>

                                        </div>

                                        <p className="max-w-3xl text-sm leading-7 text-white/90 md:text-lg">
                                            {experience.description}
                                        </p>

                                        <div className="space-y-4">
                                            <div className="flex flex-wrap gap-2">
                                                {experience.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-sm md:text-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute right-0 top-0 z-20 flex h-full items-center bg-gradient-to-l from-neutral-950 to-transparent pr-2 md:pr-4" onClick={scrollRightFn}>
                        <img
                            src={leftIcon}
                            alt="Next experience"
                            className={`w-12 rotate-180 md:w-16 cursor-pointer rounded-full transition-all duration-300 active:scale-90 ${isAtEnd ? "hidden" : "hover:bg-yellow-50"}`}
                        />
                    </div>
                </div>

                <p className=" max-w-2xl px-5 text-center text-sm text-gray-400/80 md:text-base">
                    Click the card to open the certificate and achievement view.
                </p>

                {selectedExperience && (
                    <div
                        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-xl transition-opacity duration-300  ${isOverlayVisible ? "opacity-100" : "opacity-0"}`}
                        onClick={(event) => {
                            if (event.target === event.currentTarget) {
                                closeExperienceDetails();
                            }
                        }}
                    >
                        <div className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-neutral-950/95 p-5 shadow-2xl shadow-black/50 md:p-8 scrollbar">
                            <button
                                className="absolute right-4 top-4 text-4xl font-bold text-white transition-transform duration-200 hover:scale-110"
                                onClick={closeExperienceDetails}
                                aria-label="Close experience details"
                            >
                                &times;
                            </button>

                            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                                <div className="space-y-5">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300/80">
                                            Certificate
                                        </p>
                                        <div className="mt-3 flex items-center gap-3">
                                            <img
                                                src={selectedExperience.logo}
                                                alt={`${selectedExperience.company} logo`}
                                                className="h-12 w-12 rounded-xl bg-white/10 object-contain p-2"
                                            />
                                            <div>
                                                <h3 className="text-3xl font-bold text-white md:text-4xl">
                                                    {selectedExperience.company}
                                                </h3>
                                                <p className="mt-2 text-white/75">
                                                    {selectedExperience.position} · {selectedExperience.duration}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                                        <img
                                            src={selectedExperience.certificate}
                                            alt={`${selectedExperience.company} certificate`}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300/80">
                                            Achievements
                                        </p>
                                        <h4 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                                            What I worked on
                                        </h4>
                                    </div>

                                    <ul className="space-y-3">
                                        {selectedExperience.achievements.map((achievement) => (
                                            <li
                                                key={achievement}
                                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-white/90 md:text-base"
                                            >
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AnimateLeftToright>
    );
};

export default experience;
