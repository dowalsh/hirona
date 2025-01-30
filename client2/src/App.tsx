import "@mantine/core/styles.css";
// import { useState } from "react";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RouterSwitcher from "./components/RouterSwitcher";

function App() {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <div className="App">
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 150,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <Header opened={opened} toggle={toggle} />

        <Navbar opened={opened} />

        <AppShell.Main>
          <RouterSwitcher />
        </AppShell.Main>

        <AppShell.Footer>
          <p>FOOTER GOES HERE!</p>
        </AppShell.Footer>
      </AppShell>
    </div>
  );
}

export default App;
