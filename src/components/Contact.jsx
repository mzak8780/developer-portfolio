import React from "react";
import Title from "./Title";
import Footer from "./Footer";
import Starfield from "./Starfield";

function Contact() {
    return (
        <div className="relative flex flex-col items-center justify-between min-h-screen py-10 md:py-2 w-full">
            <div className="absolute bottom-1/4 -left-3/4 w-[250vw] h-[250vh] bg-white rounded-b-full z-10">
                <div className="crater crater-4"></div>
                <div className="crater crater-5"></div>
            </div>
            <div className="w-full md:w-8/12 sm:w-10/12 px-4 md:px-0 text-center z-10 pt-20">
                <form
                    action="https://getform.io/f/negA33bw"
                    method="POST"
                    className="flex flex-col w-full"
                >
                    <Title id="contact-title">Contact</Title>
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
                        className="primary-button"
                        style={{ margin: "0 auto" }}
                    >
                        Work With Me
                    </button>
                </form>
            </div>
            <Starfield id="footer-starfield" />
            <Footer className="w-full" />
        </div>
    );
}

export default Contact;
