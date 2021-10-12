import React from 'react';
import { useHistory } from 'react-router-dom';
export default function MovieCard (props) {
  const history = useHistory();
 
 
  const moviesPage = () => {
    history.push("/movies");
  }
//* [ ] When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/
//id of clicked movie here}` to see the details of the selected movie.
  return( <button
    onClick={moviesPage}>
    MovieList
    </button>)
}
