import { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import Movie from "./Movie";

const api_url = "https://www.omdbapi.com/?apikey=b9ddf6f9";

const App = () => {
  const [text, setText] = useState("");
  const [moviesList, setMoviesList] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
    setMoviesList(data.Search);
    return;
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for Movies"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt="serchIcon"
          onClick={() => searchMovies(text)}
        />
      </div>
      {moviesList?.length > 0 ? (
        <div className="container">
          <Movie moviesList={moviesList} />
          {console.log(moviesList)}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies Found</h2>
          {console.log(moviesList)}
        </div>
      )}
    </div>
  );
};

export default App;
