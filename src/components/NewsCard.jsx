/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./styles/NewsCard.css";
import defaultImg from "../assets/defult.png";

export default function NewsCard({ img, title, date, author, source, index }) {
  return (
    <div className="news-card">
      <Link to={`/article/${index}`} className="news-card-link">
        <img
          src={img || defaultImg} // Optional chaining for `img`
          alt={title || "News Image"} // Add alt text for accessibility
          className="article-img"
        />
        <div className="news-card-content">
          <h3 className="news-card-title">{title}</h3>
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
          {source && (
            <p className="news-card-source">
              Source: <span>{source.name || source}</span>
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
