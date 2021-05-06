import React from "react";

export default function SearchMovies() {
    return (
              <form>
                <label htmlFor="query">Search for a Movie:</label>
                <input type="text" className="query"/>
                <button type="submit" className="button">Search</button>
              </form>
            );
          }


