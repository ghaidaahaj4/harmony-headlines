import React, { createContext, useState, useEffect } from "react";
export const NewsContext = createContext();
const url = `http://api.mediastack.com/v1/news`;

export function getNews() {
  const params = {
    languages: "en",
    countries: "us,il,ae",
    access_key: import.meta.env.VITE_MEDIASTACK_API_KEY, // Ensure this is correct
    keywords: "israel,palestine",
    limit: 10,
  };
  const urlParams = new URLSearchParams(params).toString();
  return fetch(`${url}?${urlParams}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error("Error fetching news data:", err);
      throw err;
    });
}

export function NewsProvider({ children }) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_MEDIASTACK_API_KEY;

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getNews(apiKey);
      if (data?.data) {
        setNewsData(data.data);
        console.log(data);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Error fetching news data:", err);
      setError(err.message || "Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{ newsData, loading, error, refetch: fetchNews }}
    >
      {children}
    </NewsContext.Provider>
  );
}
