import React from "react";
import "animate.css";
import Header from "./Header";
import Starfield from "./Starfield";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Intro() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToProjects = () => {
        const contactSection = document.getElementById("project-section");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative flex text-white items-center justify-center flex-col md:flex-row text-left py-24 md:py-72 w-full md:h-screen px-4 z-10 border border-slate-700">
            <Header />
            <Starfield id="intro-starfield" />
            <div className="flex-1 mb-8 lg:mr-16 mt-10 lg:mt-0 z-10 max-w-2xl">
                <h1 className="font-space-grotesk text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
                    Hey! I'm{" "}
                    <span className="bg-gradient-to-r from-emerald-700 to-emerald-200 bg-clip-text text-transparent">
                        Maks
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl mb-6 text-slate-200 font-medium">
                    I build digital experiences that matter.
                </p>

                <p className="text-lg lg:text-xl mb-8 text-slate-200 leading-relaxed max-w-xl">
                    Full-stack software engineer passionate about creating web
                    applications that solve real-world problems with clean code
                    and thoughtful design.
                </p>
                {/* Responsive button/social layout */}
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Buttons: View My Work & Get In Touch */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={scrollToProjects}
                            className="primary-button"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300 glow-green"
                        >
                            Get In Touch
                        </button>
                    </div>
                    {/* Socials: GitHub & LinkedIn */}
                    <div className="flex items-center gap-2 lg:mt-0">
                        <a
                            href="https://github.com/mzak8780"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <button className="primary-button">
                                <FiGithub className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/maks-zak/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <button className="primary-button">
                                <FiLinkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center lg:justify-end z-10">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <img
                        src="/assets/portrait-removebg-preview.png"
                        alt="Maks - Full Stack Engineer"
                        className="relative rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover object-top shadow-2xl float-animation border-2"
                    />
                </div>
            </div>
            <div className="moon-cutout-top absolute top-3/4 -left-3/4 rounded-t-full z-0">
                <div className="crater crater-2"></div>
                <div className="crater crater-1"></div>
                <div className="crater crater-3"></div>
            </div>
        </div>
    );
}

export default Intro;
