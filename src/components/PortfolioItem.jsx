import React from "react";
import PropTypes from "prop-types";
import { Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";
function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="card border border-grey-500 duration-300 shadow-sm hover:shadow-lg flex flex-col w-96">
      <figure>
        <img
          src={imgUrl}
          alt="project"
          className="w-full h-36 md:h-60 object-cover transition-transform hover:scale-105"
        />
      </figure>
      <div className="card-body flex flex-col">
        <h3 className="card-title text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs text-black bg-base-300 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="card-actions mt-auto">
          {link ? (
            <a
              href={link}
              className="btn bg-base-content self-start text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} className="mr-2" />
              Learn More
            </a>
          ) : (
            <button className="btn btn-disabled self-start">
              <Code className="mr-1 h-4 w-4" /> Coming soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
};

export default Portfoliotem;
