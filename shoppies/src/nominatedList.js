import React from "react";
import Movies from "./movie";

const NominatedList = (props) => {

    return(
      <>
                    {props.movies.map((movie) => ( //add movies to array
                        <Movies 
                        movie={movie}
                        visible={false} //banner not visible
                        handleNomClick={() => {}} //empty prop
                        />
                    ))}
      </>
      )
    }
    export default NominatedList;