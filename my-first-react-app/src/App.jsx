// src/App.jsx
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const items = ['Learn React', 'Build a Project', 'Deploy App', 'Master Hooks']; // Our list of data

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn && <p>Welcome back, user!</p>}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      <hr /> {/* A horizontal line for separation */}

      <h2>My Learning Path</h2>
      <ul>
        {items.map((item, index) => ( // Using .map() to iterate
          <li key={item}>{item}</li> // Using item itself as key (assuming they're unique strings)  // In a real app, use a unique ID: <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
