import React from "react";
import NominateTag from './nominateTag';
// import AddToList from './addToList';

const SearchMovies = (props) => {
               
return(
  <>
                {props.movies.map((movie, index) => (
                    <div className="card" key={movie.imdbID}>
                    <img className="card--image"
                       src={movie.Poster}
                       alt={movie.Title + ' poster'}/>
                    <div className="card--content">
                          <h2 className="card--title">{movie.Title} ({movie.Year})</h2>
                          <div onClick={() => props.handleNomClick(movie)} className='overlay'>
                              <NominateTag/>   
                          </div> 
                    </div>     
                </div>
                ))}
  </>
  )
}
export default SearchMovies;


