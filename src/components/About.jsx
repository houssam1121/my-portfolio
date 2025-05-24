import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiJavascript, SiFlutter, SiDart, SiPython, SiLaravel, SiPhp, SiCplusplus } from "react-icons/si";
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
    { name: "Laravel", Icon: SiLaravel },
    { name: "PHP", Icon: SiPhp },
    { name: "C++", Icon: SiCplusplus },
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
            <p
             style={{
    textAlign: "justify",
    lineHeight: "1.8",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  }}>
              Motivated Computer Science graduate with strong technical skills in mobile and web application development. I am
              proficient in <b style={{ color: "#2563eb" }}>Flutter</b> for cross-platform mobile apps, React for modern front-end development, and Laravel for back
              end services. Experienced in a variety of programming languages including Python, Java, C++, PHP, and JavaScript.
              Passionate about building efficient, user-friendly applications and continuously learning new technologies to solve
              real-world problems.
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
