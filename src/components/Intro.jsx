import React from "react";
import "animate.css";
import Header from "./Header";

function Intro() {
  return (
    <div className="relative flex text-white items-center justify-center flex-col md:flex-row text-left py-32 md:py-72 bg-neutral w-full md:h-screen px-4 z-0">
      <Header />

      <div className="mb-16 md:mb-0 md:mr-16 px-4 md:px-0 mt-10 md:mt-0">
        <h1 className="text-4xl md:text-7xl pb-1 md:mb-3 font-bold drop-shadow-lg text-white animate__animated animate__fadeIn">
          Hey! I'm Maks
        </h1>
        <p className="text-base md:text-2xl mb-3 font-medium">
          I like building things.
        </p>
        <p className="flex md:text-xl mb-3 font-medium max-w-xl">
          I'm a software engineer specializing in creating custom client
          solutions and integrations to enhance business processes and drive
          efficiency.
        </p>
      </div>
      <div className="flex justify-center px-4 md:px-0">
        <img
          src="assets/wave.jpg"
          alt="Rounded square cropped image"
          className="rounded-lg w-60 h-60 md:w-80 md:h-80 object-cover object-top shadow-lg"
        />
      </div>
      <div className="absolute top-3/4 -left-3/4 w-[250vw] h-[250vh] bg-white rounded-t-full -z-10"></div>
    </div>
  );
}

export default Intro;
