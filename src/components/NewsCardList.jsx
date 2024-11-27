import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsCard from "./NewsCard";

export default function NewsCardList() {
  const { newsData, loading, error } = useContext(NewsContext);

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
