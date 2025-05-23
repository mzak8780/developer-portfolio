import React from "react";
import "animate.css";
import Header from "./Header";
import Starfield from "./Starfield";

function Intro() {
  return (
    <div className="relative flex text-white items-center justify-center flex-col md:flex-row text-left py-32 md:py-72 w-full md:h-screen px-4 z-10">
      <Header />
      <Starfield id="intro-starfield" />
      <div className="mb-16 md:mb-0 md:mr-16 px-4 md:px-0 mt-10 md:mt-0 z-10">
        <h1 className="text-4xl md:text-7xl pb-1 md:mb-3 font-bold drop-shadow-lg text-red animate__animated animate__fadeIn">
          Hey! I'm Maks
        </h1>
        <p className="text-base md:text-2xl mb-3 font-medium">
          I like building things.
        </p>
        <p className="flex md:text-xl mb-3 font-medium max-w-xl">
          Full-stack developer passionate about building web applications that
          solve real-world problems.
        </p>
      </div>
      <div className="flex justify-center px-4 md:px-0">
        <img
          src="assets/wave.jpg"
          alt="Rounded square cropped image"
          className="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover object-top shadow-lg z-10"
        />
      </div>
      <div className="moon-cutout-top absolute top-3/4 -left-3/4 w-[250vw] h-[250vh] bg-red rounded-t-full z-0">
        <div className="crater crater-2"></div>
        <div className="crater crater-1"></div>
        <div className="crater crater-3"></div>
      </div>
    </div>
  );
}

export default Intro;
