import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      // Make a GET request to the backend API
      const response = await fetch('http://localhost:5001/api/test');
      const data = await response.json();

      // Set the message in the state
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('Failed to fetch message from backend');
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Hirona!</h1>
      <button onClick={handleClick}>Get Message from Backend</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
