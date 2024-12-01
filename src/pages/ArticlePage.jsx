import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";
import Article from "../components/Article";
import "../components/styles/Article.css";
import BasicSlider from "../components/BasicSlider";
import { changeMood } from "../utils/GeminiSetup";

export default function ArticlePage() {
  const { id } = useParams();
  const { newsData, loading, error } = useContext(NewsContext);
  const [article, setArticle] = useState(null);
  const [calmnessLevel, setCalmnessLevel] = useState(5);

  useEffect(() => {
    if (newsData.length > 0) {
      const currentArticle = newsData[parseInt(id)];
      setArticle(currentArticle || null);
    }
  }, [id, newsData]);

  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  const handleMoodChange = async () => {
    if (article) {
      try {
        const result = await changeMood({
          title: article.title,
          description: article.description,
          calmnessLevel,
        });

        if (result) {
          setArticle((prevArticle) => ({
            ...prevArticle,
            title: result.title,
            description: result.description,
          }));
        }
      } catch (error) {
        console.error("Failed to update mood:", error);
      }
    }
  };

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

      <BasicSlider
        value={calmnessLevel}
        onChange={(_, newValue) => setCalmnessLevel(newValue)}
      />

      <button onClick={handleMoodChange}>Update Mood</button>
    </div>
  );
}
