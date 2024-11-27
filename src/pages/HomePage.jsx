import { useEffect, useState } from "react";
import NewsCardList from "../components/NewsCardList";

const HomePage = () => {
  //   const { articles, fetchArticles } = useNewsContext();

  //   useEffect(() => {
  //     fetchArticles();
  //   }, []);

  return (
    <div>
      <h1>Latest News</h1>
      <NewsCardList />
    </div>
  );
};

export default HomePage;
