import React from "react";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="absolute top-8 right-8">
      <button
        className="btn btn-outline text-white hover:bg-neutral hover:text-white transition duration-200"
        onClick={scrollToContact}
      >
        Say Hello
      </button>
    </header>
  );
};

export default Header;
