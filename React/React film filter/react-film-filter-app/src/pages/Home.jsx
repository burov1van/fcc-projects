import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import NewsBar from "../components/NewsBar";
import { getAllNews } from "../services/thenewsapi";

export default function Home() {
  console.log("Home");
  const [searchQuiery, SetSearchQuiery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  const [moviesLoading, setMoviesLoading] = useState(true);
  const [newsLoading, setNewsLoading] = useState(true);
  const trimmedQuery = searchQuiery.trim();

  const loadPopulaeMovies = async () => {
    setMoviesLoading(true);

    try {
      const popularMovie = await getPopularMovies();
      setMovies(popularMovie);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setMoviesLoading(false);
    }
  };

  useEffect(() => {
    const loadActualNews = async () => {
      try {
        const actualNews = await getAllNews();
        setNews(actualNews);
      } catch (err) {
        console.log(err);
        setError("Failed to load news...");
      } finally {
        setNewsLoading(false);
      }
    };

    loadActualNews();
  }, []);

  const handleSearch = useCallback(
    async (e) => {
      e.preventDefault();
      if (!trimmedQuery) return;
      if (moviesLoading) return;
      setMoviesLoading(true);

      try {
        const searchResult = await searchMovies(trimmedQuery);
        setMovies(searchResult);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to search movies...");
      } finally {
        setMoviesLoading(false);
      }
    },
    [trimmedQuery, moviesLoading]
  );

  useEffect(() => {
    if (trimmedQuery === "") {
      loadPopulaeMovies();
    }
  }, [trimmedQuery]);

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter the name of movie..."
          className="search-input"
          value={searchQuiery}
          onChange={(e) => SetSearchQuiery(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {error && <div className="error-messаge">{error}</div>}

      {moviesLoading ? (
        <div className="loading">Content is loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
      {!newsLoading && news.length > 0 && (
        <section className="news-section">
          <div className="news-section-header">
            <p className="news-pill">Curated anime buzz</p>
            <h2>Infinity Gazette</h2>
            <p>Trending stories from the multiverse of cinema.</p>
          </div>
          <div className="news-grid">
            {news.map((article) => (
              <NewsBar article={article} key={article.uuid} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
