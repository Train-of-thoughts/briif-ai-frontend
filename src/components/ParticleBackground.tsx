"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({
  className = "",
}: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing tsparticles");
    try {
      await loadSlim(engine);
      console.log("tsparticles initialized successfully");
    } catch (error) {
      console.error("Error initializing tsparticles:", error);
    }
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles loaded:", container);
    },
    [],
  );

  return (
    <Particles
      id="tsparticles"
      className={`absolute inset-0 -z-10 ${className}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#7c3aed",
          },
          links: {
            color: "#a78bfa",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
