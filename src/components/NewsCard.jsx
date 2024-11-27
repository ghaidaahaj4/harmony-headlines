import React from "react";
import { Link } from "react-router-dom";
import "./styles/NewsCard.css";

export default function NewsCard({ img, title, date, author, source, id }) {
  return (
    <div className="news-card">
      <Link to={`/article/${id}`} className="news-card-link">
        {/* Image Section */}
        <img
          src={img || "https://via.placeholder.com/400"} // Fallback image
          alt={title}
          className="news-card-img"
        />

        {/* Content Section */}
        <div className="news-card-content">
          <h3 className="news-card-title">{title}</h3>

          {/* Author and Date */}
          <p className="news-card-details">
            {author ? (
              <span className="news-card-author">{author}</span>
            ) : (
              <span className="news-card-author">Unknown Author</span>
            )}
            {date && (
              <>
                {" "}
                |{" "}
                <span className="news-card-date">
                  {new Date(date).toLocaleDateString()}
                </span>
              </>
            )}
          </p>

          {/* Source */}
          {source && (
            <p className="news-card-source">
              Source: <span>{source}</span>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
