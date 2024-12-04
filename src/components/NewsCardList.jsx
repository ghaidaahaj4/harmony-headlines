/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsCard from "./NewsCard";

const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];

export default function NewsCardList({ feed }) {
  const { newsData, loading, error, setParams } = useContext(NewsContext);

  // Debugging: Log the whole newsData to inspect its structure
  console.log("newsData:", newsData);

  // Debugging: Log the second item in the array and its author
  console.log("Second item in newsData:", newsData[1]);
  console.log("Author of second item:", newsData[1]?.author); // Safe access

  useEffect(() => {
    if (feed) {
      setParams({
        q: feed,
        language: "en",
        from: formattedDate,
        sortBy: "publishedAt",
      });
    }
  }, [feed, setParams]);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news: {error.toString()}</p>;

  return (
    <div className="news-card-list">
      {newsData.length > 0 ? (
        newsData.map((news, index) => (
          <NewsCard
            key={index} // Use the index as the key
            index={index} // Pass the index as a prop
            img={news?.urlToImage}
            title={news?.title}
            date={news?.published_at}
            author={news?.author || "Unknown"}
            source={news?.source}
            description={news?.description || "No description available."}
          />
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}
