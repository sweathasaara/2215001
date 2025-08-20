import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import StatsPage from "./pages/StatsPage";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React URL Shortener</h1>
        <nav>
          <NavLink to="/shorten" className="nav">Shorten</NavLink>
          <NavLink to="/stats" className="nav">Statistics</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/shorten" replace />} />
        <Route path="/shorten" element={<ShortenerPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}
