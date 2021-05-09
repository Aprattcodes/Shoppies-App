import React from "react";
import Movies from "./movie"


const SearchMovies = (props) => {

return(
  <>
                {props.movies.map((movie, index) => ( //add search list to array
                    <Movies 
                    movie={movie}
                    visible={true} //banner visible 
                    nomComponent={props.nomComponent}
                    handleNomClick={props.handleNomClick}
                    />
                ))}
  </>
  )
}
export default SearchMovies;


