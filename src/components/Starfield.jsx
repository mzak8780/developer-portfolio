import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Starfield = ({ id }) => {
  useEffect(() => {
    const outerspace = document.querySelector(`#${id}`);
    const mainContext = outerspace.getContext("2d");

    const scaleFactor = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      outerspace.width = window.innerWidth * scaleFactor;
      outerspace.height = window.innerHeight * scaleFactor;
      mainContext.scale(scaleFactor, scaleFactor);
    };

    resizeCanvas();

    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    let centerX = canvasWidth * 0.5;
    let centerY = canvasHeight * 0.5;

    const numberOfStars = 500;

    const stars = [];

    const frames_per_second = 144;

    const interval = Math.floor(1000 / frames_per_second);
    const startTime = performance.now();
    let previousTime = startTime;

    let currentTime = 0;
    let deltaTime = 0;

    class Star {
      constructor() {
        this.x = getRandomInt(-centerX, centerX);
        this.y = getRandomInt(-centerY, centerY);
        this.counter = getRandomInt(1, canvasWidth);

        this.radiusMax = 1 + Math.random() * 10;
        this.speed = getRandomInt(1, 5) / 30;

        this.context = mainContext;
      }

      drawStar() {
        this.counter -= this.speed;

        if (this.counter < 1) {
          this.counter = canvasWidth;
          this.x = getRandomInt(-centerX, centerX);
          this.y = getRandomInt(-centerY, centerY);

          this.radiusMax = getRandomInt(1, 10);
          this.speed = getRandomInt(1, 3) / 30;
        }

        const xRatio = this.x / this.counter;
        const yRatio = this.y / this.counter;

        const starX = remap(xRatio, 0, 1, 0, canvasWidth);
        const starY = remap(yRatio, 0, 1, 0, canvasHeight);

        this.radius = remap(this.counter, 0, canvasWidth, this.radiusMax, 0);

        // Ensure radius is not negative
        if (this.radius < 0) {
          this.radius = 0;
        }

        mainContext.beginPath();
        mainContext.arc(starX, starY, this.radius, 0, Math.PI * 2, false);
        mainContext.closePath();

        mainContext.fillStyle = "#FFF";
        mainContext.fill();
      }
    }

    function setup() {
      for (let i = 0; i < numberOfStars; i++) {
        const star = new Star();
        stars.push(star);
      }
    }
    setup();

    function draw(timestamp) {
      currentTime = timestamp;
      deltaTime = currentTime - previousTime;

      if (deltaTime > interval) {
        previousTime = currentTime - (deltaTime % interval);

        mainContext.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
        mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
        mainContext.fillStyle = "#111";
        mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

        mainContext.translate(centerX, centerY);

        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          star.drawStar();
        }

        mainContext.translate(-centerX, -centerY);
      }

      requestAnimationFrame(draw);
    }
    draw();

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function remap(value, from1, to1, from2, to2) {
      return from2 + ((value - from1) * (to2 - from2)) / (to1 - from1);
    }

    window.addEventListener("resize", () => {
      resizeCanvas();
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      centerX = canvasWidth * 0.5;
      centerY = canvasHeight * 0.5;
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [id]);

  return (
    <canvas
      id={id}
      className="absolute top-0 left-0 w-full h-full z-0"
    ></canvas>
  );
};
Starfield.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Starfield;
