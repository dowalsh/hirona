import "@mantine/core/styles.css";
// import { useState } from "react";
import { AppShell } from "@mantine/core";

// import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RouterSwitcher from "./components/RouterSwitcher";

function App() {
  return (
    <div className="App" style={{ marginTop: "20px" }}>
      <AppShell>
        <Header />
        <Navbar />
        <AppShell.Main
          style={{
            paddingTop: "60px",
            paddingBottom: "60px",
            paddingLeft: "200px",
          }}
        >
          <RouterSwitcher />
        </AppShell.Main>
        <AppShell.Footer>
          <p>FOOTER GOES HERE!</p>
        </AppShell.Footer>
      </AppShell>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes> */}
    </div>
  );
}

export default App;
