import React from 'react';

function ListofPlayers() {
  // Declare an array with 11 players and their names and scores
  const players = [
    { name: 'Sachin Tendulkar', score: 100 },
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 72 },
    { name: 'MS Dhoni', score: 68 },
    { name: 'Yuvraj Singh', score: 55 },
    { name: 'Suresh Raina', score: 45 },
    { name: 'Hardik Pandya', score: 90 },
    { name: 'Ravindra Jadeja', score: 62 },
    { name: 'KL Rahul', score: 40 },
    { name: 'Shikhar Dhawan', score: 110 },
    { name: 'Rishabh Pant', score: 95 }
  ];

  // Filter the players with scores below 70 using arrow functions of ES6
  const playersBelow70 = players.filter(player => player.score < 70);

  // Filter the players with scores above/equal 70 (for alternative interpretation)
  const playersAbove70 = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>ListofPlayers Component</h2>
      
      <h3>All Players:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            Player Name: {player.name} , Score: {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with scores below 70:</h3>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            Player Name: {player.name} , Score: {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with scores 70 and above:</h3>
      <ul>
        {playersAbove70.map((player, index) => (
          <li key={index}>
            Player Name: {player.name} , Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
