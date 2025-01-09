import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
    return (
        <div className="flex flex-col sm:flex-row justify-center my-10">
            <div className="w-full md:w-7/12 sm:w-7/12">
                <Title>Timeline</Title>
                {timeline.map(project => (
                    <TimelineItem
                        key={project.title}
                        year={project.year}
                        title={project.title}
                        duration={project.duration}
                        details={project.details}
                    />
                ))}
            </div>
        </div>
    )
}


export default Timeline;