import React from "react";
import PropTypes from "prop-types";


function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="border-2 border-stone-200 rounded-md overflow-hidden w-64">
        <div className="flex flex-col items-center justify-center">
        <img
          src={imgUrl}
          alt="project"
          className="w-full h-36 md:h-80 object-cover cursor-pointer"
        />
        <div className="w-full p-4 text-center">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
          <p className="flex flex-wrap gap-2 justify-center items-center text-xs md:text-sm">
            {stack.map((item, index) => (
              <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-grey rounded-md">
                {item}
              </span>
            ))}
          </p>
          <a
            href={link}
            className="text-blue-500 hover:text-blue-700 inline-block mt-2"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  };

export default PortfolioItem;
