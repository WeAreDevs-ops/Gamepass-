import React from 'react';

const GamepassList = ({ accounts }) => {
  return (
    <div>
      {accounts.map(acc => (
        <div key={acc.id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "8px" }}>
          <h3>{acc.username}</h3>
          <h4>Owned Gamepasses:</h4>
          <ul>
            {acc.gamepasses.map((game, index) => (
              <li key={index} style={{ marginBottom: "5px", padding: "5px 10px", backgroundColor: "#243c6b", color: "#fff", borderRadius: "8px", display: "inline-block" }}>
                {game}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GamepassList;
