import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

const middleware = applyMiddleware(promise(), thunk);

export default createStore(
    reducer,
<<<<<<< HEAD
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    middleware);
=======
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
);
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
