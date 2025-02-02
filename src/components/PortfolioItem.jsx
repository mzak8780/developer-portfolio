import React from "react";
import PropTypes from "prop-types";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="relative rounded-md overflow-hidden w-78 border border-gray-300 transition-shadow duration-300 hover:shadow-lg">
      <div className="relative group">
        <img
          src={imgUrl}
          alt="project"
          className="w-full h-36 md:h-60 object-cover cursor-pointer"
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap justify-center gap-2">
            {stack.map((item, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs md:text-sm font-semibold text-white bg-gray-700 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full p-4 text-center">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
      </div>
      <div className="flex justify-center mb-4">
        {link ? (
          <a href={link} className="btn self-center">
            Learn More
          </a>
        ) : (
          <button className="btn btn-disabled self-center">Coming soon</button>
        )}
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

export default PortfolioItem;
