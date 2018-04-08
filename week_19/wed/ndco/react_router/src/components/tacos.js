import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Tacos extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>THIS IS TACO</div>
        )
    }

    componentDidMount() {
        <Redirect to='/pizza' />
    }
}

export default Tacos;