import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";
import Article from "../components/Article";
import "../components/styles/Article.css";

export default function ArticlePage() {
  const { id } = useParams();
  const { newsData, loading, error } = useContext(NewsContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const article = newsData[parseInt(id)];

  if (!article) {
    return <div>Article not found</div>;
  }

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <Article
        img={article.img}
        title={article.title}
        date={article.date}
        author={article.author}
        source={article.source}
        description={article.description}
      />
    </div>
  );
}
