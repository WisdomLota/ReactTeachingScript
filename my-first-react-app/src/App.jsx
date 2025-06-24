// src/App.jsx
import { useState } from 'react';
import Button from './Button'; // Import our Button component
import "./App.css"; // Importing CSS for styling

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Reusable Counter with Button Component</h1>
      <p>Current count: {count}</p>
      {/* Now using our Button component! */}
      <Button label="Increment" onClick={increment} />
      <Button label="Decrement" onClick={decrement} />
    </div>
  )
}
export default App;
