import React from "react";
import { projectImages, icons } from "@/assets/projectImages";
import "./Projects.css"; // Import the custom CSS file

export default function Projects() {
  const projects = [
    {
      name: "Rare Species",
      description: "Discover and protect rare species and locations.",
      imgSrc: projectImages.espece,
      iconSrc: icons.github,
      githubLink: "https://github.com/MoatezTilouche",
    },
    {
      name: "Leave Management",
      description: "Manage employee leave requests with ease.",
      imgSrc: projectImages.visto,
      iconSrc: icons.github,
      githubLink: "https://github.com/MoatezTilouche/leave-management-App-Web",
    },
    {
      name: "Breath Air App",
      description: "Build an application to help user stop smoking.",
      imgSrc: projectImages.smoking,
      iconSrc: icons.github,
      githubLink: "https://github.com/MoatezTilouche",
    },
    {
      name: "Cookies Cauchemar",
      description: "Build a website that makes the user nervous handling the cookies.",
      imgSrc: projectImages.cookies,
      iconSrc: icons.web,
      websiteLink: "https://cookies-challenge.vercel.app/simpage",
    },
    {
      name: "Race For Water",
      description: "Explore the similarities between humans and ocean.",
      imgSrc: projectImages.ocean,
      iconSrc: icons.web,
      websiteLink: "https://night-challenge.vercel.app/home",
    },
    {
      name: "Continuous Net",
      description: "Efficiently manage and organize car data.",
      imgSrc: projectImages.continuous,
      iconSrc: icons.github,
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
