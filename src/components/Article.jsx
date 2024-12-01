import React from "react";
import "./styles/Article.css";
import defaultImg from "../assets/defult.png";

export default function Article({
  img,
  title,
  date,
  author,
  source,
  description,
}) {
  return (
    <div className="article">
      <img
        src={img || defaultImg}
        alt={title || "Default"}
        className="article-img"
      />

      <h1 className="article-title">{title || "Untitled Article"}</h1>
      <div className="article-content">
        <p className="article-details">
          <span className="article-author">{author || "Unknown Author"}</span> |{" "}
          <span>{date || "Unknown Date"}</span> |{" "}
          <span>{source || "Unknown Source"}</span>
        </p>
        <p className="article-description">
          {description || "No description available."}
        </p>
      </div>
    </div>
  );
}
