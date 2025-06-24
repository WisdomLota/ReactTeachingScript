// src/App.jsx
import { useState } from 'react';

function App() {
  const [name, setName] = useState(''); // State to hold the input value
  const [email, setEmail] = useState(''); // State for email

  // Event handler for name input change
  function handleNameChange(event) {
    setName(event.target.value); // Update state with the new input value
  }

  // Event handler for email input change
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  // Event handler for form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default browser form submission (page reload)
    console.log('Submitted Name:', name);
    console.log('Submitted Email:', email);
    alert(`Hello, ${name}! Your email is ${email}.`);
    // You'd typically send this data to an API here
    setName(''); // Clear the input after submission
    setEmail('');
  }

  return (
    <div>
      <h1>Simple Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name} // Value is controlled by state
            onChange={handleNameChange} // State updates on change
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Current Name in State: {name}</p>
      <p>Current Email in State: {email}</p>
    </div>
  );
}
export default App;
