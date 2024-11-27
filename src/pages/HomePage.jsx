import { useEffect, useState } from "react";
import NewsCardList from "../components/NewsCardList";
import Header from "../components/Header";
import "./Home.css";
const HomePage = () => {
  //   const { articles, fetchArticles } = useNewsContext();

  //   useEffect(() => {
  //     fetchArticles();
  //   }, []);

  return (
    <div className="home">
      <Header />
      <NewsCardList />
    </div>
  );
};

export default HomePage;
