import { useEffect, useState } from "react";
import NewsCardList from "../components/NewsCardList";
import Header from "../components/Header";

const HomePage = () => {
  //   const { articles, fetchArticles } = useNewsContext();

  //   useEffect(() => {
  //     fetchArticles();
  //   }, []);

  return (
    <div>
      <Header />
      <NewsCardList />
    </div>
  );
};

export default HomePage;
