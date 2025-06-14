import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import GamepassCard from '../components/GamepassCard';

export default function Home() {
  const [userId, setUserId] = useState('');
  const [gamepasses, setGamepasses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGamepasses = async () => {
    if (!userId) return Swal.fire('Error', 'Please enter Roblox User ID.', 'error');
    setLoading(true);
    try {
      const res = await axios.get(`/api/getGamepasses?userId=${userId}`);
      setGamepasses(res.data.gamepasses);
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Failed to fetch gamepasses.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Roblox Gamepass Collector</h2>

      <input 
        type="text" 
        placeholder="Enter Roblox User ID"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        style={{ padding: '10px', width: '250px', marginRight: '10px' }}
      />
      <button onClick={fetchGamepasses} style={{ padding: '10px 20px' }}>
        {loading ? 'Loading...' : 'Fetch'}
      </button>

      <div style={{ marginTop: '30px' }}>
        {gamepasses.length === 0 && <p>No gamepasses found.</p>}
        {gamepasses.map(pass => (
          <GamepassCard key={pass.id} pass={pass} />
        ))}
      </div>
    </div>
  );
}
