import "../css/MovieCard.css";
import { memo } from "react";
import { Link } from "react-router";

function MovieCard({ movie }) {
  console.log("MovieCard");
  const onFavoriteClick = () => {
    alert("Clicked!");
  };

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <div className="movie-overlay">
            <button
              className="favorite-btn"
              type="button"
              aria-label="Add to favorites"
              onClick={onFavoriteClick}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s-6.4-4.4-8.5-7.7c-2-3.1-.2-7.3 3.3-7.7 2.6-.4 4 1.4 5.2 2.7 1.2-1.3 2.6-3.2 5.2-2.7 3.5.4 5.4 4.7 3.3 7.7C18.4 16.6 12 21 12 21z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date.split("-")[0]}</p>
        </div>
      </div>
    </Link>
  );
}

export default memo(MovieCard);
