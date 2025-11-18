import "./css/App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/movie/:id" element={<MoviePage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
