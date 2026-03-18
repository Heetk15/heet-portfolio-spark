import { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const GlobalParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: true, zIndex: 0 },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        color: {
          value: ["#33f0c3", "#4f9cff", "#7c8cff"],
        },
        links: {
          enable: true,
          distance: 130,
          color: ["#4f9cff", "#7c8cff"],
          opacity: 0.12,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.45,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        opacity: {
          value: { min: 0.5, max: 0.95 },
          animation: {
            enable: true,
            speed: 0.6,
            sync: false,
          },
        },
        size: {
          value: { min: 0.9, max: 2.2 },
        },
        shadow: {
          color: "#4f9cff",
          blur: 10,
          enable: true,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false, mode: "grab" as const },
          onClick: { enable: false, mode: "push" as const },
          resize: { enable: true },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [],
  );

  if (!init) return null;

  return (
    <Particles
      id="global-particles"
      options={options}
      className="global-particles-layer"
      aria-hidden="true"
    />
  );
};

export default GlobalParticles;
