import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center my-10 px-4">
            <div className="w-full md:w-1/4 flex justify-center items-center mb-10 md:mb-0 ">
                <img
                    src="assets/graphic.jpg"
                    alt="WFH Illustration"
                    className="w-1/3 md:w-full"
                />
            </div>
            <div className="w-full md:w-3/4">
                <Title id="timeline-title">Timeline</Title>
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
                <div className="flex justify-center mt-10">
                    <a
                        href="MaksZak_25.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-wide bg-base-content text-center inline-block px-8 py-3 w-max text-base text-white font-medium rounded-md bg-gradient-to-r drop-shadow-md"
                    >
                        Download Full Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
