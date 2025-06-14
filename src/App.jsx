import React, { useState } from 'react';
import GamepassList from './components/GamepassList';
import Swal from 'sweetalert2';

export default function App() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      username: "ExampleUser1",
      gamepasses: ["Blox Fruit", "Driving Empire", "Adopt Me"]
    },
    {
      id: 2,
      username: "ExampleUser2",
      gamepasses: ["Pet Simulator X", "Shindo Life"]
    }
  ]);

  const handleAddAccount = () => {
    Swal.fire('Feature to add accounts will be added soon!');
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Roblox Gamepass Collector</h1>
      <button onClick={handleAddAccount} style={{ marginBottom: "20px" }}>
        Add Account
      </button>
      <GamepassList accounts={accounts} />
    </div>
  );
}
