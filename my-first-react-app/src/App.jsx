// src/App.jsx
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter> {/* Wrap your entire app with BrowserRouter */}
      <nav style={{ padding: '10px', backgroundColor: '#f4f4f4', borderBottom: '1px solid #ddd' }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '20px' }}>
          <li>
            <Link to="/">Home</Link> {/* Use Link for navigation */}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* NavLink adds an 'active' class when the route matches, useful for styling */}
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
              About (NavLink)
            </NavLink>
          </li>
        </ul>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes> {/* Define your routes inside Routes */}
          <Route path="/" element={<Home />} /> {/* When path is '/', render Home component */}
          <Route path="/about" element={<About />} /> {/* When path is '/about', render About component */}
          {/* A catch-all route for 404 pages (optional but good practice) */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
