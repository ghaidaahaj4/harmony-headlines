import React from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    img: "https://via.placeholder.com/400",
    title: "Breaking News: React is Awesome!",
    date: "Nov 27, 2024",
    author: "Jane Doe",
    source: "React News",
  },
  {
    img: "https://via.placeholder.com/400",
    title: "Top 10 JavaScript Frameworks in 2024",
    date: "Nov 26, 2024",
    author: "John Smith",
    source: "JS Weekly",
  },
  {
    img: "https://via.placeholder.com/400",
    title: "Why Frontend Development is Thriving",
    date: "Nov 25, 2024",
    author: "Alex Johnson",
    source: "Web Trends",
  },
];

const NewsCardList = () => {
  return (
    <div className="news-card-list">
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          img={news.img}
          title={news.title}
          date={news.date}
          author={news.author}
          source={news.source}
        />
      ))}
    </div>
  );
};

export default NewsCardList;
