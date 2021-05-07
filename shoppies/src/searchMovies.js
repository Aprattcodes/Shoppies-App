import React, {useState} from "react";

export default function SearchMovies() {

  //state input query movies
  const [query, setQuery] = useState('');
  //state for movies and updates the state
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const api = `http://www.omdbapi.com/?&apikey=3f094384&s=${query}&type="movie"`;

    try {
    const result = await fetch(api);
    const data = await result.json();
    setMovies(data.Search);
    } catch(err) {
      console.error(err);
    }
  }
    return (
            <> 
              <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query">Search for a Movie:</label>
                <input type="text" className="input" name='query'
                  value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">Search</button>
              </form>
              <div className="card-list">
                
                {movies.map(movie => (
                    <div className="card" key={movie.imdbID}>
                    <img className="card--image"
                       src={movie.Poster}
                       alt={movie.Title + ' poster'}/>
                      <div className="card--content">
                          <h2 className="card--title">{movie.Title}</h2>
                          <p>Released : {movie.Year}</p>
                          <button id="nominate">Nominate</button>
                      </div>
                    </div>
                ))}
              </div>
            </>
            );
}


