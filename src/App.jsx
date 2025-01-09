import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import "./styles/App.css"

function App() {

  return (
      <div className="App">
        <div className="gradient_bg">
          <Intro/>
          <Portfolio/>
        </div>
        <Timeline/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App
