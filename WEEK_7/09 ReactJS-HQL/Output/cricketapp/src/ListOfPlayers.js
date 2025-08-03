import React from 'react';

function ListOfPlayers({ players }) {
  return (
    <ul>
      {players.map((p, i) => (
        <li key={i}>Mr. {p.name} {p.score}</li>
      ))}
    </ul>
  );
}

export default ListOfPlayers;
