import { useState } from "react";
import Particles from "react-tsparticles";
import Bckgrnd from "../img/background.jpg"


export default () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 10,
        fullScreen: { enable: false },
        pauseOnBlur: true,
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 300,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
};
