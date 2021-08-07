import { useState } from "react";
import Particles from "react-tsparticles";
import Bckgrnd from "../img/background.jpg"


export default () => {
  return (


    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 30,
        fullScreen: { enable: false },
        pauseOnBlur: true,
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 6,
            },
            repulse: {
              distance: 100,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 600,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        // detectRetina: true,
      }}
    />
  )
};
