import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const HeroParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: false },
      fpsLimit: 45,
      detectRetina: true,
      particles: {
        number: {
          value: 80,
          density: { enable: true, width: 900, height: 600 },
        },
        color: {
          value: ["#60A5FA", "#A78BFA"],
        },
        links: {
          enable: true,
          distance: 95,
          color: "#93C5FD",
          opacity: 0.06,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.3,
          outModes: { default: "bounce" },
        },
        opacity: { value: 0.2 },
        size: { value: { min: 0.7, max: 1.8 } },
      },
      interactivity: {
        events: {
          onHover: { enable: false, mode: "grab" },
          resize: { enable: true },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    [],
  );

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

export default HeroParticles;
