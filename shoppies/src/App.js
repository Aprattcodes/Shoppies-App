import React , {useState} from 'react';
import SearchMovies from './searchMovies';
import "./index.css";
import NominateTag from './nominateTag';
import NominatedList from './nominatedList';
import RemoveNominee from './remove';


const App = () => {
  //state input query movies
  const [query, setQuery] = useState('');
  //state for movies and updates the state
  const [movies, setMovies] = useState([]);
    //state for nominee
  const [nominee, selectNominee] = useState([]);
  //state for top five
  const [top, topFive] = useState(false);

  
    const addNomination = (movie) => {
        const newNomList = [...nominee, movie];
        selectNominee(newNomList);
        if (newNomList.length === 5) {
          topFive(true)
        }
        
    };

    const removeNomination = (movie) => {
      const newNomList = nominee.filter(
        (nom) => nom.imdbID !== movie.imdbID
      );
      
      selectNominee(newNomList);
      if (newNomList.length === 0) {
        topFive(false)
      }
    };

  const searchMovies = async (e) => {
    e.preventDefault();
//API Key
    const api = `http://www.omdbapi.com/?&apikey=3f094384&s=${query}&type="movie"`;
//fetching api throw error if error in search
    try {
    const result = await fetch(api);
    const data = await result.json();
    setMovies(data.Search);
    } catch(err) {
      console.error(err);
    }
 }


    return (
           //container holds search input and all movie cards
                <div className="container">
                <h1 className="title">Shoppies Movie Search</h1>
                    <form className="form" onSubmit={searchMovies}>
                        <label htmlFor="query">Search for a Movie:</label>
                            <input type="text" className="input" name='query'
                            value={query} onChange={(e) => setQuery(e.target.value)}
                            />
                    <button type="submit" className="button">Search</button>
                    </form>
                  
                    { top && //if top 5 is true show nominated list
                      
                      <div className="nominees">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
                        </svg>
                        <h1>The Nominees</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
                        </svg>
                            <NominatedList
                            movies={nominee}
                            nomComponent={RemoveNominee}
                            handleNomClick={removeNomination}
                            />
                      </div>
                    }

                <div className="card-list">
                    <SearchMovies //searchmovies component with props
                    movies={movies}
                    nomComponent={NominateTag}
                    handleNomClick={addNomination}
                    /> 
                </div>  
              </div>           
            );

};

export default App;