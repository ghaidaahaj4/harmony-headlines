import React, { useContext, useEffect } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsCard from "./NewsCard";

export default function NewsCardList({ feed }) {
  const { newsData, loading, error, setParams } = useContext(NewsContext);

  useEffect(() => {
    if (feed) {
      setParams({
        q: feed,
        from: new Date(new Date().setDate(new Date().getDate() - 7))
          .toISOString()
          .split("T")[0],
        sortBy: "publishedAt",
      });
    }
  }, [feed, setParams]);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news: {error.toString()}</p>;

  return (
    <div className="news-card-list">
      {newsData.map((news) => (
        <NewsCard
          key={news.id || news.title} // Prefer unique keys
          id={news.id}
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
