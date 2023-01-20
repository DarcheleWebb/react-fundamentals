// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameRef = React.useRef(null)
  const [username, setUsername] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault();
    const value = usernameRef.current.value
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()

    if (isValid) {
      setUsername(value)
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" ref={usernameRef} onChange={handleChange} value={username}/>
      </div>
      <button type="submit" id="submitButton">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
