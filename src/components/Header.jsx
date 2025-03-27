import React from "react";

import { Github, Linkedin } from "lucide-react";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const projectSection = document.getElementById("project-section");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById("timeline-section");
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="absolute flex items-center justify-center top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container w-full flex h-16 items-center justify-between">
        <div className="font-bold">
          <a href="/">
            <span className="text-xl">Maks Zak</span>
          </a>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <span
            className="text-white cursor-pointer"
            onClick={scrollToProjects}
          >
            Recent Projects
          </span>
          <span
            className="text-white cursor-pointer"
            onClick={scrollToTimeline}
          >
            Timeline
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/mzak8780"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="btn btn-outline text-white hover:text-white transition duration-200">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/maks-zak/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="btn btn-outline text-white hover:text-white transition duration-200">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </button>
          </a>
          <button
            className="btn btn-outline text-white hover:text-white transition duration-200"
            onClick={scrollToContact}
          >
            Say Hello
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
