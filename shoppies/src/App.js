import React , {useState} from 'react';
import SearchMovies from './searchMovies';
import "./index.css";
import NominateTag from './nominateTag';


const App = () => {
  //state input query movies
  const [query, setQuery] = useState('');
  //state for movies and updates the state
  const [movies, setMovies] = useState([]);
    //state for nominee
  const [nominee, selectNominee] = useState([]);

    const addNomination = (movie) => {
        const newNomList = [...nominee, movie];
        selectNominee(newNomList);

    };

  const searchMovies = async (e) => {
    e.preventDefault();

    const api = `http://www.omdbapi.com/?&apikey=3f094384&s=${query}&type="movie"`;

    try {
    const result = await fetch(api);
    const data = await result.json();
    setMovies(data.Search);
    } catch(err) {
      console.error(err);
    }
 }


    return (
           
                <div className="container">
                <h1 className="title">Shoppies Movie Search</h1>
                    <form className="form" onSubmit={searchMovies}>
                        <label htmlFor="query">Search for a Movie:</label>
                            <input type="text" className="input" name='query'
                            value={query} onChange={(e) => setQuery(e.target.value)}
                            />
                    <button type="submit" className="button">Search</button>
                    </form>
                    <div className="nominees">
                        <h1>The Nominees</h1>
                            <SearchMovies
                            movies={nominee}
                            nomComponent={NominateTag}
                            />
                    </div>
                <div className="card-list">
                    <SearchMovies
                    movies={movies}
                    nomComponent={NominateTag}
                    handleNomClick={addNomination}
                    /> 
                </div>  
              </div>           
            );

};

export default App;