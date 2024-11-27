import React from "react";
import "./NewsCard.css"; // Import the external CSS file

const NewsCard = ({ img, title, date, author, source }) => {
  return (
    <div className="news-card">
      <img src={img} alt={title} className="news-card-img" />
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-details">
          <span className="news-card-author">{author}</span> |{" "}
          <span>{date}</span>
        </p>
        <p className="news-card-source">Source: {source}</p>
      </div>
    </div>
  );
};

export default NewsCard;
