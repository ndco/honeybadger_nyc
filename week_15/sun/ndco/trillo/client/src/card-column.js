import React from 'react';
import Card from './card';

const CardColumn = ({ heading, handleCardDelete, handleCardFinish, cards }) => {
    return (
        <div id={`${heading}-column`} class='column'>
            <h2 class='column-heading'>{heading.toUpperCase()}</h2>
            <ul calss='card-list'>
                {
                    cards.map((card) => {
                        return (
                            <Card
                                key={card.id}
                                task={card.task}
                                is_completed={card.is_completed}
                                handleCardDelete={handleCardDelete}
                                handleCardFinish={handleCardFinish}
                            />

                        )
                    } )
                }
            </ul>
        </div>
    )
};

export default CardColumn;