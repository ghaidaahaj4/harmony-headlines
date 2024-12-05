import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  UserProfile,
  SignIn,
  SignUp,
  SignOutButton,
  SignInButton,
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
          <SignOutButton />
          <NewsProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
          </NewsProvider>
        </SignedIn>

        <SignedOut>
          <SignIn />
          <SignInButton className="custom-signin-button" />
        </SignedOut>
      </div>
    </Router>
  );
}
