import React from "react";

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
      <div className="article-content">
        <h1 className="article-title">{title}</h1>
        <p className="article-details">
          <span className="article-author">{author}</span> | <span>{date}</span>{" "}
          | <span>{source}</span>
        </p>
        <p className="article-description">{description}</p>
      </div>
    </div>
  );
}
