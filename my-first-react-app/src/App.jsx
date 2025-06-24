// src/App.jsx
import "./App.css"
import UserProfileCard from './UserProfileCard'; // Import our new component

function App() {
  return (
    <div>
      <h1>My Awesome React App</h1>
      <UserProfileCard
        userName="John Doe"
        userBio="Passionate about web development and coffee."
        profilePic="https://via.placeholder.com/150/FF5733/FFFFFF?text=JD"
      />
      <UserProfileCard
        userName="Jane Smith"
        userBio="UI/UX designer with a love for clean code."
        profilePic="https://via.placeholder.com/150/33FF57/FFFFFF?text=JS"
      />
    </div>
  )
}
export default App;
