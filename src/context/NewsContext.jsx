/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
export const NewsContext = createContext();

const serverUrl = `https://llm-whithbackend1-t809.onrender.com/NEWS`;

export function NewsProvider({ children }) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [params, setParams] = useState({
    q: "tesla",
    from: new Date().toISOString().split("T")[0],
    language: "en",
    sortBy: "publishedAt",
    pageSize: 10,
  });

  const fetchNews = async (params) => {
    try {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams(params).toString();
      const response = await fetch(`${serverUrl}?${queryParams}`);

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setNewsData(data);
      } else {
        setNewsData([]);
      }
    } catch (err) {
      console.error("Error fetching news data:", err);
      setError(err.message || "Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(params);
  }, [params]);

  return (
    <NewsContext.Provider
      value={{
        newsData,
        loading,
        error,
        setParams,
        refetch: fetchNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}
