import "../css/NewsBar.css";
import { memo } from "react";


function NewsBar({ article }) {
    console.log("NewsBar");
  const { title, image_url, snippet, url } = article;
  return (
    <article className="newsbar-card">
      <div className="newsbar-card-header">
        <span className="newsbar-card-pill">Top story</span>
        <h3 className="newsbar-card-title">{title}</h3>
      </div>
      {image_url && (
        <div className="newsbar-image">
          <img src={image_url} alt={title} />
        </div>
      )}
      <p className="newsbar-text">{snippet}</p>
      <a
        className="newsbar-button"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Read news
      </a>
    </article>
  );
}

export default memo(NewsBar);