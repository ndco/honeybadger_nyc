<<<<<<< HEAD
import { fetchTweetsFulfilledType } from '../actions/tweets-actions'; 
=======
import { fetchTweetsFulfilledType } from '../actions/tweets-actions';

>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
const initialState = {
    tweets: [],
    fetching: false,
    fetch: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
<<<<<<< HEAD
        case fetchTweetsFulfilledType: 
            return {
                ...state,
                tweets:action.payload
=======
        case fetchTweetsFulfilledType:
            return {
                ...state,
                tweets: action.payload
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
            }
        default:
            return state;
    }
}
