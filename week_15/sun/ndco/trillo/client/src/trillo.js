import React, { Component } from 'react';
import NewCardInput from './new-card-input';
import CardColumn from './card-column';

class Trillo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completedCards: [],
            uncompletedCards: []
        }

        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleCardFinish = this.handleCardFinish.bind(this);

    }

    handleCardDelete() {
        console.log('card deleted');
    }

    handleCardFinish() {
        console.log('card finished');
    }
    
    sortCardsByCompletion(array) {
        const completedCards = array.filter(card => card.is_completed);
        const uncompletedCards = array.filter(card => !card.is_completed);

        return {
            completedCards,
            uncompletedCards
        }
    }

    getCards() {
        fetch('/cards')
            .then((response) => {
                response.json().then((json) =>{
                    console.log(json);
                    const cards = this.sortCardsByCompletion(json);
                    
                    this.setState({
                        completedCards: cards.completedCards,
                        uncompletedCards: cards.uncompletedCards
                    })
                })
            })
    }

    componentDidMount() {
        this.getCards();
    }



    render() {
        return (
            <div>
                <h1>Trillo</h1>
                <p><i>A Honebadger Product</i></p>
                <NewCardInput />
                <CardColumn 
                    heading={'todo'}
                    handleCardDelete={this.handleCardDelete}
                    handleCardFinish={this.handleCardFinish}
                    cards={this.state.uncompletedCards}
                />
                <CardColumn 
                    heading={'done'}
                    handleCardDelete={this.handleCardDelete}
                    cards={this.state.completedCards}
                />
            </div>
        )
    }
};

export default Trillo;