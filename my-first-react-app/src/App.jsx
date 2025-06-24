// src/App.jsx
import { useState } from 'react'; // Don't forget to import useState! 

function App() {
  const [count, setCount] = useState(0); // Initialize count state to 0

  function increment() {
    setCount(count + 1); // Update the state
  }

  function decrement() {
    setCount(count - 1); // Update the state
  }

  return (
    <div>
      <h1>Simple Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
export default App;
