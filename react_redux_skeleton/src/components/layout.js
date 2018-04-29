import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user-actions';
import * as tweetActions from '../actions/tweets-actions';

import Home from './home';
import Signup from './user_credentials/signup';
import Login from './user_credentials/login'

const Layout = () => {
    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Sign up</Link>
                <Link to='/login'>Log in</Link>
            </header>

            <main>
                <Route exact path='/' component={home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
            </main>
        </div>
    )
}


class Layout extends Component {
    constructor(props) {
        super(props);
        
        this.fetchTweets = this.fetchTweets.bind(this);
    }

    componentWillMount() {
        this.props.userActions.fetchUser();
        this.fetchTweets();
    }

    componentDidMount() {
    }

    fetchTweets() {
        this.props.tweetActions.fetchTweets();
    }

    updateUserName() {
        this.props.userActions.setUserName('test');
    }

    render() {
        const { user, tweets } = this.props;
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

        const mappedTweets = tweets.map(tweet => {
            return (
                <li key={tweet.id}>
                    <span>{tweet.author}</span>
                    <span>{tweet.content}</span>
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
        tweetActions: bindActionCreators(tweetActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
