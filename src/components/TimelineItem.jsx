import React from "react";
import PropTypes from "prop-types";

function TimelineItem({ year, title, company, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-300 p-2 md:p-4">
      <li className="mb-10 md:mb-0 ml-2 md:ml-0">
        <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border border-white" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-neutral rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold">
            {title} - {company}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-500">
            {duration}
          </div>
        </div>
        <p className="my-2 text-base font-normal">{details}</p>
      </li>
    </ol>
  );
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default TimelineItem;
