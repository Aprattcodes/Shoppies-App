import React, {useState} from 'react';
import NominateTag from './nominateTag';

const Movies = (props) => {
    const movie = props.movie;
    const [selected, setSelected] = useState(false);   
return(
<>
           <div className="card">
               <img className="card--image"
                  src={movie.Poster}
                  alt={movie.Title + ' poster'}/>
               <div className="card--content">
                     <h2 className="card--title">{movie.Title} ({movie.Year})</h2>
                     {  !selected && 
                         <div onClick={() => {
                             props.handleNomClick(movie);
                                setSelected(true);
                             }}>
                         <NominateTag
                         visible = {props.visible}
                         />  
                     </div>} 
               </div>     
            </div>
           
</>
)
}
export default Movies;
