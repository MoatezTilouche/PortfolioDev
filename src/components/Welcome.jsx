import React, { useState, useEffect } from 'react';
import photoMe from '../assets/photome.jpeg'; // Correctly import the image

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

  const styles = {
    container: {
      backgroundColor: '#0A0025',
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 5%',
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      boxSizing: 'border-box',
    },
    textContainer: {
      color: 'white',
      maxWidth: '600px',
      opacity: showText ? 1 : 0,
      transform: showText ? 'translateX(0)' : 'translateX(-100px)',
      transition: 'opacity 2s ease-in-out, transform 2s ease-in-out',
      padding: '20px',
      flex: '1 1 50%', // Takes up 50% of the width
    },
    title: {
      fontSize: window.innerWidth >= 1024 ? '4em' : '3em', // Dynamically adjust font size
      fontWeight: '300',
      marginBottom: '20px',
      lineHeight: '1.1',
    },
    subtitle: {
      fontSize: window.innerWidth >= 1024 ? '1.5em' : '1.2em', // Dynamically adjust font size
      fontWeight: '400',
      lineHeight: '1.6',
    },
    imageContainer: {
      flex: '1 1 50%', // Takes up 50% of the width
      display: 'flex',
      justifyContent: 'center', // Centers the image horizontally
      alignItems: 'center', // Centers the image vertically
    },
    image: {
      width: '80%', // Adjust size relative to screen
      maxWidth: '450px', // Cap maximum width
      height: 'auto', // Maintain aspect ratio
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid white',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      opacity: showImage ? 1 : 0, // Fade-in effect
      transform: showImage ? 'scale(1)' : 'scale(0.9)', // Slight zoom-in effect
      transition: 'opacity 2s ease-in-out, transform 2s ease-in-out',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <div style={styles.title}>
          <br />
          Welcome.
        </div>
        <div style={styles.subtitle}>
          My name is Moatez Tilouche, a full-stack developer with extensive experience in both front-end and back-end development. I have worked on a diverse range of projects, from conservation-focused applications to enterprise-grade management systems. My focus remains on delivering clean, well-structured code that ensures optimal performance and a seamless user experience.
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={photoMe} // Use the imported image
          alt="welcome"
          style={styles.image}
        />
      </div>
    </div>
  );
}

export default Welcome;
