import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div id="contact-section" className="flex flex-col mx-10 mx-auto">
      <div className="flex justify-center items-center py-3">
        <form
          action="https://getform.io/f/negA33bw"
          method="POST"
          className="flex flex-col w-full sm:w-4/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-300"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="mb-2 p-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-300"
          />
          <button
            className="btn bg-base-content text-center inline-block px-8 py-3 w-max text-base text-white font-medium rounded-md bg-gradient-to-r drop-shadow-md"
            style={{ margin: "0 auto" }}
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
