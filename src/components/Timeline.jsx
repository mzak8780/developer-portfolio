import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-10">
      <div className="w-full md:w-2/12 flex justify-center items-center mb-10 md:mb-0">
        <img
          src="public/assets/graphic.jpg"
          alt="WFH Illustration"
          className="w-1/3 md:w-full"
        />
      </div>
      <div className="w-full md:w-6/12 sm:w-6/12 md:ml-10">
        <Title>Timeline</Title>
        {timeline.map((project) => (
          <TimelineItem
            key={project.title}
            year={project.year}
            title={project.title}
            company={project.company}
            duration={project.duration}
            details={project.details}
          />
        ))}
      </div>
      <div className="w-full md:w-2/12"></div>
    </div>
  );
}

export default Timeline;
