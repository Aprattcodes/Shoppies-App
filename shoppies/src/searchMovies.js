import React from "react";

export default function SearchMovies() {

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = "Titanic";

    const api = `http://www.omdbapi.com/?&apikey=3f094384&s=${query}&type="movie"`;

    const result = await fetch(api);
    const data = await result.json();
    console.log(data);
  }
    return (
              <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query">Search for a Movie:</label>
                <input type="text" className="query"/>
                <button type="submit" className="button">Search</button>
              </form>
            );
}


