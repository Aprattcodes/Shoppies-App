import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from './searchMovies';
import "./index.css";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Shoppies Movie Search</h1>
        <SearchMovies/>
          <div className="nominees">
          <h1>Here are your nominees!</h1>
          </div>
      </div>
      
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
