import React, {useState} from "react";

export default function SearchMovies() {

  //state input query movies
  const [query, setQuery] = useState('');
  //state for movies and updates the state
  const [Title, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const api = `http://www.omdbapi.com/?&apikey=3f094384&s=${query}&type="movie"`;

    const result = await fetch(api);
    const data = await result.json();
    console.log(data.results);
  }
    return (
              <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query">Search for a Movie:</label>
                <input type="text" className="input" name='query'
                  value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">Search</button>
              </form>
            );
}


