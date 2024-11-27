import React from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    img: "https://via.placeholder.com/400",
    title: "Breaking News: React is Awesome!",
    date: "Nov 27, 2024",
    author: "Jane Doe",
    source: "React News",
    description:
      "In the world of web development, React has become one of the most popular and powerful JavaScript libraries. Let’s explore why React is so widely used and how it continues to evolve.",
  },
  {
    img: "https://via.placeholder.com/400",
    title: "Top 10 JavaScript Frameworks in 2024",
    date: "Nov 26, 2024",
    author: "John Smith",
    source: "JS Weekly",
    description:
      "JavaScript has a variety of frameworks that cater to different needs. In this article, we take a look at the top 10 JavaScript frameworks in 2024 and their advantages for developers.",
  },
  {
    img: "https://via.placeholder.com/400",
    title: "Why Frontend Development is Thriving",
    date: "Nov 25, 2024",
    author: "Alex Johnson",
    source: "Web Trends",
    description:
      "Frontend development is booming in 2024. With the rise of modern frameworks and technologies, the demand for skilled frontend developers has skyrocketed. Let’s dive into the reasons why.",
  },
];

export default function NewsCardList() {
  return (
    <div className="news-card-list">
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          id={index} // Pass the index as the article id
          img={news.img}
          title={news.title}
          date={news.date}
          author={news.author}
          source={news.source}
        />
      ))}
    </div>
  );
}
