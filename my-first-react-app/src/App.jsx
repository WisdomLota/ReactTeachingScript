import './App.css'

function App() {
  const name = "React Bootcamper";
  const trainingTopic = "Web Development Tech Training";
  const isLoggedIn = false; // Let's pretend we have a login status


  return (
    <>
      <div>
        {/** Our JSX goes here */}
        <div>
          <h1>Welcome, {name}!</h1>
          <p>This is your {trainingTopic} journey.</p>
          <p>The current year is: {new Date().getFullYear()}.</p>
          {/* You can even do simple math! */}
          <p>2 + 2 = {2 + 2}</p>

           {/* Conditional rendering example */}
          {isLoggedIn ? (
            <p>You are logged in! Enjoy the content.</p>
          ) : (
            <p>Please log in to access all features.</p>
          )}

          {/* Another example: an array of strings */}
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>

        </div>
    </>
  )
}

export default App
