import React, { Component } from 'react';
import PokemonView from './pokemon_view';

class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=300.json?print=pretty')
            .then((response) =>{
                response.json().then((data) => {
                    this.setState({
                        data
                    });
                    console.log(this.state.data.results); 
                });
            });
    }

    render() {
        return (
            <div>
                {
                    <PokemonView 
                        name={this.state.data.results.name}
                        api={this.state.data.results.url}
                    />
                }
            </div>
        )
    }
}

export default Pokemon;