import React from 'react';

function EvenPlayers({ players }) {
  return (
    <ul>
      {players
        .filter((_, index) => index % 2 !== 0) // Even indices based on 1-based labels
        .map((name, index) => (
          <li key={index}>
            {index === 0 && "Second"} 
            {index === 1 && "Fourth"} 
            {index === 2 && "Sixth"} 
            : {name}
          </li>
        ))}
    </ul>
  );
}

export default EvenPlayers;
