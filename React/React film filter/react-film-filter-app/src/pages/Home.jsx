import React, { useState, useEffect, useCallback } from "react";
import MovieCard from "../components/MovieCard";
import NewsBar from "../components/NewsBar";
import WeatherSummary from "../components/WeatherSummary";
import { searchMovies, getPopularMovies } from "../services/api";
import { getAllNews } from "../services/thenewsapi";
import { getWeather } from "../services/weatherapi";
import "../css/Home.css";

export default function Home() {
  console.log("Home");
  const [searchQuiery, SetSearchQuiery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [moviesLoading, setMoviesLoading] = useState(true);
  const [newsLoading, setNewsLoading] = useState(true);
  const trimmedQuery = searchQuiery.trim();
  const [coords, setCoords] = useState(null);
  const [geoError, setGeoError] = useState(null);

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

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported by your browser");
      setWeatherLoading(false);
      setCoords({ lat: 47.558, lon: 7.573 });

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });
      },
      (error) => {
        console.error(error);
        setGeoError("Permission denied or error getting location");
        setWeatherLoading(false);
      },
    );
  }, []);

  useEffect(() => {
    if (!coords) return;

    const loadActualWeatherData = async () => {
      try {
        const actualWeatherData = await getWeather(coords.lat, coords.lon);
        setWeatherData(actualWeatherData);
      } catch (err) {
        console.log(err);
        setError("Failed to load weather...");
      } finally {
        setWeatherLoading(false);
      }
    };

    loadActualWeatherData();
  }, [coords]);

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
    [trimmedQuery, moviesLoading],
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
      {error && <div className="error-mess��ge">{error}</div>}

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
      <div>
        {geoError && <div className="weather-error">{geoError}</div>}

        <WeatherSummary weatherData={weatherData} loading={weatherLoading} />
      </div>
    </div>
  );
}
