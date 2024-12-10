import React from 'react';

export default function Footer() {
  const styles = {
    footer: {
      position: 'relative',
      width: '100%',
      height: '150px',
      backgroundColor: '#0A0025',
      clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0% 100%)', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 50px',
      color: 'white', 
      fontSize: '16px',
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      color: 'white',
      fontSize: '24px',
      marginLeft: '20px',
    },
  };

  return (
    <div style={styles.footer}>
      <div>© 2024 tilouche2003.com</div>

      <div style={styles.iconContainer}>
        <a href="https://github.com/MoatezTilouche" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" style={styles.icon}></i>
        </a>
        <a href="https://www.linkedin.com/in/moatez-tilouch-a58a96284/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" style={styles.icon}></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={styles.icon}></i>
        </a>
      </div>
    </div>
  );
}
