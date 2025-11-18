import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-link">
          Infinity Archive
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/favorite" className="navbar-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
