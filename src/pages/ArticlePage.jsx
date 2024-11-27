import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Article from "../components/Article";
import "../components/styles/Article.css";
export default function ArticlePage() {
  const { id } = useParams(); // Access the `id` parameter from the URL

  const articleData = [
    {
      img: "https://www.w3schools.com/css/paris.jpg",
      title: "Breaking News: React is Awesome!",
      date: "Nov 27, 2024",
      author: "Jane Doe",
      source: "React News",
      description:
        "In the world of web development, React has become one of the most popular and powerful JavaScript libraries. Let’s explore why React is so widely used and how it continues to evolve.",
    },
    {
      img: "https://via.placeholder.com/800x400",
      title: "Top 10 JavaScript Frameworks in 2024",
      date: "Nov 26, 2024",
      author: "John Smith",
      source: "JS Weekly",
      description:
        "JavaScript has a variety of frameworks that cater to different needs. In this article, we take a look at the top 10 JavaScript frameworks in 2024 and their advantages for developers.",
    },
    {
      img: "https://via.placeholder.com/800x400",
      title: "Why Frontend Development is Thriving",
      date: "Nov 25, 2024",
      author: "Alex Johnson",
      source: "Web Trends",
      description:
        "Frontend development is booming in 2024. With the rise of modern frameworks and technologies, the demand for skilled frontend developers has skyrocketed. Let’s dive into the reasons why.",
    },
  ];

  // Access the article using the `id` from the URL
  const article = articleData[parseInt(id)];
  const navigate = useNavigate();
  const handleGoBack = () => {
    console.log("hii");
    navigate(-1);
  };
  return (
    <div>
      <Article
        img={article.img}
        title={article.title}
        date={article.date}
        author={article.author}
        source={article.source}
        description={article.description}
      />
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}
