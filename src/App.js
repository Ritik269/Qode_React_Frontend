import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  const [page, setPage] = useState("home"); // start with Home

  return (
    <div className="app">
      <Sidebar setPage={setPage} />
      <main className="content">
        {page === "home" && <Home />}
        {page === "portfolio" && <Portfolio />}
        {page !== "home" && page !== "portfolio" && <h1>{page}</h1>}
      </main>
    </div>
  );
}

export default App;
