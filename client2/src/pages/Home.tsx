import { Button } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiURL = import.meta.env.VITE_API_URL;

function Home() {
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
    <div className="home">
      <h1>Welcome to Hirona (note)!</h1>
      <Button onClick={handleClick}>Get Message from Backend</Button>
      <Button component={Link} to="/create">
        Go to Create Page
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Home;
