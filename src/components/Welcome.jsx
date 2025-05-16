import React, { useState, useEffect } from 'react';
import photoMe from '../assets/me.png'; // Updated import path
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLightbulb, faPlug } from '@fortawesome/free-solid-svg-icons';

function Welcome() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);
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
      maxWidth: '700px',
      padding: '20px',
      flex: '1 1 50%',
    },
    animatedText: {
      fontSize: window.innerWidth >= 1024 ? '1.8em' : '1em',
      fontWeight: '400',
      lineHeight: '1.6',
      fontFamily: "'Fira Code', monospace",
    },
    imageContainer: {
      flex: '1 1 50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: window.innerWidth >= 1024 ? '80%' : '90%', // Increased size
      maxWidth: '600px', // Increased max-width
      height: 'auto',
      objectFit: 'cover',
      opacity: showImage ? 1 : 0,
      transform: showImage ? 'scale(1)' : 'scale(0.9)',
      transition: 'opacity 2s ease-in-out, transform 2s ease-in-out',
      aspectRatio: '1/1', // Square aspect ratio for better appearance
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <div style={styles.animatedText} className="typing-text">
          Welcome.<br /><br />
          My name is Moatez Tilouche,<br />
          a full-stack developer with extensive experience in both front-end and back-end development.
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={photoMe}
          alt="welcome"
          style={styles.image}
        />
      </div>
      <div className="quote-container">
        <div className="quote-frame">
          <div className="quote-text">
            "With great power comes great electricity bill"
          </div>
          <div className="quote-icons">
            <FontAwesomeIcon icon={faBolt} className="quote-icon" />
            <FontAwesomeIcon icon={faLightbulb} className="quote-icon" />
            <FontAwesomeIcon icon={faPlug} className="quote-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
