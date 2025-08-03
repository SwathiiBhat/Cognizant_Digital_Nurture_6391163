import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("localhost:3000 says\nhello Member!");
  };

  const sayWelcome = (msg) => {
    alert(`localhost:3000 says\n${msg}`);
  };

  const handleClick = (e) => {
    alert("localhost:3000 says\nI was clicked");
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <button onClick={handleClick}>Click on me!</button>

      <CurrencyConverter />
    </div>
  );
}

export default App;
