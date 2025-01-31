import React from "react";
import Title from "./Title";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 md:py-2 w-full">
      <div className="w-full md:w-8/12 sm:w-10/12 px-4 md:px-0 text-center">
        <form
          action="https://getform.io/f/negA33bw"
          method="POST"
          className="flex flex-col w-full"
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
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
}

export default Contact;
