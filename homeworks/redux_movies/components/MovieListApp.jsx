// components/CounterApp.jsx
import { connect } from 'react-redux';
import { loadMovies } from '../actions';
import { bindActionCreators } from "redux";

import MovieList from './MovieList';

const mapStateToProps = (state) => {
  // ...
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    isError: state.isError,
    isSuccess: state.isSuccess
  }
};

const mapDispatchToProps = (dispatch) => {
  // ...
  return { 
    onDidMount: () => {
      loadMovies
    },
    onSearchChange: (param) => {
      loadMovies(param, dispatch)
    }

 };
};

const MovieListApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListApp;