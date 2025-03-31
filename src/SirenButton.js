import React, { useRef } from 'react';

const SirenButton = () => {
  const audioRef = useRef(null);

  const playSiren = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={playSiren}
        style={{
          fontSize: '24px',
          padding: '10px 20px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        🚨 Syren
      </button>
      <audio ref={audioRef} src="/siren.mp3" />
    </div>
  );
};

export default SirenButton;
