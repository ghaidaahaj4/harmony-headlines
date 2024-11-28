import React, { useContext, useEffect } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsCard from "./NewsCard";

export default function NewsCardList({ feed }) {
  const { newsData, loading, error, setParams } = useContext(NewsContext);

  useEffect(() => {
    if (feed) {
      setParams({
        q: feed,
        from: "2024-10-28",
        sortBy: "publishedAt",
      });
    }
  }, [feed, setParams]);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news: {error}</p>;

  return (
    <div className="news-card-list">
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          id={index}
          img={news.image}
          title={news.title}
          date={news.published_at}
          author={news.author || "Unknown"}
          source={news.source}
          description={news.description || "No description available."}
        />
      ))}
    </div>
  );
}
