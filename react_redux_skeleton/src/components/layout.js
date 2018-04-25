import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user-actions';
import * as tweetActions from '../actions/tweets-actions';

class Layout extends Component {
    componentWillMount() {
        this.props.userActions.fetchUser();
    }

    fetchTweets() {
        this.props.tweetActions.fetchTweets();
    }

    render() {
        const { user, tweets } = this.props;

        if(true) {
            return <button onClick={this.fetchTweets.bind(this)}> load twwets </button>
        }

        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>);

        return (
            <div>
                <h1>{user.name}</h1>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        tweetActions: bindActionCreators(tweetActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);