import React from "react";
import PropTypes from "prop-types";

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5"
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
