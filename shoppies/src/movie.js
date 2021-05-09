import React, {useState} from 'react';
import NominateTag from './nominateTag';
import RemoveNominee from './remove';

const Movies = (props) => {
    const movie = props.movie;
    const [selected, setSelected] = useState(false);
    const [unselected, setUnselected] = useState(true);


    // const ShowSelected = (movie) => {
    //     const newSelection = [];
    //     selectNominee(newNomList);
    //     if (newNomList.length === 5) {
    //       topFive(true)
    //     }
    // };

return(
<>
           <div className="card">
               <img className="card--image"
                  src={movie.Poster}
                  alt={movie.Title + ' poster'}/>
               <div className="card--content">
                     <h2 className="card--title">{movie.Title} ({movie.Year})</h2>
                     { !selected &&
                         <div onClick={() => {
                             props.handleNomClick(movie);
                             setSelected(true);
                             }}>
                    
                         <NominateTag
                         visible = {props.visible}
                         />
                     
                         <RemoveNominee
                         remVisible = {props.remVisible}
                         />
                     </div> }
                     { unselected &&
                         <div onClick={() => {
                             props.handleNomClick(movie);
                             setSelected(false);
                             }}>
                    
                         <NominateTag
                         visible = {props.visible}
                         />
                     
                         <RemoveNominee
                         remVisible = {props.remVisible}
                         />
                     </div> }
               </div>     
            </div>
           
</>
)
}
export default Movies;
