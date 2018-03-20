import React from 'react';

const ArticleView = ({ title, author, openModal }) => {
    return (
        <div onClick={openModal} class="article">
            <h3 class="title">Title: {title}</h3>
            <h3 class="author">Author: {author}</h3>
        </div>
    )
}


export default ArticleView;