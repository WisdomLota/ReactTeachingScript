// src/App.jsx
import { useState, useEffect } from 'react';

function App() {
  const [userName, setUserName] = useState('Guest');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Effect is running!');
    const timer = setTimeout(() => { // Store the timeout ID
      setUserName('John Doe');
      setIsLoading(false);
      console.log('Data fetched!');
    }, 2000);

    // Cleanup function: runs when component unmounts or before effect re-runs
    return () => {
      console.log('Cleaning up effect!');
      clearTimeout(timer); // Clear the timeout if component unmounts before it fires
    };
  }, []); // Empty dependency array

  return (
    <div>
      <h1>Using useEffect for Data Fetching</h1>
      {isLoading ? (
        <p>Loading user data...</p>
      ) : (
        <p>Welcome, {userName}!</p>
      )}
    </div>
  );
}
export default App;
