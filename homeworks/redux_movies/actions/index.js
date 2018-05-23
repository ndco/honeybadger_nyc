// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';

import fetch from 'isomorphic-fetch';

// action creators go here
export const loadMovies = (searchParam, dispatch) => {
  // fetch happens inside load request action creator!
	// indicate we are loading movies now
  
  dispatch(requestMovies());


  fetch(`http://www.omdbapi.com/?s=${searchParam}&apikey=${apiKey}`)
    .then(response => response.json())
    .then(responseJson => {

      // console.log(responseJson)
      // var newResponse = responseJson.Search.map(function(movie) {
      //   return {
      //     Title: movie.Title,
      //     imdbID: movie.imdbID
      //   }
      // })
      console.log(responseJson.Response)
      dispatch(someActionCreator(responseJson));
    })
  // ...what about failure?...
    .catch((err) => {
      console.log(err)
      dispatch(handleError(err))
    })
};

export const handleError = () => {
  return {
    type: LOAD_FAILURE,
    errorMessage: err.Error
  }
}

export const requestMovies = () => {
	// create action for requesting movies
  // ...
  return {
    type: LOAD_REQUEST
  }
};

export const someActionCreator = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    // anything else you want!!
    // include movies coming from the data
    movies: jsonData.Search
    // TODO: handle edge cases: null response, no search results
  }
};