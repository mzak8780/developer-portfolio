import React from "react";
import PropTypes from "prop-types";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-3xl mb-5 font-inter font-bold tracking-tight"
    >
      {children}
    </h1>
  );
}

Title.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Title;
