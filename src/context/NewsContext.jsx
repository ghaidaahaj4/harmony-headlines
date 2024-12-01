import React, { createContext, useState, useEffect } from "react";
export const NewsContext = createContext();

const url = `https://newsapi.org/v2/everything`;
const currentDate = new Date();
const formattedDate = currentDate.toISOString().split("T")[0];
const newsCache = {};

export async function getNews(params) {
  const access_key = import.meta.env.VITE_MEDIASTACK_API_KEY;

  const urlParams = new URLSearchParams({
    ...params,
    apiKey: access_key,
  }).toString();

  return fetch(`${url}?${urlParams}`, {
    headers: {
      Accept: "application/json",
      "User-Agent": "NewsApp/1.0",
    },
  })
    .then(async (res) => {
      const text = await res.text();
      console.log("Response status:", res.status);
      console.log("Response body:", text);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return JSON.parse(text);
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

  const [params, setParams] = useState({
    q: "tesla",
    from: { formattedDate },
    language: "en",
    sortBy: "publishedAt",
    pageSize: 10,
  });

  const fetchNews = async (params) => {
    try {
      setLoading(true);
      setError(null);

      const cacheKey = JSON.stringify(params);

      if (newsCache[cacheKey]) {
        console.log("Using cached data for params:", params);
        setNewsData(newsCache[cacheKey]);
        return;
      }

      const data = await getNews(params);
      if (data?.articles) {
        const formattedArticles = data.articles.slice(0, 10).map((article) => ({
          author: article.author,
          title: article.title,
          description: article.description,
          sourceName: article.source.name,
          url: article.url,
          image: article.urlToImage,
        }));

        newsCache[cacheKey] = formattedArticles;
        setNewsData(formattedArticles);
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
    fetchNews(params);
  }, [params]);

  return (
    <NewsContext.Provider
      value={{ newsData, loading, error, setParams, refetch: fetchNews }}
    >
      {children}
    </NewsContext.Provider>
  );
}
