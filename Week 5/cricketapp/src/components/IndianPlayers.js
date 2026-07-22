import React from 'react';

function IndianPlayers() {
  // Array of 11 players
  const players = [
    'Sachin Tendulkar',
    'Virat Kohli',
    'Rohit Sharma',
    'MS Dhoni',
    'Yuvraj Singh',
    'Suresh Raina',
    'Hardik Pandya',
    'Ravindra Jadeja',
    'KL Rahul',
    'Shikhar Dhawan',
    'Rishabh Pant'
  ];

  // a. Display the Odd Team Player and Even Team players using the Destructuring features of ES6
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11] = players;

  const oddTeam = [p1, p3, p5, p7, p9, p11];
  const evenTeam = [p2, p4, p6, p8, p10];

  // b. Declare two arrays T20players and RanjiTrophy players and merge the two arrays
  const T20players = ['Suryakumar Yadav', 'Shubman Gill', 'Ishan Kishan'];
  const RanjiTrophy = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Hanuma Vihari'];
  
  // Merge the two arrays and display them using the Merge feature of ES6 (Spread Operator)
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>IndianPlayers Component</h2>

      <h3>Odd Team Players (Destructured):</h3>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>
            Player {index * 2 + 1}: {player}
          </li>
        ))}
      </ul>

      <h3>Even Team Players (Destructured):</h3>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>
            Player {index * 2 + 2}: {player}
          </li>
        ))}
      </ul>

      <hr />

      <h3>T20 Players Array:</h3>
      <ul>
        {T20players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Ranji Trophy Players Array:</h3>
      <ul>
        {RanjiTrophy.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Merged Players (using ES6 Spread Operator):</h3>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
