import React, { useState } from "react";

// Login Button Component
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

// Logout Button Component
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

// Guest Greeting Component
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// User Greeting Component
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Greeting Component
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
