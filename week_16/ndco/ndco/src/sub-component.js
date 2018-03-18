import React from 'react';

const subComponent = ({ imageSrc }) => {
    return (
        <div>
            <img src={imageSrc} alt='img' />
        </div>
    )
};

export default subComponent;