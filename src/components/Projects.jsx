import React from "react";
import "./Projects.css"; // Import the custom CSS file

export default function Projects() {
  const projects = [
    {
      name: "Rare Species",
      description: "Discover and protect rare species and locations.",
      imgSrc: "src/assets/espece.png",
      iconSrc: "src/assets/github.png", // Path to your custom GitHub icon
      githubLink: "https://github.com/MoatezTilouche",
    },
    {
      name: "Leave Management",
      description: "Manage employee leave requests with ease.",
      imgSrc: "src/assets/visto.png",
      iconSrc: "src/assets/github.png",
      githubLink: "https://github.com/MoatezTilouche/leave-management-App-Web",
    },
    {
      name: "Breath Air App",
      description: "Build an application to help user stop smoking.",
      imgSrc: "src/assets/smoking.png",
      iconSrc: "src/assets/github.png",
      githubLink: "https://github.com/MoatezTilouche",
    },
    {
      name: "Cookies Cauchemar",
      description: "Build a website that makes the user nervous handling the cookies.",
      imgSrc: "src/assets/cookies.png",
      iconSrc: "src/assets/web.png", // Path to your custom Website icon
      websiteLink: "https://cookies-challenge.vercel.app/simpage",
    },
    {
      name: "Race For Water",
      description: "Explore the similarities between humans and ocean.",
      imgSrc: "src/assets/ocean.png",
      iconSrc: "src/assets/web.png",
      websiteLink: "https://night-challenge.vercel.app/home",
    },
    {
      name: "Continuous Net",
      description: "Efficiently manage and organize car data.",
      imgSrc: "src/assets/continuous.png",
      iconSrc: "src/assets/github.png",
      githubLink: "https://github.com/MoatezTilouche",
    },
  ];

  return (
    <div className="projects-container">
      <br />
      <br />
      <br />
      <h1 className="title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ "--delay": `${index * 0.2}s` }} // Add staggered delay
          >
            <img
              src={project.imgSrc}
              alt={project.name}
              className="project-image"
            />
            <div className="overlay">
              <h5 className="project-title">{project.name}</h5>
              <p className="project-description">{project.description}</p>
              <a
                href={project.websiteLink || project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon"
              >
                <img
                  src={project.iconSrc}
                  alt="icon"
                  className="icon-image"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
