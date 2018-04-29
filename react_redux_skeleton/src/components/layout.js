import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user-actions';
import * as tweetActions from '../actions/tweets-actions';

class Layout extends Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        
=======

>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
        this.fetchTweets = this.fetchTweets.bind(this);
    }

    componentWillMount() {
        this.props.userActions.fetchUser();
        this.fetchTweets();
    }

<<<<<<< HEAD
    componentDidMount() {
    }

    fetchTweets() {
        this.props.tweetActions.fetchTweets();
    }

    updateUserName() {
        this.props.userActions.setUserName('test');
=======
    fetchTweets() {
        this.props.tweetsActions.fetchTweets();
    }

    updateUserName() {
        this.props.userActions.setUserName('John');
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
    }

    render() {
        const { user, tweets } = this.props;
<<<<<<< HEAD
        console.log(user);
        
        if(!tweets.length) {
            return (
                <div>
                    <h1>{this.props.user.name}</h1>
                    <button onClick={this.fetchTweets.bind(this)}> load tweets </button>
                    <button onClick={this.updateUserName.bind(this)}> update user name </button>
                </div>
            )
        }
=======
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a

        const mappedTweets = tweets.map(tweet => {
            return (
                <li key={tweet.id}>
<<<<<<< HEAD
                    <span>{tweet.author}</span>
                    <span>{tweet.content}</span>
=======
                    <span>{tweet.content}</span>
                    <br/>
                    <span>{tweet.author}</span>
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
                </li>
            )
        });

        return (
            <div>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        userFetched: state.user.fetched,
        tweets: state.tweets.tweets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
<<<<<<< HEAD
        tweetActions: bindActionCreators(tweetActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
=======
        tweetsActions: bindActionCreators(tweetActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
>>>>>>> 5f26aa90c960d0d078b503bc9d9fdd90344cda9a
