import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store from './store';
import Layout from './components/layout'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter>
            <Layout />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);
