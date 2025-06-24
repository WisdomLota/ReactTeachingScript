// src/App.jsx
import { useState } from 'react';
import './App.css'; // Assuming you have some styles in App.css

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Let's start as logged in

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn && <p>Welcome back, user!</p>} {/* Renders only if isLoggedIn is true */}

      {/* Another way using ternary */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      {/* What if we want to show a loading state? */}
      {/* Imagine this is coming from an API call */}
      {/* const [isLoading, setIsLoading] = useState(true); */}
      {/* {isLoading ? <p>Loading data...</p> : <p>Data loaded!</p>} */}
    </div>
  );
}
export default App;
