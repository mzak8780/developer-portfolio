import React from "react";
import Header from "./Header";

function Intro() {
  return (
    <div className="relative flex bg-base-content text-white items-center justify-center flex-col md:flex-row text-center py-60">
      <div className="absolute top-0 right-0 px-4 md:px-8 py-2 md:py-4">
        <Header />
      </div>
      <div>
        <h1 className="text-4xl md:text-7xl pb-1 md:mb-3 font-bold drop-shadow-lg">
          Hey! I'm Maks
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium italic">
          Backend Engineer, Software Developer and Tech Enthusiast
        </p>
        <p className="flex md:text-xl mb-3 font-medium max-w-xl">
          With over 3 years of experience in backend development, I specialize
          in building robust APIs and scalable systems that power seamless user
          experiences.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="public/assets/wave.jpg"
          alt="Circular cropped image"
          className="rounded-full w-72 h-72 md:w-72 md:h-72 object-cover object-top"
        />
      </div>
    </div>
  );
}

export default Intro;
