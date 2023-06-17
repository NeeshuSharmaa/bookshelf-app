import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
