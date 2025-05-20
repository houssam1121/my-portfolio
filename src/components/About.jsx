import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFlutter,
  SiDart,
  SiPython,
} from "react-icons/si";

import { MdPhoneIphone } from "react-icons/md";
import profilePic from "../assets/profie.jpg";  // <-- Correct import here
import "./../styles/About.css";

function About() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const skills = [
    { name: "React", Icon: FaReact },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "HTML", Icon: FaHtml5 },
    { name: "CSS", Icon: FaCss3Alt },
    { name: "Git", Icon: FaGitAlt },
    { name: "Flutter", Icon: SiFlutter },
    { name: "Dart", Icon: SiDart },
    { name: "Python", Icon: SiPython },
    { name: "Java", Icon: FaJava },
    { name: "Responsive Design", Icon: MdPhoneIphone },
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
                value_area: 800,
              },
            },
            color: {
              value: "#4f46e5",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.3,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
     <div className="container">
  <div className="about-content">
    <div className="about-image">
      <img src={profilePic} alt="Profile" />
    </div>

    <div className="about-text">
      <h2>About Me</h2>
      <p>
        Focused and results-driven Software Developer specializing in cross-platform mobile app
        development with <b style={{ color: "#2563eb" }}>Flutter</b>. Experienced in building responsive,
        scalable UIs and applying modern UI/UX principles. Proficient in web technologies like HTML,
        CSS, JavaScript, and Python, with hands-on experience from real-world projects. Passionate about
        continuous learning, open-source, and crafting intuitive, high-quality digital solutions.
      </p>

      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-icon">
              <skill.Icon size={24} color="#4f46e5" />
            </span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

export default About;
