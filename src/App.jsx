import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserProfile,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import { NewsProvider } from "./context/NewsContext";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <SignedIn>
          <UserProfile />
          <NewsProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
          </NewsProvider>
        </SignedIn>

        <SignedOut>
          <SignIn />
          <SignUp />
        </SignedOut>
      </div>
    </Router>
  );
}
