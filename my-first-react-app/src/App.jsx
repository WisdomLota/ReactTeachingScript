// src/App.jsx
import './App.css'; // Make sure you import the CSS file!

function App() {
  return (
    <div className="app-container"> {/* Use className instead of class */}
      <h1>My Stylish React App</h1>
      <p className="styled-paragraph">This text is styled with global CSS!</p>
      <button className="button-primary"> {/* Assuming you have a .button-primary in App.css */}
        Styled Button
      </button>
    </div>
  );
}
export default App;
