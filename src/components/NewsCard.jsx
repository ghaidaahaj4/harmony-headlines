import React from "react";
import { Link } from "react-router-dom";
import "./NewsCard.css"; // Import the external CSS file

export default function NewsCard({ img, title, date, author, source, id }) {
  return (
    <div className="news-card">
      <Link to={`/article/${id}`}>
        <img src={img} alt={title} className="news-card-img" />
        <div className="news-card-content">
          <h3 className="news-card-title">{title}</h3>
          <p className="news-card-details">
            <span className="news-card-author">{author}</span> |{" "}
            <span>{date}</span>
          </p>
          <p className="news-card-source">Source: {source}</p>
        </div>
      </Link>
    </div>
  );
}
