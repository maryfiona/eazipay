import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import MobileDashboard from "./pages/mobile/Dashboard";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mobile" element={<MobileDashboard />} />
          <Route path="*" element={<center>Page not found.</center>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
