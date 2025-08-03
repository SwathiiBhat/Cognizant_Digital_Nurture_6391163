// src/IndianPlayers.js

import React from "react";

function IndianPlayers() {
  const allPlayers = [
    "Virat", "Rohit", "Dhoni", "Pant", "Bumrah", "Kohli",
    "Jadeja", "Rahul", "Gill", "Shami", "Surya"
  ];

  // Destructure odd and even index players
  const oddTeam = allPlayers.filter((_, i) => i % 2 !== 0);
  const evenTeam = allPlayers.filter((_, i) => i % 2 === 0);

  // Merge two arrays using spread operator
  const T20players = ["Virat", "Rohit", "Pant"];
  const RanjiTrophyPlayers = ["Rahul", "Gill", "Surya"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>

      <h3>Even Team Players</h3>
      <ul>
        {evenTeam.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Odd Team Players</h3>
      <ul>
        {oddTeam.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h3>Merged Players (T20 + Ranji)</h3>
      <ul>
        {mergedPlayers.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
