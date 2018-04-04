import React, { Component } from 'react';

class Tweeter extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    async getAllTweets() {
        const response = await fetch('/tweets');
        const data = await response.json();

        this.setState({
            
        })
    }




    render() {
        return (
            <div>
                <h1>Hello Tweeter</h1>
            </div>
        );
    }
}

export default Tweeter;
