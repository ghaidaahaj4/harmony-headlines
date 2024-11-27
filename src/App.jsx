import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import "./App.css";
import { NewsProvider } from "./context/NewsContext";
export default function App() {
  return (
    <Router>
      <div>
        <NewsProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </NewsProvider>
      </div>
    </Router>
  );
}
