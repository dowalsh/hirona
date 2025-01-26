import "@mantine/core/styles.css";
import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiURL = import.meta.env.VITE_API_URL;

function App() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    // log the apiURL    console.log(`apiURL: ${apiURL}`);
    // log a message to the console
    console.log("button clicked");
    console.log(`apiURL: ${apiURL}`);
    try {
      // Make a GET request to the backend API
      const response = await fetch(`${apiURL}/api/test`);
      const data = await response.json();

      // Set the message in the state
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Failed to fetch message from backend");
    }
  };

  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <h1>Welcome to Hirona (note)!</h1>
        <button onClick={handleClick}>Get Message from Backend</button>
        {message && <p>{message}</p>}
      </div>
      App
    </MantineProvider>
  );
}

export default App;
