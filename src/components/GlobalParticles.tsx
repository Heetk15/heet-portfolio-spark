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
          value: 30,
          density: { enable: true, width: 1920, height: 1080 },
        },
        color: {
          value: ["#22D3EE", "#4F8CFF", "#E2E8F0"],
        },
        shape: {
          type: "circle" as const,
        },
        links: {
          enable: true,
          distance: 120,
          color: "#22D3EE",
          opacity: 0.06,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.25,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
          animation: { enable: true, speed: 0.3, sync: false },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        shadow: {
          color: "#22D3EE",
          blur: 6,
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
