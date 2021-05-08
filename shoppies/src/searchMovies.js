import React from "react";
import Movies from "./movie"

const SearchMovies = (props) => {

return(
  <>
                {props.movies.map((movie) => (
                    <Movies 
                    movie={movie}
                    nomComponent={props.nomComponent}
                    handleNomClick={props.handleNomClick}
                    />
                ))}
  </>
  )
}
export default SearchMovies;


