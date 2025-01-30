import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { MantineProvider } from "@mantine/core";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

// this color scheme is not working
// import { useMantineColorScheme } from "@mantine/core";

// const { colorScheme, toggleColorScheme } = useMantineColorScheme();
// if (colorScheme !== "light") {
//   toggleColorScheme();
// }

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider forceColorScheme="light">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
