import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from  './Movies/MovieList';
import Movie from  './Movies/Movie';
export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
          console.log(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  setSaved(id);
  };

  return (
    <div>
      <SavedList list={[saved]} />
     
      <div>
         { <Switch>
        {<Route path={'/movies/:id'}>
          <Movie saved={saved} setSaved={addToSavedList}/>
        </Route> }
        
        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
        </Switch> }
        </div>
    </div>
  );
}

{/* // * [ ] Wrap your app with the router.
// * [ ] Inside your App file add two routes.
//   * [ ] one route for `/` that loads the `MovieList` component. This component will need the movies injected into it via props.
//   * [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.

// #### Add Functionality

//* [ ] When a user clicks on the movie card inside `MovieList` they should be taken to `/movies/
//id of clicked movie here}` to see the details of the selected movie.
// * [ ] You will need to modify line 7 of `Movie.js` to get the id of the selected movie from the URL.
// * [ ] Add functionality so the `Home` button on the `SavedList` component navigates back to home.
// * [ ] You should now be able to navigate back and forth between the list of movies and the detailed view of a single movie. */}