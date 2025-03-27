import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5 text-center z-10">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/maks-zak/"
          target="_blank"
          rel="noreferrer noopener"
          className="opacity-50 text-white hover:opacity-100"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/mzak8780"
          target="_blank"
          rel="noreferrer noopener"
          className="opacity-50 text-white hover:opacity-100"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-sm mt-2 opacity-50 text-white">
        &copy; {new Date().getFullYear()} Maksymilian Zak. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
