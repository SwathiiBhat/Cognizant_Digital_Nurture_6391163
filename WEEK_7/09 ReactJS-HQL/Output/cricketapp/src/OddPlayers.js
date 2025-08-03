import React from 'react';

function OddPlayers({ players }) {
  return (
    <ul>
      {players
        .filter((_, index) => index % 2 === 0) // Odd indices based on 1-based labels
        .map((name, index) => (
          <li key={index}>
            {index === 0 && "First"} 
            {index === 1 && "Third"} 
            {index === 2 && "Fifth"} 
            : {name}
          </li>
        ))}
    </ul>
  );
}

export default OddPlayers;
