import React, { Component } from 'react';
import ArticleList from './article-list';
import ArticleView from './article-view';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            modalOpen: false
        }

        this.openModal = this.openModal.bind(this);
    }

    componentDidMount(){
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.articleId}.json?print=pretty`)
            .then((resonse) => {
                resonse.json().then((data) => {
                    this.setState({
                        data
                    });
                });
            });
    }

    openModal() {
        this.setState({
            modalOpen: true
        })
    }


    closeModal() {
        this.setState({
            modalOpen: false
        })
    }
    render() {
        return (
                            <ArticleView
                                key={this.state.data.id}
                title={this.state.data.title}
                author={this.state.data.author}
                            />
        )
    }

}



export default Article;