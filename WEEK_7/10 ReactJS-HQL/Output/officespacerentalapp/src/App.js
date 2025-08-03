// src/App.js

import React from "react";
import "./App.css";

function App() {
  const element = "Office Space";
  const sr = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrJtMF5SH36A9c7cVSADdruAug_tE5KpWcg&s";

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
  };

  // Determine rent color based on value
  let rentColorClass = "";
  if (ItemName.Rent <= 60000) {
    rentColorClass = "textRed";
  } else {
    rentColorClass = "textGreen";
  }

  const jsxatt = (
    <img src={sr} width="25%" height="25%" alt="Office Space" />
  );

  return (
    <div className="App">
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={rentColorClass}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
