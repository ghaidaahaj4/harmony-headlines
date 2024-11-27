import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./components/ArticlePage";

export default function App() {
  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "24px" }}>News Feed</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}
