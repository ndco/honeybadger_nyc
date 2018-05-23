import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE } from '../actions';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  movies: []
};

export default function(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case LOAD_REQUEST: 
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };

    case LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: true,
        movies: action.movies
      };
    }

    case LOAD_FAILURE: {
      // ....
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    }

    default:
      return state;
  }
}