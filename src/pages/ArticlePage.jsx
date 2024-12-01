import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";
import Article from "../components/Article";
import "../components/styles/Article.css";
import BasicSlider from "../components/BasicSlider";

export default function ArticlePage() {
  const { id } = useParams(); // Get the index from the URL
  const { newsData, loading, error } = useContext(NewsContext);
  const [article, setArticle] = useState(null); // State to store the article

  useEffect(() => {
    console.log("News Data:", newsData);
    console.log("ID from URL:", id);

    if (newsData.length > 0) {
      const currentArticle = newsData[parseInt(id)]; // Use the index to access the article
      console.log(currentArticle);
      setArticle(currentArticle || null); // Update the state
    }
  }, [id, newsData]);

  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1); // Go back to the previous page

  // Show loading/error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-page">
      <button onClick={handleGoBack} className="back-button">
        Go Back
      </button>
      <Article
        img={article.image}
        title={article.title}
        date={article.date || "Unknown Date"}
        author={article.author || "Unknown Author"}
        source={article.source || "Unknown Source"}
        description={article.description || "No description available."}
      />
      <BasicSlider />
    </div>
  );
}
