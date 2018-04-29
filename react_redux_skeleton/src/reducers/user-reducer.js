import { fetchUserType, setUserAgeType, setUserNameType } from '../actions/user-actions';

const initialState = {
    user: {
        id: null,
        name: null,
        age: null
    },
    fetching: false,
    fetched: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
<<<<<<< HEAD
        case fetchUserType: 
=======
        case fetchUserType:
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        case setUserAgeType:
            return {
                ...state,
                user: {
                    ...state.user,
                    age: action.payload
                }
            }
<<<<<<< HEAD
        case setUserNameType: 
=======
        case setUserNameType:
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload
                }
            }
        default:
<<<<<<< HEAD
            return state; 
=======
            return state;
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
    }
}
