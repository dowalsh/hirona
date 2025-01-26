import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const Create: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Create Page</h1>
      <Button component={Link} to="/">
        Go to Home
      </Button>
    </div>
  );
};

export default Create;
