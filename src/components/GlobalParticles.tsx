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
          value: 60,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: {
          value: "#4F8CFF",
        },
        links: {
          enable: true,
          distance: 130,
          color: "#4F8CFF",
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        opacity: {
          value: 0.2,
          animation: { enable: true, speed: 0.4, sync: false },
        },
        size: {
          value: { min: 0.7, max: 1.7 },
        },
        shadow: {
          color: "#4F8CFF",
          blur: 8,
          enable: true,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
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
