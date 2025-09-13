import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Home />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
