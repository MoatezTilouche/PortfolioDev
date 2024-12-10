import React from 'react';

export default function Curve() {
  const styles = {
    curved: {
      position: 'relative',
      width: '100%',
      height: '50px', // Less height for a more curved appearance
      backgroundColor: '#0A0025',
      clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 80%)', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.curved}>
    </div>
  );
}
