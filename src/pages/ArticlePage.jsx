import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";
import Article from "../components/Article";
import "../components/styles/Article.css";
import BasicSlider from "../components/BasicSlider";
import { processTitleMood } from "../utils/GeminiSetup"; // Import processTitleMood function

export default function ArticlePage() {
  const { id } = useParams();
  const { newsData, loading, error } = useContext(NewsContext);
  const [moodScore, setMoodScore] = useState(null);

  useEffect(() => {
    if (newsData.length > 0) {
      const article = newsData[parseInt(id)];

      if (article) {
        processTitleMood(article).then((score) => {
          console.log(score);
          setMoodScore(score);
        });
      }
    }
  }, [id, newsData]);

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
        img={article.image}
        title={article.title}
        date={article.date}
        author={article.author}
        source={article.source}
        description={article.description}
      />
      <div>{moodScore !== null && <p>Mood Score: {moodScore}</p>}</div>
      <BasicSlider />
    </div>
  );
}
