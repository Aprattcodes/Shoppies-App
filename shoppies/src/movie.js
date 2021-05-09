import React, {useState} from 'react';
import NominateTag from './nominateTag';
import RemoveNominee from './remove';

const Movies = (props) => {
    const movie = props.movie;
return(
<>
           <div className="card">
               <img className="card--image"
                  src={movie.Poster}
                  alt={movie.Title + ' poster'}/>
               <div className="card--content">
                     <h2 className="card--title">{movie.Title} ({movie.Year})</h2>
                     
                         <div onClick={() => {
                             props.handleNomClick(movie);
                             }}>
                         <NominateTag
                         visible = {props.visible}
                         />
                         <RemoveNominee
                         remVisible = {props.remVisible}
                         />
                     </div> 
               </div>     
            </div>
           
</>
)
}
export default Movies;
