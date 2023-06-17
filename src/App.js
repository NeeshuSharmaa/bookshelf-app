import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <h3>The BookShelf</h3>
        <Link to="/search">
          <span>Search books</span>
          <img src="search.svg" alt="search" />
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
