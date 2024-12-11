import React, { useState, useEffect } from "react";
import photoMe from "../assets/photome.jpeg"; // Correctly import the image
import "./Welcome.css"; // Import CSS for styling

function Welcome() {
  const [showText, setShowText] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowText(true);
    const timer = setTimeout(() => {
      setShowImage(true); // Delay the image fade-in
    }, 1000); // Adjust the delay as needed (1 second in this case)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-container">
      <div className={`text-container ${showText ? "show" : ""}`}>
        <div className="title">
          <br />
          Welcome.
        </div>
        <div className="subtitle">
          My name is Moatez Tilouche, a full-stack developer with extensive
          experience in both front-end and back-end development. I have worked
          on a diverse range of projects, from conservation-focused
          applications to enterprise-grade management systems. My focus remains
          on delivering clean, well-structured code that ensures optimal
          performance and a seamless user experience.
        </div>
      </div>
      <div className={`image-container ${showImage ? "show" : ""}`}>
        <img
          src={photoMe} // Use the imported image
          alt="welcome"
          className="welcome-image"
        />
      </div>
    </div>
  );
}

export default Welcome;
