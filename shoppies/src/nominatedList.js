import React from "react";
import Movies from "./movie";
// import RemoveNominee from './remove';

const NominatedList = (props) => {

    return(
      <>
                    {props.movies.map((movie) => ( //add movies to array
                        <Movies 
                        movie={movie}
                        remVisible={true} //banner not visible
                        handleNomClick={props.handleNomClick} //empty prop
                        />
                        
                    ))}
                    
      </>
      )
    }
    export default NominatedList;