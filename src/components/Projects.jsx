import React from "react";
import "./Projects.css"; // Import the custom CSS file
// Import assets directly
import especeImg from "../assets/espece.png";
import vistoImg from "../assets/visto.png";
import smokingImg from "../assets/smoking.png";
import cookiesImg from "../assets/cookies.png";
import oceanImg from "../assets/ocean.png";
import continuousImg from "../assets/continuous.png";
import githubIcon from "../assets/github.png";
import webIcon from "../assets/web.png";

export default function Projects() {
  const projects = [
    {
      name: "Rare Species",
      description: "Discover and protect rare species and locations.",
      imgSrc: especeImg,
      iconSrc: githubIcon,
      githubLink: "https://github.com/MoatezTilouche",
    },
    {
      name: "Leave Management",
      description: "Manage employee leave requests with ease.",
      imgSrc: vistoImg,
      iconSrc: githubIcon,
      githubLink: "https://github.com/MoatezTilouche/leave-management-App-Web",
    },
    {
      name: "Breath Air App",
      description: "Build an application to help users stop smoking.",
      imgSrc: smokingImg,
      iconSrc: githubIcon,
      githubLink: "https://github.com/MoatezTilouche",
    },
    {
      name: "Cookies Cauchemar",
      description: "Build a website that makes the user nervous handling cookies.",
      imgSrc: cookiesImg,
      iconSrc: webIcon,
      websiteLink: "https://cookies-challenge.vercel.app/simpage",
    },
    {
      name: "Race For Water",
      description: "Explore the similarities between humans and the ocean.",
      imgSrc: oceanImg,
      iconSrc: webIcon,
      websiteLink: "https://night-challenge.vercel.app/home",
    },
    {
      name: "Continuous Net",
      description: "Efficiently manage and organize car data.",
      imgSrc: continuousImg,
      iconSrc: githubIcon,
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
