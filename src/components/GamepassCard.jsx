import React from 'react';

export default function GamepassCard({ pass }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '15px',
      maxWidth: '400px'
    }}>
      <h4>{pass.name}</h4>
      <img src={pass.icon} alt={pass.name} style={{ width: '150px', borderRadius: '10px' }} />
      <p><strong>Game:</strong> {pass.gameName}</p>
      <p><strong>Price:</strong> {pass.price} Robux</p>
      <a href={`https://www.roblox.com/game-pass/${pass.id}`} target="_blank" rel="noreferrer">
        View on Roblox
      </a>
    </div>
  );
}
