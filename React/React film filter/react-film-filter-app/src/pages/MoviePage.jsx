import React from "react";
import MovieFullCard from "../components/MovieFullCard";
import { getFullMovieInfo } from "../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFullCard = async () => {
      try {
        const fullMovieInfoCard = await getFullMovieInfo(id);
        setMovie(fullMovieInfoCard);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadFullCard();
  }, [id]);

  if (loading) return <div className="loading">Movie is loading...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!movie) return <div className="error-message">Movie not found</div>;

  return (
    <div className="moviepage-wrapper">
      <MovieFullCard movie={movie} key={movie.id} />
    </div>
  );
}
