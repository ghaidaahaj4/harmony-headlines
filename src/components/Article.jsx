import React from "react";
import "./styles/Article.css";

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
      <img src={img} alt={title} className="article-img" />
      <h1 className="article-title">{title}</h1>
      <div className="article-content">
        <p className="article-details">
          <span className="article-author">{author}</span> | <span>{date}</span>{" "}
          | <span>{source}</span>
        </p>
        <p className="article-description">{description}</p>
      </div>
    </div>
  );
}
