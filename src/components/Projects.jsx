import "./../styles/Projects.css";
import { FaMobileAlt, FaBusAlt, FaFlipboard, FaLaptopCode } from "react-icons/fa";


function Projects() {
  const projects = [
    {
      title: "Note-Taking App",
      description: "A mobile app that allows users to create, edit, and delete notes. Each user has their own notes, securely stored in Firebase Firestore.",
      tags: ["Flutter", "Firebase", "Provider"],
      demoUrl: "#",
      codeUrl: "#",
      icon: <FaMobileAlt size={48} />,
      gradient: "linear-gradient(135deg, #4f46e5, #7c3aed)"
    },
    {
      title: "Bus Ticket Booking App",
      description: "A mobile app that allows users to book bus tickets, view available routes, and manage their bookings.",
      tags: ["Flutter", "Firebase", "Provider"],
      demoUrl: "#",
      codeUrl: "#",
      icon: <FaBusAlt size={48} />,
      gradient: "linear-gradient(135deg, #10b981, #059669)"
    },
    {
      title: "Responsive Dashboard App UI",
      description: "A fully responsive and adaptive user interface for a Dashboard app, designed to seamlessly adjust layouts across mobile, tablet, and desktop devices.",
      tags: ["Flutter", "Dart",],
      demoUrl: "#",
      codeUrl: "#",
      icon: <FaFlipboard size={48} />,
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React showcasing my projects and skills.",
      tags: ["React", "CSS", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#",
      icon: <FaLaptopCode size={48} />,
      gradient: "linear-gradient(135deg, #ec4899, #db2777)"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div 
                className="project-image" 
                style={{ background: project.gradient }}
              >
                {project.icon}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                {/* <div className="project-links">
                  <a href={project.demoUrl} className="project-link primary">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={project.codeUrl} className="project-link secondary">
                    <DiGithubBadge size={20} /> View Code
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;