import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Tacos from './components/tacos';
import Layout from './components/layout'

ReactDOM.render(
    <Router>
        <div>
            <Layout />
        </div>
    </Router>,
    document.getElementById('root')
);