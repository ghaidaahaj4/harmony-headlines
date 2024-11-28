import React, { useState } from "react";
import NewsCardList from "../components/NewsCardList";
import Header from "../components/Header";
import "./Home.css";

const HomePage = () => {
  const [currentFeed, setCurrentFeed] = useState("tesla"); // State for the selected feed

  return (
    <div className="home">
      {/* Pass setCurrentFeed as a prop to Header */}
      <Header setCurrentFeed={setCurrentFeed} />
      {/* Pass the current feed to NewsCardList */}
      <NewsCardList feed={currentFeed} />
    </div>
  );
};

export default HomePage;
