// src/App.jsx
import "./App.css"
import UserProfileCard from './UserProfileCard'; // Import our new component

function App() {
  return (
    <div>
      <h1>My Awesome React App</h1>
      <UserProfileCard /> {/* Use our component like an HTML tag! */}
      <UserProfileCard /> {/* See? Reusable! */}
    </div>
  )
}
export default App;
