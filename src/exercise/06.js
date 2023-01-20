// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault();
    const value = usernameRef.current.value
    onSubmitUsername(value)
  }

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    const button = document.getElementById('submitButton')

    setError(isValid ? null : 'Username must be lower case')
    button.disabled = !isValid
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" ref={usernameRef} onChange={handleChange}/>
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button type="submit" id="submitButton">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
