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
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 400,
            },
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
        detectRetina: false,
      }}
    />
  )
};
