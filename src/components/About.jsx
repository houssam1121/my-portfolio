import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./../styles/About.css";

function About() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "📜" },
    { name: "HTML5", icon: "🖥️" },
    { name: "CSS3", icon: "🎨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Git", icon: "🐙" },
    { name: "Responsive Design", icon: "📱" },
    { name: "UI/UX", icon: "✨" },
  ];

  return (
    <section id="about" className="about">
      <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 30,
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
              value: 0.3,
              random: true
            },
            size: {
              value: 3,
              random: true
            },
            move: {
              enable: true,
              speed: 1,
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
        <h2>About Me</h2>
        <p>
          I'm a frontend developer with 3+ years of experience specializing in React and JavaScript. 
          I create user-friendly, modern websites with attention to performance, accessibility, 
          and clean code principles.
        </p>
        
        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;