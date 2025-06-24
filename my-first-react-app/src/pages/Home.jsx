// src/pages/Home.jsx
import { useState, useEffect } from 'react';

function Home() {
  const [users, setUsers] = useState([]); // State to store fetched users
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error messages

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true); // Set loading to true before fetching
        setError(null); // Clear any previous errors

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) { // Check if response was successful (e.g., 200 OK)
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        setUsers(data); // Update state with fetched users
      } catch (err) {
        setError(err.message); // Catch any errors during the fetch or parsing
        console.error("Failed to fetch users:", err);
      } finally {
        setIsLoading(false); // Set loading to false after fetch (success or error)
      }
    }

    fetchUsers(); // Call the async function
  }, []); // Empty dependency array: run once on component mount

  // Conditional rendering based on loading/error states
  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
