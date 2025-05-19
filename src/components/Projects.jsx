import "./../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern personal portfolio built with React, Vite, and Framer Motion. Features responsive design, smooth animations, and dark mode.",
      tags: ["React", "Vite", "CSS3"],
      demoUrl: "#",
      codeUrl: "#",
      icon: "🖥️"
    },
    {
      title: "E-commerce UI",
      description: "A clean product listing page for an online shop with cart functionality, product filtering, and responsive layout.",
      tags: ["React", "Tailwind CSS", "Context API"],
      demoUrl: "#",
      codeUrl: "#",
      icon: "🛒"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks with drag-and-drop functionality, due dates, and project categories.",
      tags: ["React", "TypeScript", "Firebase"],
      demoUrl: "#",
      codeUrl: "#",
      icon: "✅"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
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
                <div className="project-links">
                  <a href={project.demoUrl} className="project-link primary">
                    Live Demo
                  </a>
                  <a href={project.codeUrl} className="project-link secondary">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;