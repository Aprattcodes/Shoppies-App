import React from "react";
import Movies from "./movie";
// import RemoveNominee from './remove';

const NominatedList = (props) => {
  
    return(
      <>
      
                    {
                    props.movies.map((movie, index) => ( //add movies to array
                        <Movies 
                        movie={movie}
                        remVisible = {true}
                        handleNomClick={props.handleNomClick} //empty prop
                        />
                    ))}
                    
      </>
      )
    }
    export default NominatedList;

