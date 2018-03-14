import React from 'react';

const CardColumn = ({ heading }) => {
    return (
        <div id={`${heading}-column`} class='column'>
            <h2 class='column-heading'>{heading.toUpperCase()}</h2>
            <ul calss='card-list'></ul>
        </div>
    )
};

export default CardColumn;