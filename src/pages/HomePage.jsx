import { useEffect, useState } from "react";
import NewsCardList from "../components/NewsCardList";

const HomePage = () => {
  //   const { articles, fetchArticles } = useNewsContext();

  //   useEffect(() => {
  //     fetchArticles();
  //   }, []);

  return (
    <div>
      <NewsCardList />
    </div>
  );
};

export default HomePage;
