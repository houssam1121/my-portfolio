import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function HeroSection() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#4f46e5"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.5,
              random: true
            },
            size: {
              value: 3,
              random: true
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
      <div className="container">
        <h2>Hello, I'm Alex</h2>
        <p>A passionate Frontend Developer creating beautiful, responsive web experiences.</p>
        <a href="#projects" className="btn">View Projects</a>
      </div>
    </section>
  );
}
export default HeroSection;