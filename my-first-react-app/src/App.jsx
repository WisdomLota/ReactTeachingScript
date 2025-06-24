// src/App.jsx
import { useState, useEffect } from 'react'; // Import useEffect!

function App() {
  const [userName, setUserName] = useState('Guest');
  const [isLoading, setIsLoading] = useState(true);

  // This effect runs once after the initial render
  useEffect(() => {
    console.log('Effect is running!'); // See this in your browser's console

    // Simulate fetching data from an API
    setTimeout(() => {
      setUserName('John Doe'); // Update state after 2 seconds
      setIsLoading(false);
      console.log('Data fetched!');
    }, 3000); // 2-second delay

    // Optional: Cleanup function for effects that set up subscriptions or timers
    // return () => {
    //   console.log('Cleaning up effect!');
    //   // Clear timeout or unsubscribe here if needed
    // };
  }, []); // Empty dependency array: runs only once on mount

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
