import React, { useState } from "react";
import NewsCardList from "../components/NewsCardList";
import Header from "../components/Header";
import "./Home.css";

const HomePage = () => {
  const [currentFeed, setCurrentFeed] = useState("tesla");

  return (
    <div className="home">
      <Header setCurrentFeed={setCurrentFeed} />
      <NewsCardList feed={currentFeed} />
    </div>
  );
};

export default HomePage;
