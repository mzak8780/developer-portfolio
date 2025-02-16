import React from "react";
import portfolio from "../data/Portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="flex flex-col justify-center items-center my-10 px-4">
      <div>
        <Title id="projects-title">Recent Projects</Title>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center text-align:center">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-16">
          {portfolio.map((project) => (
            <PortfolioItem
              key={project.title}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
