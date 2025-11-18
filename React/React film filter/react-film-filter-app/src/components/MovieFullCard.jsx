import React from "react";
import "../css/MovieFullCard.css";

export default function MovieFullCard({ movie }) {
  const {
    original_title,
    poster_path,
    budget,
    genres,
    imdb_id,
    origin_country,
    original_language,
    popularity,
    production_companies,
    release_date,
    vote_average,
    vote_count,
    overview,
    homepage,
  } = movie;
  const openHomePage = () => {
    if (homepage) {
      window.open(homepage, "_blank");
    }
  };
const releaseYear = release_date?.split("-")[0];

  return (
    <div className="fullcard-wrapper">
      <div className="fullcard-header">
        <h2 className="fullcard-header__main-title">{original_title}</h2>
      </div>
      <div className="fullcard-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
      </div>
      <div className="fullcard-info">
        <p>Total budget: {budget}</p>
        <p>Movie genres: {genres.map((g) => g.name).join(", ") || "Unknown"}</p>
        <p>IMDB id: {imdb_id}</p>
        <p>Country: {origin_country.join(", ") || "Unknown"}</p>
        <p>Language: {original_language}</p>
        <p>Popularity: {popularity}</p>
        <p>
          Product of:{" "}
          {production_companies.map((c) => c.name).join(", ") || "Unknown"}
        </p>
        <p>Release date: {releaseYear}</p>
        <p>Vote average: {vote_average}</p>
        <p>Vote count: {vote_count}</p>
      </div>
      <div className="fullcard-text">
        <p>{overview}</p>
      </div>
      <div className="fullcard-buttons">
        <button onClick={openHomePage}>Go to movie page</button>
      </div>
    </div>
  );
}
