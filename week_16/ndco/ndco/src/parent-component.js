import React, { Component } from 'react';
import SubComponent from './sub-component';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc: 'http://www.fillmurray.com/200/200'
        };
    }

    componentWillMount() {
        console.log('component will mount');
    };

    componentDidUpdate() {
        console.log('component did update');
    };

    componentDidMount() {
        console.log('component did mount');
        this.setState({
            imageSrc: 'http://www.placecage.com/200/200'
        });
    };

    shouldComponentUpdate() {
        console.log('component should update');
        return true;
    }

    render() {
        console.log('component render');

        return (
            <div>
                < SubComponent 
                    imageSrc={this.state.imageSrc}
                />
            </div>
        )
    }
};

export default ParentComponent;