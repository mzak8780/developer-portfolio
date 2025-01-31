import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import "./styles/App.css";

function App() {
  return (
    <div className="App" data-theme="cmyk">
      <div className="scroll-container">
        <section>
          <Intro />
        </section>
        <section>
          <Portfolio />
        </section>
        <section>
          <Timeline />
        </section>
        <section id="contact-section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
